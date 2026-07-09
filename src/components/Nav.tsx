"use client";

import { useEffect, useRef, useState } from "react";
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
  const panelRef = useRef<HTMLDivElement>(null);
  const barTopRef = useRef<HTMLSpanElement>(null);
  const barMidRef = useRef<HTMLSpanElement>(null);
  const barBotRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

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

  useEffect(() => {
    gsap.set(panelRef.current, { height: 0 });
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    const top = barTopRef.current;
    const mid = barMidRef.current;
    const bot = barBotRef.current;
    if (!panel) return;

    if (prefersReducedMotion()) {
      panel.style.height = open ? "auto" : "0px";
      return;
    }

    if (open) {
      gsap.set(panel, { height: "auto" });
      const h = panel.offsetHeight;
      gsap.fromTo(panel, { height: 0 }, { height: h, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(panel, { height: 0, duration: 0.3, ease: "power2.in" });
    }

    if (top && mid && bot) {
      gsap.to(top, { rotate: open ? 45 : 0, y: open ? 6 : 0, duration: 0.3, ease: "power2.out" });
      gsap.to(mid, { opacity: open ? 0 : 1, duration: 0.2 });
      gsap.to(bot, { rotate: open ? -45 : 0, y: open ? -6 : 0, duration: 0.3, ease: "power2.out" });
    }
  }, [open]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #DCEBE5",
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
          gap: 24,
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
              background: "#2C3E35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C9E8A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7v1"></path>
              <path d="M11 20a9 9 0 0 1 4-15"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontWeight: 600, fontSize: 16, color: "#2C3E35", letterSpacing: "-0.01em" }}>
              Regina Fernandes
            </span>
            <span style={{ fontWeight: 500, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C9E8A" }}>
              Terapeuta · TRG
            </span>
          </span>
        </Link>

        {/* Desktop links + CTA */}
        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 6 }}>
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
              background: "#5C9E8A",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 999,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              boxShadow: "0 8px 22px rgba(92,158,138,0.24)",
              transition: "background .18s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3D8B6F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5C9E8A")}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }}></span>
            Agendar sessão
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            flex: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ display: "flex", flexDirection: "column", gap: 5, width: 22 }}>
            <span ref={barTopRef} style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: "#2C3E35", transformOrigin: "50% 50%" }} />
            <span ref={barMidRef} style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: "#2C3E35" }} />
            <span ref={barBotRef} style={{ display: "block", width: 22, height: 2, borderRadius: 2, background: "#2C3E35", transformOrigin: "50% 50%" }} />
          </span>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div ref={panelRef} className="nav-panel" style={{ overflow: "hidden" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "4px 28px 22px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link${active ? " active" : ""}`}
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  padding: "13px 16px",
                  borderRadius: 12,
                  textDecoration: "none",
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
            onClick={() => setOpen(false)}
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#5C9E8A",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 20px",
              borderRadius: 999,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              boxShadow: "0 8px 22px rgba(92,158,138,0.24)",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }}></span>
            Agendar sessão
          </a>
        </div>
      </div>
    </nav>
  );
}
