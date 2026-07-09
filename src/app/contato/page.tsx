import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import MagButton from "@/components/MagButton";
import ParallaxBlob from "@/components/ParallaxBlob";
import { WA_LINK, INSTAGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Terapeuta Regina Fernandes pelo WhatsApp. Sem formulário, sem burocracia, sem compromisso.",
};

const included = [
  "Sessões individuais de 50 minutos",
  "Acolhimento real desde o primeiro contato",
  "Reprocessamento profundo com TRG + visão psicanalítica",
  "Atendimento presencial em SP ou online com a mesma qualidade",
  "Uma terapeuta que vai com você até o fim do processo",
];

export default function Contato() {
  return (
    <>
      {/* HERO CONTATO */}
      <section style={{ background: "#FAF7F4", padding: "72px 28px 56px", textAlign: "center" }}>
        <Reveal immediate style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 22 }}>
            O próximo passo é uma conversa
          </span>
          <h1 style={{ fontWeight: 700, fontSize: 46, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 20px" }}>
            A primeira mensagem é o passo mais difícil. O resto, eu <Highlight immediate delay={0.7}>cuido</Highlight>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#6B5850", maxWidth: 540, margin: "0 auto" }}>
            Sem formulário, sem burocracia, sem compromisso. Você manda uma mensagem no WhatsApp e a Terapeuta Regina responde pessoalmente.
          </p>
        </Reveal>
      </section>

      {/* CANAIS */}
      <section style={{ background: "#FAF7F4", padding: "0 28px 24px" }}>
        <Reveal
          immediate
          delay={0.2}
          className="rgrid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {/* WhatsApp card */}
          <div className="cta-box" style={{ background: "#5B2A33", color: "#fff", borderRadius: 24, padding: 48, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <ParallaxBlob
              range={16}
              style={{ position: "absolute", top: -60, right: -40, width: 220, height: 220, borderRadius: "50%", background: "rgba(217,169,160,0.12)" }}
            />
            <div style={{ position: "relative" }}>
              <span style={{ width: 58, height: 58, borderRadius: 16, background: "#D9A9A0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#5B2A33">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"></path>
                </svg>
              </span>
              <h2 style={{ fontWeight: 700, fontSize: 28, lineHeight: 1.2, margin: "0 0 12px" }}>Fale agora no WhatsApp</h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#E8D2CC", margin: "0 0 28px", maxWidth: 400 }}>
                A Terapeuta Regina responde pessoalmente, entende sua situação e tira todas as suas dúvidas. Sem pressão.
              </p>
              <MagButton href={WA_LINK} variant="lime" style={{ alignSelf: "flex-start" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B2A33" }}></span>
                Quero agendar minha sessão
              </MagButton>
              <div style={{ fontSize: 14.5, color: "#C99691", marginTop: 20 }}>(11) 96420-0856</div>
            </div>
          </div>
          {/* Outros canais + atendimento */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ background: "#fff", borderRadius: 24, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.06)", flex: 1 }}>
              <span style={{ width: 50, height: 50, borderRadius: 14, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 8px" }}>Instagram</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6B5850", margin: "0 0 14px" }}>
                Acompanhe conteúdos, depoimentos e o dia a dia do consultório.
              </p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="card-link">
                @terapeuta.reginafernandes →
              </a>
            </div>
            <div style={{ background: "#fff", borderRadius: 24, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.06)", flex: 1 }}>
              <span style={{ width: 50, height: 50, borderRadius: 14, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 8px" }}>Onde atendo</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6B5850", margin: 0 }}>
                Presencial em <strong style={{ color: "#5B2A33" }}>São Paulo</strong> e online para <strong style={{ color: "#5B2A33" }}>todo o Brasil e o exterior</strong> — com a mesma qualidade e os mesmos resultados.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* OFERTA / O QUE ESTÁ INCLUSO */}
      <section style={{ background: "#FAF7F4", padding: "80px 28px" }}>
        <div className="rgrid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}>
          <Reveal>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 18 }}>
              O que você ganha
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 20px" }}>
              Você não está comprando &ldquo;sessões de terapia&rdquo;.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#6B5850", margin: "0 0 16px" }}>
              Você está investindo em parar de sofrer. Em dormir bem. Em acordar com leveza. Em se olhar no espelho sem peso. Em ter relacionamentos que não te drenam. Em sentir que tem um futuro.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#4A3630", margin: 0 }}>
              <strong style={{ color: "#5B2A33" }}>O preço não está no site — e não precisa estar.</strong> O que tem valor real não cabe numa tabela. O próximo passo é uma conversa. Sem compromisso. Sem pressão.
            </p>
          </Reveal>
          <Reveal style={{ background: "#fff", borderRadius: 24, padding: "14px 36px", boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
            {included.map((item) => (
              <div key={item} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 0", borderBottom: "1px dashed #EAE0DA" }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#D9A9A0", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", marginTop: 1 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.55, color: "#4A3630" }}>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#FAF7F4", padding: "0 28px 96px" }}>
        <div className="cta-box" style={{ maxWidth: 1080, margin: "0 auto", background: "#5B2A33", borderRadius: 32, padding: "72px 56px", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <ParallaxBlob
            range={20}
            style={{ position: "absolute", bottom: -90, left: -50, width: 280, height: 280, borderRadius: "50%", background: "rgba(217,169,160,0.1)" }}
          />
          <Reveal style={{ position: "relative" }}>
            <h2 style={{ fontWeight: 700, fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 16px" }}>
              Você já carregou esse peso tempo demais.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#E8D2CC", maxWidth: 520, margin: "0 auto 34px" }}>
              A TRG resolve. Basta você confiar. Me chame agora — o primeiro passo é só uma mensagem.
            </p>
            <MagButton href={WA_LINK} variant="lime">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B2A33" }}></span>
              Quero agendar minha sessão
            </MagButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
