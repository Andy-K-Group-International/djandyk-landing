/* eslint-disable @next/next/no-img-element */
import { COMPANY, ADAM_FEATURES, EVA_FEATURES } from "@/lib/data";

export default function FlagshipSystems() {
  return (
    <section id="systems" className="relative pt-10 pb-20 px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          Our{" "}
          <span className="font-serif font-light italic text-[1.2em]">
            flagship
          </span>{" "}
          systems
        </h2>
        <p className="text-lg text-muted font-light max-w-[560px] mx-auto">
          {COMPANY.descriptionSystems}
        </p>
      </div>

      {/* A.D.A.M. Card */}
      <div className="glass-card rounded-xl p-8 mb-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <img src="/adam-logo.png" alt="A.D.A.M." className="h-16 w-auto" />
          <div className="h-5 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-rose-dark font-medium">In Development</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">A.D.A.M.</h3>
        <p className="text-sm text-muted-2 mb-4">Automated Document &amp; Account Manager</p>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-xl">
          Our flagship system handles the full client lifecycle &mdash; from first contact to ongoing account management &mdash; so you can focus on what matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ADAM_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href="https://adameva.app"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Start Your A.D.A.M. Journey</span>
        </a>
      </div>

      {/* E.V.A. Card */}
      <div className="glass-card rounded-xl p-8 mb-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <img src="/eva-logo.jpg" alt="E.V.A." className="h-16 w-auto" />
          <div className="h-5 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-rose-dark font-medium">Coming Soon</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">E.V.A.</h3>
        <p className="text-sm text-muted-2 mb-4">Economic Virtual Adviser</p>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-xl">
          Smart follow-ups, scheduling &amp; human-style messages designed for public sector and growth teams &mdash; keeping communication active, personal, and connected to A.D.A.M.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {EVA_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <span className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-muted-2 border border-grid-300 rounded-full cursor-default">
          Coming Soon
        </span>
      </div>
    </section>
  );
}
