import { STATS } from "@/lib/data";

export default function LogoBar() {
  return (
    <div className="py-12 px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-grid-300">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:px-8">
            <span className="block text-3xl md:text-4xl font-bold tracking-tight text-foreground font-mono mb-1">
              {stat.value}
            </span>
            <span className="text-xs text-muted-2 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
