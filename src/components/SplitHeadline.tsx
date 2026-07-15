"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, skipAnimations } from "@/lib/gsap";

type SplitHeadlineProps = {
  as?: "h1" | "h2";
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
};

/** Wraps the words of its text content (and any inline elements) in spans and reveals them with a stagger. */
export default function SplitHeadline({ as = "h1", children, style, delay = 0.2 }: SplitHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (skipAnimations()) {
      gsap.set(el.querySelectorAll(":scope > span"), { opacity: 1, y: 0 });
      return;
    }

    const words = el.querySelectorAll(":scope > span");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, delay, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  const Tag = as;

  return (
    <Tag ref={ref} style={style}>
      {splitIntoWordSpans(children)}
    </Tag>
  );
}

function splitIntoWordSpans(node: ReactNode): ReactNode {
  const parts: ReactNode[] = [];
  let key = 0;

  function walk(child: ReactNode) {
    if (typeof child === "string") {
      if (child.trim() === "") {
        parts.push(child);
        return;
      }
      const words = child.split(" ").filter((w) => w !== "");
      words.forEach((word) => {
        parts.push(
          <span key={key++} style={{ display: "inline-block" }}>
            {word}{" "}
          </span>
        );
      });
    } else if (Array.isArray(child)) {
      child.forEach(walk);
    } else if (child !== null && child !== undefined && child !== false) {
      parts.push(
        <span key={key++} style={{ display: "inline-block" }}>
          {child}{" "}
        </span>
      );
    }
  }

  walk(node);
  return parts;
}
