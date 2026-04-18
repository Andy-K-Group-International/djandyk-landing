export default function SectionHeader({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-[700px] mx-auto mb-16">
      <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg leading-relaxed text-muted font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
