import Link from "next/link";
import { WA_LINK, INSTAGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer style={{ background: "#16231C", color: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 40px" }}>
        <Reveal
          className="rgrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#5C9E8A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1E2D28" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7v1"></path>
                  <path d="M11 20a9 9 0 0 1 4-15"></path>
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontWeight: 600, fontSize: 17 }}>Regina Fernandes</span>
                <span style={{ fontWeight: 400, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7FC2A8" }}>
                  Terapeuta · TRG
                </span>
              </span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#CFE8DD", maxWidth: 340, margin: "0 0 22px" }}>
              Terapia de Reprocessamento Generativo. Resolvendo na raiz — para você voltar a viver com leveza.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#5C9E8A",
                color: "#1E2D28",
                fontWeight: 600,
                fontSize: 14,
                padding: "11px 20px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1E2D28" }}></span>
              Falar no WhatsApp
            </a>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7FC2A8", marginBottom: 16 }}>
              Navegação
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="/" className="footer-link" style={{ fontSize: 14.5 }}>Início</Link>
              <Link href="/sobre" className="footer-link" style={{ fontSize: 14.5 }}>Sobre</Link>
              <Link href="/trg" className="footer-link" style={{ fontSize: 14.5 }}>A TRG</Link>
              <Link href="/contato" className="footer-link" style={{ fontSize: 14.5 }}>Contato</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7FC2A8", marginBottom: 16 }}>
              Atendimento
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14.5, color: "#F0F7F4" }}>
              <span>Presencial em São Paulo</span>
              <span>Online — Brasil e exterior</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="footer-link">
                @terapeuta.reginafernandes
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener" className="footer-link">
                (11) 96420-0856
              </a>
            </div>
          </div>
        </Reveal>
        <div
          style={{
            marginTop: 52,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            fontSize: 12.5,
            color: "#7FC2A8",
          }}
        >
          <span>© 2026 Regina Fernandes · Terapeuta TRG e Psicanalista</span>
          <span>Atendimento humano, sigiloso e acolhedor.</span>
        </div>
      </div>
    </footer>
  );
}
