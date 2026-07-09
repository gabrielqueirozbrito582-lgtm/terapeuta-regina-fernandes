"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(bodyRef.current, { height: 0 });
  }, []);

  const toggle = () => {
    const body = bodyRef.current;
    const plus = plusRef.current;
    if (!body || !plus) return;
    const next = !open;
    setOpen(next);

    gsap.to(plus, { rotate: next ? 45 : 0, duration: 0.3, ease: "power2.out" });

    if (next) {
      gsap.set(body, { height: "auto" });
      const h = body.offsetHeight;
      gsap.fromTo(body, { height: 0 }, { height: h, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(body, { height: 0, duration: 0.3, ease: "power2.in" });
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <button
        onClick={toggle}
        aria-expanded={open}
        style={{
          all: "unset",
          boxSizing: "border-box",
          cursor: "pointer",
          padding: "22px 26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          fontWeight: 600,
          fontSize: 17,
          color: "#fff",
          width: "100%",
        }}
      >
        <span>{q}</span>
        <span
          ref={plusRef}
          style={{
            flex: "none",
            color: "#5C9E8A",
            fontSize: 24,
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ overflow: "hidden" }}>
        <div style={{ padding: "0 26px 24px", fontSize: 15.5, lineHeight: 1.72, color: "#CFE8DD" }}>{a}</div>
      </div>
    </div>
  );
}
