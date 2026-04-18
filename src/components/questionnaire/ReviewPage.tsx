"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Pencil } from "lucide-react";

interface Question {
  id: string;
  question: string;
  type: string;
  options?: { label: string; value: string }[];
  section: string;
  subsection: string;
}

interface QuestionSection {
  id: string;
  title: string;
  subsections: { id: string; title: string }[];
}

interface ReviewPageProps {
  answers: Record<string, any>;
  questions: Question[];
  sections: QuestionSection[];
  onEdit: (questionId: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function ReviewPage({
  answers,
  questions,
  sections,
  onEdit,
  onSubmit,
  isSubmitting,
}: ReviewPageProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.map((s) => s.id))
  );
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const formatAnswer = (q: Question, val: any): string => {
    if (val === undefined || val === null || val === "") return "Not answered";
    if (q.type === "checkbox") return val ? "Yes" : "No";
    if (q.type === "multi-select" && Array.isArray(val)) {
      return val
        .map((v: string) => q.options?.find((o) => o.value === v)?.label || v)
        .join(", ");
    }
    if (q.type === "single-select") {
      return q.options?.find((o) => o.value === val)?.label || val;
    }
    if (q.type === "address" && typeof val === "object") {
      return [val.line1, val.line2, val.city, val.postcode, val.country]
        .filter(Boolean)
        .join(", ");
    }
    if (q.type === "file" && Array.isArray(val)) return val.join(", ");
    return String(val);
  };

  const answeredSections = useMemo(() => {
    return sections
      .filter((s) => questions.some((q) => q.section === s.id && answers[q.id] !== undefined))
      .map((s) => ({
        ...s,
        questions: questions.filter(
          (q) => q.section === s.id && answers[q.id] !== undefined
        ),
      }));
  }, [sections, questions, answers]);

  return (
    <div>
      <div className="mb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-highlight">
          Review
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mt-1">
          Review Your Answers
        </h2>
        <p className="text-sm text-[rgba(255,255,255,0.5)] mt-2">
          Please review all your answers before submitting.
        </p>
      </div>

      <div className="space-y-3">
        {answeredSections.map((section) => (
          <div
            key={section.id}
            className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left hover:bg-[rgba(255,255,255,0.03)] transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[rgba(255,255,255,0.4)] transition-transform duration-200",
                  expandedSections.has(section.id) ? "rotate-180" : ""
                )}
              />
            </button>

            {expandedSections.has(section.id) && (
              <div className="border-t border-[rgba(255,255,255,0.06)] px-5 py-3 space-y-3">
                {section.questions.map((q) => (
                  <div key={q.id} className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[rgba(255,255,255,0.5)]">{q.question}</p>
                      <p className="text-sm text-foreground mt-0.5 break-words">
                        {formatAnswer(q, answers[q.id])}
                      </p>
                    </div>
                    <button
                      onClick={() => onEdit(q.id)}
                      className="shrink-0 mt-1 p-1 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                    >
                      <Pencil className="h-3 w-3 text-[rgba(255,255,255,0.4)]" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="mt-10 text-center">
        {!showConfirm ? (
          <button
            onClick={() => setShowConfirm(true)}
            className="relative inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">Submit Questionnaire</span>
          </button>
        ) : (
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 max-w-md mx-auto">
            <p className="text-sm text-foreground mb-4">
              Are you sure you want to submit? You can update your answers later if needed.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="inline-flex items-center justify-center h-10 px-5 text-sm text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.05)] transition-all rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient disabled:opacity-50"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Submitting..." : "Confirm & Submit"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
