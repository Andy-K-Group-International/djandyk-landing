"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { listActive, listActiveSections } from "@/lib/supabase/queries/question-items";
import { getLeadByEmail, upsertLead } from "@/lib/supabase/queries/client-leads";
import { saveDraft, getDraftByEmail, deleteDraft, submitDraft } from "@/lib/supabase/queries/questionnaires";
import {
  sendPreQualificationNotification,
  sendQuestionnaireNotification,
  sendClientConfirmation,
} from "@/app/actions/email";
import type { Question, QuestionSection } from "@/lib/questionnaire-schema";
import { cn } from "@/lib/utils";
import FieldRenderer from "./FieldRenderer";
import ReviewPage from "./ReviewPage";
import { ArrowLeft, ArrowRight, Check, RotateCcw, PartyPopper, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

const STAFF_EMAIL = "info@andykgroupinternational.com";

const SECTION_ORDER = [
  "pre-qualification",
  "goals-context",
  "company-profile",
  "segment-selection",
  "e2e",
  "b2b",
  "b2g",
  "adam",
  "proposal-readiness",
  "attachments",
  "review",
];

const SECTION_LABELS: Record<string, string> = {
  "pre-qualification": "Pre-Qualification",
  "goals-context": "Goals",
  "company-profile": "Company",
  "segment-selection": "Services",
  e2e: "End-to-End",
  b2b: "B2B",
  b2g: "B2G",
  adam: "A.D.A.M.",
  "proposal-readiness": "Proposal",
  attachments: "Uploads",
  review: "Review",
};

type FlowPhase = "email" | "pre-qualification" | "main-questionnaire" | "submitted";

interface PageData {
  sectionId: string;
  subsectionId: string;
  subsectionTitle: string;
  sectionLabel: string;
  questions: Question[];
}

export default function UnifiedQuestionnaireFlow({ initialEmail }: { initialEmail?: string }) {
  // Core state
  const [email, setEmail] = useState(initialEmail || "");
  const [phase, setPhase] = useState<FlowPhase>(initialEmail ? "email" : "email");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [serviceType, setServiceType] = useState<string>("");
  const [showReview, setShowReview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [showFinishButton, setShowFinishButton] = useState(false);

  // Loading / draft state
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [draft, setDraft] = useState<any>(null);
  const [draftLoaded, setDraftLoaded] = useState(false);

  // DB data
  const [dbQuestions, setDbQuestions] = useState<Question[] | null>(null);
  const [dbSections, setDbSections] = useState<QuestionSection[] | null>(null);

  const allQuestions: Question[] = dbQuestions ?? [];
  const questionSections: QuestionSection[] = dbSections ?? [];

  // Load questions/sections from Supabase
  useEffect(() => {
    const supabase = createClient();
    async function fetchData() {
      const [questions, sections] = await Promise.all([
        listActive(supabase),
        listActiveSections(supabase),
      ]);
      setDbQuestions(
        questions.map((q: any) => ({
          id: q.question_id,
          number: q.number,
          question: q.question,
          type: q.type,
          required: q.required,
          options: q.options ?? undefined,
          placeholder: q.placeholder ?? undefined,
          conditionalOn: q.conditional_on ?? undefined,
          section: q.section,
          subsection: q.subsection,
          serviceScope: q.service_scope ?? [],
        }))
      );
      setDbSections(sections);
    }
    fetchData();
    setMounted(true);
  }, []);

  // Auto-read email from URL or localStorage
  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams(window.location.search);
    const urlEmail = params.get("email");
    if (urlEmail) {
      setEmail(urlEmail);
      handleEmailSubmit(urlEmail);
    } else {
      const saved = localStorage.getItem("andyk_email");
      if (saved && !email) setEmail(saved);
    }
  }, [mounted]);

  // Auto-save drafts (debounced)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  useEffect(() => {
    if (!email || phase === "email" || phase === "submitted" || !draftLoaded) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      const supabase = createClient();
      saveDraft(supabase, { email, answers, selectedSegments, currentPageIndex }).catch(() => {});
    }, 2000);
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
  }, [answers, currentPageIndex, selectedSegments, email, phase, draftLoaded]);

  // Confetti on submit
  useEffect(() => {
    if (phase !== "submitted") return;
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    const timer = setTimeout(() => setShowFinishButton(true), 250);
    return () => clearTimeout(timer);
  }, [phase]);

  // ─── Email submit handler ───
  const handleEmailSubmit = useCallback(
    async (submittedEmail?: string) => {
      const e = submittedEmail || email;
      if (!e) return;
      setLoading(true);
      localStorage.setItem("andyk_email", e);

      try {
        const supabase = createClient();
        const lead = await getLeadByEmail(supabase, e);

        if (lead?.pre_qualification_completed) {
          // Returning user — skip pre-qual, check for draft
          setServiceType(lead.service_type || "");
          if (lead.service_type) {
            setSelectedSegments([lead.service_type.toUpperCase()]);
          }
          // Load pre-qual answers into state
          if (lead.pre_qualification_data) {
            setAnswers((prev) => ({ ...prev, ...lead.pre_qualification_data }));
          }

          const draftData = await getDraftByEmail(supabase, e);
          if (draftData && Object.keys(draftData).length > 0) {
            setDraft(draftData);
            setShowResumePrompt(true);
          } else {
            setDraftLoaded(true);
          }
          setPhase("main-questionnaire");
        } else {
          // New user — start pre-qualification
          setDraftLoaded(true);
          setPhase("pre-qualification");
        }
      } catch {
        // If lead lookup fails, just start pre-qual
        setDraftLoaded(true);
        setPhase("pre-qualification");
      } finally {
        setLoading(false);
      }
    },
    [email]
  );

  // ─── Pre-qualification completion ───
  const handlePreQualComplete = useCallback(async () => {
    setLoading(true);
    try {
      // Determine service type from answers
      const situation: string[] = answers.preSituation || [];
      let determined = "e2e"; // Default to E2E for strategic engagement

      // If user explicitly selected segments later, use those
      // For now, recommend based on situation
      if (
        situation.includes("We need automation & operational systems") &&
        situation.length === 1
      ) {
        determined = "adam";
      }

      setServiceType(determined);
      setSelectedSegments([determined.toUpperCase()]);

      // Save to client_leads
      const supabase = createClient();
      const preData: Record<string, any> = {};
      for (const [key, val] of Object.entries(answers)) {
        if (key.startsWith("pre")) preData[key] = val;
      }

      await upsertLead(supabase, {
        email,
        pre_qualification_completed: true,
        pre_qualification_completed_at: new Date().toISOString(),
        pre_qualification_data: preData,
        service_type: determined,
      });

      // Send notification email
      sendPreQualificationNotification({
        staffEmail: STAFF_EMAIL,
        clientEmail: email,
        companyName: answers.preCompanyName || "Unknown",
        contactName: answers.preContactName || "Unknown",
        serviceType: determined,
        answers,
      }).catch(() => {}); // Fire and forget

      setPhase("main-questionnaire");
      setCurrentPageIndex(0);
      setShowReview(false);
    } catch (err) {
      console.error("Pre-qual completion error:", err);
    } finally {
      setLoading(false);
    }
  }, [answers, email]);

  // ─── Section/question filtering ───
  const filteredQuestions = useMemo(() => {
    if (phase === "pre-qualification") {
      return allQuestions
        .filter((q) => q.section === "pre-qualification")
        .filter((q) => {
          if (!q.conditionalOn) return true;
          return answers[q.conditionalOn.questionId] === q.conditionalOn.value;
        });
    }

    // Main questionnaire — filter by service_scope
    const scopeKey = serviceType || "e2e";
    return allQuestions
      .filter((q) => {
        if (q.section === "pre-qualification") return false; // Already done
        const scope: string[] = q.serviceScope || [];
        return scope.includes("shared") || scope.includes(scopeKey);
      })
      .filter((q) => {
        if (!q.conditionalOn) return true;
        return answers[q.conditionalOn.questionId] === q.conditionalOn.value;
      });
  }, [allQuestions, phase, serviceType, answers]);

  const activeSections = useMemo(() => {
    if (phase === "pre-qualification") return ["pre-qualification"];

    return SECTION_ORDER.filter((sectionId) => {
      if (sectionId === "pre-qualification") return false;
      if (sectionId === "review") return false; // Handled separately
      if (sectionId === "e2e") return serviceType === "e2e";
      if (sectionId === "b2b") return serviceType === "b2b" || selectedSegments.includes("B2B");
      if (sectionId === "b2g") return serviceType === "b2g" || selectedSegments.includes("B2G");
      if (sectionId === "adam") return serviceType === "adam" || selectedSegments.includes("ADAM");
      return true;
    });
  }, [phase, serviceType, selectedSegments]);

  // ─── Pages ───
  const pages = useMemo(() => {
    const result: PageData[] = [];
    activeSections.forEach((sectionId) => {
      const section = questionSections.find((s) => s.id === sectionId);
      if (!section) return;
      const sectionQs = filteredQuestions.filter((q) => q.section === sectionId);
      if (section.subsections && section.subsections.length > 0) {
        section.subsections.forEach((sub: any) => {
          const subQs = sectionQs.filter((q) => q.subsection === sub.id);
          if (subQs.length === 0) return;
          result.push({
            sectionId,
            subsectionId: sub.id,
            subsectionTitle: sub.title,
            sectionLabel: SECTION_LABELS[sectionId] || sectionId,
            questions: subQs,
          });
        });
      } else {
        if (sectionQs.length > 0) {
          result.push({
            sectionId,
            subsectionId: sectionId,
            subsectionTitle: section.title,
            sectionLabel: SECTION_LABELS[sectionId] || sectionId,
            questions: sectionQs,
          });
        }
      }
    });
    return result;
  }, [activeSections, filteredQuestions, questionSections]);

  const progress = useMemo(() => {
    if (showReview) return 1;
    if (pages.length <= 1) return 0;
    return currentPageIndex / pages.length;
  }, [showReview, pages.length, currentPageIndex]);

  const currentPage = pages[currentPageIndex];

  // ─── Handlers ───
  const handleAnswerChange = useCallback((questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (questionId === "segments") {
      const segs = Array.isArray(value) ? value : [];
      setSelectedSegments(segs);
      // If E2E is selected, override service type
      if (segs.includes("E2E")) setServiceType("e2e");
      else if (segs.includes("B2B") && segs.length === 1) setServiceType("b2b");
      else if (segs.includes("B2G") && segs.length === 1) setServiceType("b2g");
      else if (segs.includes("ADAM") && segs.length === 1) setServiceType("adam");
    }
  }, []);

  const animateTransition = useCallback((cb: () => void) => {
    setPageVisible(false);
    setTimeout(() => { cb(); setPageVisible(true); }, 150);
  }, []);

  const handleNext = useCallback(() => {
    if (phase === "pre-qualification" && currentPageIndex >= pages.length - 1) {
      handlePreQualComplete();
      return;
    }
    if (currentPageIndex < pages.length - 1) {
      animateTransition(() => setCurrentPageIndex((p) => p + 1));
    } else {
      animateTransition(() => setShowReview(true));
    }
  }, [currentPageIndex, pages.length, phase, animateTransition, handlePreQualComplete]);

  const handleBack = useCallback(() => {
    if (showReview) {
      animateTransition(() => setShowReview(false));
      return;
    }
    if (currentPageIndex > 0) {
      animateTransition(() => setCurrentPageIndex((p) => p - 1));
    }
  }, [currentPageIndex, showReview, animateTransition]);

  const handleEditFromReview = useCallback(
    (questionId: string) => {
      const idx = pages.findIndex((p) => p.questions.some((q) => q.id === questionId));
      if (idx >= 0) {
        animateTransition(() => { setCurrentPageIndex(idx); setShowReview(false); });
      }
    },
    [pages, animateTransition]
  );

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const supabase = createClient();
      await submitDraft(supabase, { email, answers, selectedSegments });

      // Send emails (fire and forget)
      const companyName = answers.companyName || answers.preCompanyName || "Unknown";
      const contactName = answers.contactName || answers.preContactName || "Unknown";

      sendQuestionnaireNotification({
        staffEmail: STAFF_EMAIL,
        clientEmail: email,
        companyName,
        contactName,
        serviceType: serviceType || "e2e",
        answers,
      }).catch(() => {});

      sendClientConfirmation({
        clientEmail: email,
        clientName: contactName,
        serviceType: serviceType || "e2e",
      }).catch(() => {});

      setPhase("submitted");
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, answers, selectedSegments, serviceType]);

  const handleResumeDraft = useCallback(() => {
    if (draft) {
      // Reconstruct answers from draft fields
      const draftAnswers: Record<string, any> = {};
      if (draft.pre_qualification_data) Object.assign(draftAnswers, draft.pre_qualification_data);
      if (draft.b2b_data) Object.assign(draftAnswers, draft.b2b_data);
      if (draft.b2g_data) Object.assign(draftAnswers, draft.b2g_data);
      if (draft.adam_data) Object.assign(draftAnswers, draft.adam_data);
      if (draft.e2e_data) Object.assign(draftAnswers, draft.e2e_data);
      // Add shared fields
      if (draft.company_name) draftAnswers.companyName = draft.company_name;
      if (draft.website_url) draftAnswers.websiteUrl = draft.website_url;
      if (draft.contact_name) draftAnswers.contactName = draft.contact_name;
      if (draft.contact_phone) draftAnswers.contactPhone = draft.contact_phone;
      if (draft.products_services) draftAnswers.productsServices = draft.products_services;
      if (draft.business_goals) draftAnswers.successVision = draft.business_goals;
      if (draft.challenges) draftAnswers.biggestObstacle = draft.challenges;
      if (draft.competitors) draftAnswers.competitors = draft.competitors;
      if (draft.usp) draftAnswers.usp = draft.usp;

      setAnswers((prev) => ({ ...prev, ...draftAnswers }));
      setSelectedSegments(draft.segments || []);
    }
    setShowResumePrompt(false);
    setDraftLoaded(true);
  }, [draft]);

  const handleStartFresh = useCallback(() => {
    if (email) {
      const supabase = createClient();
      deleteDraft(supabase, email).catch(() => {});
    }
    // Keep pre-qual answers
    const preAnswers: Record<string, any> = {};
    for (const [k, v] of Object.entries(answers)) {
      if (k.startsWith("pre")) preAnswers[k] = v;
    }
    setAnswers(preAnswers);
    setCurrentPageIndex(0);
    setShowReview(false);
    setShowResumePrompt(false);
    setDraftLoaded(true);
  }, [email, answers]);

  // ─── Loading states ───
  if (!mounted || !dbQuestions || !dbSections) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-highlight" />
      </div>
    );
  }

  // ─── Email entry ───
  if (phase === "email") {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Get Started</h2>
        <p className="text-sm text-[rgba(255,255,255,0.5)] mb-8">
          Enter your business email to begin the strategic qualification process.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); handleEmailSubmit(); }}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-foreground placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/30 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient disabled:opacity-50 w-full"
          >
            <span className="relative z-10">
              {loading ? "Checking..." : "Continue"}
            </span>
          </button>
        </form>
      </div>
    );
  }

  // ─── Resume prompt ───
  if (showResumePrompt && draft) {
    const updatedDate = new Date(draft.updated_at).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric",
    });
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-highlight/10">
              <RotateCcw className="h-5 w-5 text-highlight" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Welcome back</h2>
          <p className="text-sm text-[rgba(255,255,255,0.5)] mb-1">
            You have an unfinished questionnaire from {updatedDate}.
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.5)] mb-6">
            Would you like to continue where you left off?
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleStartFresh}
              className="inline-flex items-center justify-center h-10 px-5 text-sm text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.05)] transition-all rounded-lg"
            >
              Start Fresh
            </button>
            <button
              onClick={handleResumeDraft}
              className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
            >
              <span className="relative z-10">Continue</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Submitted ───
  if (phase === "submitted") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-highlight/10">
              <PartyPopper className="h-8 w-8 text-highlight" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Congratulations!</h2>
          <p className="text-[rgba(255,255,255,0.5)] leading-relaxed mb-8">
            Your questionnaire has been submitted successfully.
            {serviceType === "e2e"
              ? " Our senior team will review your submission within 48 hours."
              : " Our team will review your submission and be in touch shortly."}
          </p>
          <div className={cn("transition-all duration-500 ease-out", showFinishButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
            <a
              href="/"
              className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient"
            >
              <span className="relative z-10 flex items-center gap-2">
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main questionnaire / pre-qualification flow ───
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-[rgba(255,255,255,0.4)] uppercase tracking-wider">
            {phase === "pre-qualification" ? "Pre-Qualification" : "Questionnaire"}
          </span>
          <span className="text-xs font-mono text-[rgba(255,255,255,0.4)]">
            {Math.round(progress * 100)}%
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-highlight to-rose transition-all duration-500 ease-out"
            style={{ width: `${Math.max(progress * 100, 2)}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className={cn("transition-all duration-200 ease-out", pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
        {showReview ? (
          <ReviewPage
            answers={answers}
            questions={filteredQuestions}
            sections={questionSections}
            onEdit={handleEditFromReview}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        ) : currentPage ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-highlight">
                {currentPage.sectionLabel}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mt-1">
                {currentPage.subsectionTitle}
              </h2>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {currentPage.questions.map((q) => (
                <div key={q.id}>
                  {q.type !== "checkbox" && (
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {q.question}
                      {q.required && <span className="text-highlight ml-1">*</span>}
                    </label>
                  )}
                  <FieldRenderer
                    question={q}
                    value={answers[q.id]}
                    onChange={(val) => handleAnswerChange(q.id, val)}
                  />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <div>
                {currentPageIndex > 0 && (
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center justify-center gap-2 h-10 px-5 text-sm text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.05)] transition-all rounded-lg"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                )}
              </div>
              <button
                onClick={handleNext}
                disabled={loading}
                className="relative inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>Processing <Loader2 className="h-4 w-4 animate-spin" /></>
                  ) : phase === "pre-qualification" && currentPageIndex >= pages.length - 1 ? (
                    <>Complete Pre-Qualification <Check className="h-4 w-4" /></>
                  ) : currentPageIndex === pages.length - 1 ? (
                    <>Review Answers <Check className="h-4 w-4" /></>
                  ) : (
                    <>Next <ArrowRight className="h-4 w-4" /></>
                  )}
                </span>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[40vh]">
            <Loader2 className="h-8 w-8 animate-spin text-highlight" />
          </div>
        )}
      </div>
    </div>
  );
}
