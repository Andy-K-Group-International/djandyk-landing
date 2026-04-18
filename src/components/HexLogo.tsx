import LogoIcon from "./LogoIcon";

export default function HexLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconClass = size === "sm" ? "w-5 h-5" : "w-7 h-7";
  return (
    <a href="#hero" className="flex items-center gap-2">
      <LogoIcon className={`${iconClass} text-foreground`} />
    </a>
  );
}
