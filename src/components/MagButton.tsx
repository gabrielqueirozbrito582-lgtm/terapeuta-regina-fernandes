"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, skipAnimations } from "@/lib/gsap";

type MagButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "lime";
  external?: boolean;
  style?: CSSProperties;
  className?: string;
  /** Plays a soft pulse a couple of times after it settles in — use for the single primary CTA on a page. */
  pulse?: boolean;
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
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  willChange: "transform",
};

const variants: Record<"solid" | "lime", CSSProperties> = {
  solid: {
    background: "#5C9E8A",
    color: "#fff",
    boxShadow: "0 12px 28px rgba(92,158,138,0.28)",
    transition: "background .18s ease",
  },
  lime: {
    background: "#FFFFFF",
    color: "#1E2D28",
    fontWeight: 700,
    fontSize: "17px",
    padding: "17px 32px",
    boxShadow: "0 12px 30px rgba(30,45,40,0.2)",
  },
};

export default function MagButton({
  href,
  children,
  variant = "solid",
  external = true,
  style,
  className,
  pulse = false,
}: MagButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !pulse || skipAnimations()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scale: 1.04,
        duration: 0.9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 3,
        delay: 1.4,
      });
    }, el);

    return () => ctx.revert();
  }, [pulse]);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      y: -3,
      scale: 1.03,
      boxShadow: variant === "solid" ? "0 16px 34px rgba(92,158,138,0.4)" : "0 16px 36px rgba(30,45,40,0.28)",
      duration: 0.35,
      ease: "power3.out",
    });
    if (variant === "solid") el.style.background = "#3D8B6F";
    if (variant === "lime") el.style.background = "#F0F7F4";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      y: 0,
      scale: 1,
      boxShadow: variant === "solid" ? "0 12px 28px rgba(92,158,138,0.28)" : "0 12px 30px rgba(30,45,40,0.2)",
      duration: 0.45,
      ease: "elastic.out(1, 0.5)",
    });
    if (variant === "solid") el.style.background = "#5C9E8A";
    if (variant === "lime") el.style.background = "#FFFFFF";
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
