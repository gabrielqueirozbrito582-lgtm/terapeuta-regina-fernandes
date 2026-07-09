"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
  immediate = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.4,
        delay,
        ease: "power2.out",
        snap: { n: 1 },
        onUpdate: () => {
          el.textContent = `${prefix}${counter.n}${suffix}`;
        },
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: el,
                start: "top 87%",
                toggleActions: "play none none none",
              },
            }),
      });
    }, el);

    return () => ctx.revert();
  }, [value, prefix, suffix, delay, immediate]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
