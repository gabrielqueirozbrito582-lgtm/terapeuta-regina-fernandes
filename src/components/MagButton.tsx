"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type MagButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "lime";
  external?: boolean;
  style?: CSSProperties;
  className?: string;
};

const base: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: 600,
  fontSize: "16px",
  padding: "16px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  willChange: "transform",
};

const variants: Record<"solid" | "lime", CSSProperties> = {
  solid: {
    background: "#5B2A33",
    color: "#fff",
    boxShadow: "0 12px 28px rgba(91,42,51,0.18)",
    transition: "background .18s ease",
  },
  lime: {
    background: "#D9A9A0",
    color: "#5B2A33",
    fontWeight: 700,
    fontSize: "17px",
    padding: "17px 32px",
    boxShadow: "0 12px 30px rgba(139,74,82,0.34)",
  },
};

export default function MagButton({
  href,
  children,
  variant = "solid",
  external = true,
  style,
  className,
}: MagButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { y: -3, scale: 1.015, duration: 0.35, ease: "power3.out" });
    if (variant === "solid") el.style.background = "#6E3540";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { y: 0, scale: 1, duration: 0.45, ease: "elastic.out(1, 0.5)" });
    if (variant === "solid") el.style.background = "#5B2A33";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={className}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </a>
  );
}
