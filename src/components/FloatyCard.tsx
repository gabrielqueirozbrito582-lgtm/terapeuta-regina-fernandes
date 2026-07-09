"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function FloatyCard({
  children,
  style,
  delay = 0.9,
}: {
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay });
      tl.fromTo(
        el,
        { opacity: 0, y: 24, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
      ).to(el, {
        y: -10,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
