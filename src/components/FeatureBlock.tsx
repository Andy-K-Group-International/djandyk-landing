import { ReactNode } from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="bg-bg-light border border-grid-300 rounded-xl px-7 py-6 mt-6">
      <blockquote
        className="text-sm italic leading-relaxed text-muted mb-3"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }}
      />
      <div className="text-xs text-muted-2">
        <strong className="text-muted font-medium">{author}</strong> &middot;{" "}
        {role}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-4 h-4"
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

interface FeatureBlockProps {
  title: string;
  description: string;
  linkText: string;
  testimonial: TestimonialProps;
  label: string;
  reverse?: boolean;
  children: ReactNode;
}

export default function FeatureBlock({
  title,
  description,
  linkText,
  testimonial,
  label,
  reverse = false,
  children,
}: FeatureBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20 ${
        reverse ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
      }`}
    >
      <div>
        <h3 className="text-[clamp(1.25rem,0.97rem+1vw,1.75rem)] font-bold tracking-tight text-foreground leading-[1.3] mb-4">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted mb-5">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
        >
          {linkText} <ArrowIcon />
        </a>
        <Testimonial {...testimonial} />
        <span className="inline-block text-[11px] font-medium text-muted-2 px-2.5 py-1 border border-grid-500 rounded mt-4">
          {label}
        </span>
      </div>
      <div className="relative glass-card rounded-xl p-6 overflow-hidden">
        <div className="dot-grid rounded-xl" style={{ opacity: 0.15 }} />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
