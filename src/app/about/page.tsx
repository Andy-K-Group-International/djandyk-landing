import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | DJ Andy'K",
  description:
    "Artist interview and profile — DJ Andy'K on music, creativity, sound, and the stories behind the releases.",
  alternates: { canonical: "/about" },
};

const QA = [
  {
    num: "01",
    label: "Beginning",
    question: "Why music?",
    answer:
      "I've always loved music. But growing up, I didn't really know how to express myself with words. Music showed me there was another way.",
  },
  {
    num: "02",
    label: "Process",
    question: "When does creation happen?",
    answer:
      "Usually when I'm alone. And usually after something happens — something good, or something bad. Then I sit down on my own and start writing.",
  },
  {
    num: "03",
    label: "Meaning",
    question: "What is music to you?",
    answer:
      "My slogan says: 'Music is your passion.' But for me, it's more than passion. It's a friend. It's therapy. It's salvation. It's rescue. It's love. And even then, it's never enough.",
  },
  {
    num: "04",
    label: "Fame",
    question: "Why is this not about fame?",
    answer:
      "For me, it's not about that. I'm happy when people understand it, when they feel it. That is what matters most to me.",
  },
  {
    num: "05",
    label: "Connection",
    question: "What should people feel in your music?",
    answer:
      "First, I want them to find themselves. Then maybe they realize what we all share: love, drama, sadness, happiness. And then they understand that what I create is really just life.",
  },
  {
    num: "06",
    label: "Sound",
    question: "How would you describe your sound?",
    answer:
      "I grew up on trance. Now I combine house, progressive, and EDM. But the most important thing for me is always the story.",
  },
  {
    num: "07",
    label: "Turning Point",
    question: "Was there a moment that defined you?",
    answer:
      "There were more of them. But if I had to name one important point, my album Deep Connections 2025 gave me the base to keep going.",
  },
  {
    num: "08",
    label: "Challenge",
    question: "What is the hardest part right now?",
    answer:
      "Everything around the online world. On one side, it helps artists a lot. On the other side, it also creates problems.",
  },
  {
    num: "09",
    label: "Audience",
    question: "Who do you make music for?",
    answer:
      "For anyone who feels it. I think music — or art in general — cannot really be limited to one type of person. It belongs to whoever finds themselves in it.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <div className="max-w-[860px] mx-auto px-6 py-16 md:py-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to djandyk.com
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-highlight font-mono block mb-3">
            Artist Profile
          </span>
          <h1 className="text-[clamp(2rem,1.6rem+1.5vw,3rem)] font-bold tracking-tight text-foreground mb-4">
            DJ{" "}
            <span className="font-serif font-light italic text-[1.1em]">Andy&apos;K</span>
          </h1>
          <p className="text-base text-muted font-light max-w-[520px]">
            {COMPANY.realName} · {COMPANY.basedIn} · {COMPANY.genre}
          </p>
        </div>

        {/* Q&A sections */}
        <div className="space-y-0 divide-y divide-grid-300 border-t border-grid-300">
          {QA.map(({ num, label, question, answer }) => (
            <div
              key={num}
              className="py-10 flex flex-col sm:flex-row sm:gap-12"
            >
              {/* Left: number + label */}
              <div className="sm:w-[180px] shrink-0 mb-4 sm:mb-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block">
                  {num} / {label}
                </span>
              </div>

              {/* Right: question + answer */}
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-semibold text-foreground mb-3 leading-snug">
                  {question}
                </h2>
                <p className="text-[15px] text-muted leading-relaxed font-light">
                  &ldquo;{answer}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-16 -mx-6 px-8 py-14 sm:px-14 sm:py-16 rounded-2xl" style={{ backgroundColor: "var(--color-foreground)" }}>
          <blockquote>
            <p className="text-[clamp(1.25rem,1rem+1.2vw,1.75rem)] font-light leading-relaxed text-white mb-6" style={{ fontStyle: "italic" }}>
              &ldquo;I don&apos;t know anymore if music lives for me,
              <br className="hidden sm:block" />
              {" "}or if I live for it. But I accept both.&rdquo;
            </p>
            <footer className="text-xs uppercase tracking-[0.3em] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
              — DJ ANDY&apos;K
            </footer>
          </blockquote>
        </div>

        {/* Footer note */}
        <div className="border-t border-grid-300 pt-8 mt-12 text-xs text-muted-2 font-mono">
          <p>{COMPANY.label}</p>
          <p className="mt-1">℗ & © 2026 ANDY&apos;K GROUP INTERNATIONAL LTD · All rights reserved</p>
        </div>

      </div>
    </main>
  );
}
