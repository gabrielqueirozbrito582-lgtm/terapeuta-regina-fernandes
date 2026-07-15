"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, ScrollTrigger, skipAnimations } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  /** Animate immediately on mount instead of waiting for scroll (use for above-the-fold content). */
  immediate?: boolean;
};

export default function Reveal({
  children,
  className,
  style,
  y = 26,
  x = 0,
  scale = 1,
  duration = 0.7,
  stagger = 0.1,
  delay = 0,
  start = "top 87%",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (skipAnimations()) {
      gsap.set(el.children.length ? Array.from(el.children) : el, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const targets = el.children.length ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          stagger,
          delay,
          ease: "power2.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start,
                  toggleActions: "play none none none",
                },
              }),
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, x, scale, duration, stagger, delay, start, immediate]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export { ScrollTrigger };
