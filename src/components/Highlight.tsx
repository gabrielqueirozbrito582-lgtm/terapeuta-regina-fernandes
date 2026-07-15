"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, skipAnimations } from "@/lib/gsap";

export default function Highlight({
  children,
  delay = 0.3,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (skipAnimations()) {
      gsap.set(el, { backgroundSize: "100% 0.42em" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { backgroundSize: "0% 0.42em" },
        {
          backgroundSize: "100% 0.42em",
          duration: 0.85,
          delay,
          ease: "power2.inOut",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }),
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, immediate]);

  return (
    <span
      ref={ref}
      style={{
        background: "linear-gradient(#F0F7F4,#F0F7F4)",
        backgroundSize: "0% 0.42em",
        backgroundPosition: "0 84%",
        backgroundRepeat: "no-repeat",
        padding: "0 .04em",
        color: "#5C9E8A",
        fontStyle: "italic",
      }}
    >
      {children}
    </span>
  );
}
