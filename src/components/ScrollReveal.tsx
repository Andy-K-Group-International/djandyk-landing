"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  /** Observe each direct child individually with staggered delays */
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  stagger = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    if (stagger) {
      const kids = Array.from(el.children) as HTMLElement[];
      kids.forEach((child) => child.classList.add("reveal"));

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const child = entry.target as HTMLElement;
            const idx = kids.indexOf(child);
            child.style.animationDelay = `${idx * 0.1}s`;
            child.classList.add("visible");
            // Remove reveal after animation so hover transitions are restored
            const t = setTimeout(() => {
              child.classList.remove("reveal");
              child.style.animationDelay = "";
            }, 750 + idx * 100);
            timeouts.push(t);
            obs.unobserve(child);
          });
        },
        { threshold: 0.05 }
      );

      kids.forEach((child) => obs.observe(child));
      return () => {
        obs.disconnect();
        timeouts.forEach(clearTimeout);
      };
    }

    const revealClass =
      direction === "left" ? "reveal-left" :
      direction === "right" ? "reveal-right" : "reveal";

    el.classList.add(revealClass);
    if (delay) el.style.animationDelay = `${delay}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("visible");
        const t = setTimeout(() => {
          el.classList.remove(revealClass);
          el.style.animationDelay = "";
        }, 800);
        timeouts.push(t);
        obs.disconnect();
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [direction, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
