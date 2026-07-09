"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ParallaxBlob({
  style,
  range = 40,
}: {
  style: CSSProperties;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -range },
        {
          y: range,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [range]);

  return <div ref={ref} style={style} />;
}
