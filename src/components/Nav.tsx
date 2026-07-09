"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { WA_LINK } from "@/lib/constants";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "A TRG", href: "/trg" },
  { label: "Contato", href: "/contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    if (!nav || !logo || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "+=140",
            scrub: 0.3,
          },
        })
        .to(nav, { paddingTop: 8, paddingBottom: 8, ease: "none" }, 0)
        .to(logo, { width: 33, height: 33, ease: "none" }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #EAE0DA",
      }}
    >
      <div
        ref={navRef}
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px 24px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
          }}
        >
          <span
            ref={logoRef}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#5B2A33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9A9A0" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7v1"></path>
              <path d="M11 20a9 9 0 0 1 4-15"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontWeight: 600, fontSize: 16, color: "#5B2A33", letterSpacing: "-0.01em" }}>
              Regina Fernandes
            </span>
            <span style={{ fontWeight: 500, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52" }}>
              Terapeuta · TRG
            </span>
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px 6px" }}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${active ? " active" : ""}`}
                style={{
                  fontWeight: 500,
                  fontSize: 14.5,
                  padding: "9px 15px",
                  borderRadius: 999,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            style={{
              marginLeft: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#5B2A33",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 8px 22px rgba(91,42,51,0.14)",
              transition: "background .18s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6E3540")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5B2A33")}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D9A9A0" }}></span>
            Agendar sessão
          </a>
        </div>
      </div>
    </nav>
  );
}
