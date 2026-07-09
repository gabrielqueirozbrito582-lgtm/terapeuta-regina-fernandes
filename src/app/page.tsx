import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import MagButton from "@/components/MagButton";
import CountUp from "@/components/CountUp";
import FloatyCard from "@/components/FloatyCard";
import ParallaxBlob from "@/components/ParallaxBlob";
import { WA_LINK } from "@/lib/constants";

const pains = [
  "Acorda cansada, sem motivo.",
  "Sente uma ansiedade que não tem nome, não tem origem e não vai embora.",
  "Tem dias em que o choro aparece do nada. Outros em que o vazio é tão grande que dói.",
  "As mesmas situações, os mesmos padrões, os mesmos problemas continuam se repetindo — como se uma parte de você ainda estivesse presa em algo que aconteceu há anos.",
];

const testimonials = [
  {
    quote:
      "Cheguei na Terapeuta Regina sem acreditar que fosse mudar. Depois das sessões, algo que eu não consigo explicar com palavras simplesmente saiu de mim. Parece que tirei um peso que eu já nem sabia mais que estava carregando.",
    author: "M.S., 38 anos · São Paulo",
    initials: "MS",
  },
  {
    quote:
      "Eu acordava todo dia com aquela ansiedade no peito sem saber de onde vinha. Achei que era assim que eu era. Depois das sessões com a Terapeuta Regina entendi que não era. Hoje eu acordo diferente.",
    author: "C.L., 44 anos · cliente online",
    initials: "CL",
  },
  {
    quote:
      "Estava sem vontade de viver. Não conseguia sair de casa, o mundo parecia escuro e triste. Hoje sinto prazer nas mínimas coisas. Sou dona de mim, com autoestima e muita vontade de viver.",
    author: "R.P. · cliente da Terapeuta Regina",
    initials: "RP",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "#FAF7F4" }}>
        <ParallaxBlob
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#F3E3DF",
            filter: "blur(10px)",
            opacity: 0.7,
          }}
        />
        <div
          className="rgrid"
          style={{
            position: "relative",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "64px 28px 84px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <Reveal immediate delay={0.1} y={22}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 600,
                fontSize: 11.5,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#5B2A33",
                background: "#fff",
                border: "1px solid #EAE0DA",
                borderRadius: 999,
                padding: "8px 16px",
                marginBottom: 26,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D9A9A0" }}></span>
              Terapia de Reprocessamento Generativo
            </span>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 52,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#5B2A33",
                margin: "0 0 22px",
              }}
            >
              Você não precisa carregar esse{" "}
              <Highlight immediate delay={0.9}>peso</Highlight> para sempre.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#6B5850", maxWidth: 480, margin: "0 0 34px" }}>
              A TRG resolve na raiz do problema. Sem anos de espera. Resultados reais já nas primeiras sessões.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <MagButton href={WA_LINK} variant="solid">
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D9A9A0" }}></span>
                Quero agendar minha sessão
              </MagButton>
              <Link
                href="/trg"
                className="outline-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#5B2A33",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "15px 22px",
                  borderRadius: 999,
                  textDecoration: "none",
                  border: "1.5px solid #D9C9C2",
                  background: "#fff",
                }}
              >
                Como funciona a TRG →
              </Link>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 44, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 30, color: "#8B4A52", letterSpacing: "-0.02em" }}>
                  <CountUp value={10} prefix="+" suffix=" anos" immediate delay={1.1} />
                </div>
                <div style={{ fontSize: 13.5, color: "#8A776F", marginTop: 2 }}>de experiência clínica</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 30, color: "#8B4A52", letterSpacing: "-0.02em" }}>3ª–4ª</div>
                <div style={{ fontSize: 13.5, color: "#8A776F", marginTop: 2 }}>sessão: primeiros resultados</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 30, color: "#8B4A52", letterSpacing: "-0.02em" }}>SP + online</div>
                <div style={{ fontSize: 13.5, color: "#8A776F", marginTop: 2 }}>Brasil e exterior</div>
              </div>
            </div>
          </Reveal>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-18px -18px 34px 24px",
                background: "#D9A9A0",
                borderRadius: 32,
                transform: "rotate(-3deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "14px 30px -22px -20px",
                background: "#5B2A33",
                borderRadius: 32,
                transform: "rotate(2.5deg)",
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(91,42,51,0.2)",
                border: "6px solid #fff",
                height: 560,
              }}
            >
              <Image
                src="/images/regina-retrato.jpg"
                alt="Terapeuta Regina Fernandes"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
              />
            </div>
            <FloatyCard
              delay={1.3}
              style={{
                position: "absolute",
                bottom: 22,
                left: -26,
                background: "#fff",
                borderRadius: 16,
                padding: "14px 18px",
                boxShadow: "0 12px 30px rgba(91,42,51,0.14)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "#F3E3DF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#8B4A52" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#5B2A33" }}>Regina Fernandes</div>
                <div style={{ fontSize: 12, color: "#8A776F" }}>Terapeuta TRG · Psicanalista</div>
              </div>
            </FloatyCard>
          </div>
        </div>
      </section>

      {/* PROBLEMA / DOR */}
      <section style={{ background: "#5B2A33", color: "#fff", padding: "88px 28px" }}>
        <Reveal style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D9A9A0", marginBottom: 20 }}>
            Você não está sozinha nisso
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 38, lineHeight: 1.18, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
            Você reconhece alguma dessas sensações?
          </h2>
        </Reveal>
        <Reveal className="rgrid" style={{ maxWidth: 900, margin: "44px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {pains.map((pain) => (
            <div
              key={pain}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "22px 24px",
                fontSize: 16,
                lineHeight: 1.55,
                color: "#F3E3DF",
              }}
            >
              {pain}
            </div>
          ))}
        </Reveal>
        <Reveal style={{ maxWidth: 720, margin: "40px auto 0", textAlign: "center" }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#E8D2CC", margin: "0 0 8px" }}>
            Você já tentou entender. Já tentou superar sozinha. Talvez já tenha feito terapia — mas a sensação de que{" "}
            <em style={{ color: "#fff", fontStyle: "italic" }}>&ldquo;vai ser assim para sempre&rdquo;</em> ainda está lá.
          </p>
          <p style={{ fontWeight: 700, fontSize: 34, color: "#D9A9A0", letterSpacing: "-0.01em", margin: "18px 0 0" }}>
            Não vai.
          </p>
        </Reveal>
      </section>

      {/* SOLUÇÃO */}
      <section style={{ background: "#FAF7F4", padding: "92px 28px" }}>
        <div
          className="rgrid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.92fr 1.08fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <Reveal>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 18 }}>
              A solução
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.14, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 24px" }}>
              A TRG resolve na <Highlight>raiz</Highlight>. É assim que a mudança acontece de verdade.
            </h2>
            <Link
              href="/trg"
              className="outline-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#5B2A33",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 22px",
                borderRadius: 999,
                textDecoration: "none",
                border: "1.5px solid #D9C9C2",
                background: "#fff",
              }}
            >
              Entender a TRG a fundo →
            </Link>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#6B5850", margin: 0 }}>
              Ansiedade, depressão, fobias, baixa autoestima, padrões que se repetem — quase sempre são sintomas de algo que ficou guardado no inconsciente sem nunca ter sido reprocessado de verdade.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#6B5850", margin: 0 }}>
              Não por fraqueza. Não por falta de esforço. Simplesmente porque a mente humana não foi criada para carregar tudo sozinha.
            </p>
            <div style={{ background: "#fff", borderLeft: "4px solid #D9A9A0", borderRadius: 14, padding: "22px 24px", boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#4A3630", margin: 0 }}>
                A <strong style={{ color: "#5B2A33" }}>TRG — Terapia de Reprocessamento Generativo</strong> acessa as lembranças traumáticas que ficaram presas e as reprocessa em profundidade. Quem chega com o semblante triste vai mudando sessão por sessão. <strong style={{ color: "#5B2A33" }}>O brilho volta. A leveza volta.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ background: "#F3E3DF", padding: "92px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 720, margin: "0 auto 52px", textAlign: "center" }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 18 }}>
              Diferenciais
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 38, lineHeight: 1.16, letterSpacing: "-0.02em", color: "#5B2A33", margin: 0 }}>
              Por que a TRG com a Terapeuta Regina é diferente de tudo que você já tentou?
            </h2>
          </Reveal>
          <Reveal className="rgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            <div style={{ gridColumn: "span 2", background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.06)", display: "flex", gap: 22, alignItems: "flex-start" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                </svg>
              </span>
              <div>
                <h3 style={{ fontWeight: 600, fontSize: 20, color: "#5B2A33", margin: "0 0 8px" }}>Trata a raiz — não só os sintomas</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#6B5850", margin: 0 }}>
                  Outras terapias trabalham o que você pensa e sente no nível consciente. A TRG vai mais fundo: acessa e reprocessa as lembranças traumáticas guardadas no inconsciente. Quando a raiz é tratada, tudo se reconstrói de forma rápida e sem recaída.
                </p>
              </div>
            </div>
            <div style={{ background: "#5B2A33", color: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.1)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "rgba(217,169,160,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D9A9A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, margin: "0 0 8px" }}>A única terapia que trata passado, presente e futuro</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#E8D2CC", margin: 0 }}>
                Tem começo, meio e fim. Trabalha o que ficou preso no passado, o que paralisa no presente e o que bloqueia o futuro.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 8px" }}>Resultados reais já nas primeiras sessões</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6B5850", margin: 0 }}>
                A maioria dos clientes sente diferença já na 3ª ou 4ª sessão. Não é uma terapia que leva anos.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 8px" }}>Mais de 10 anos de experiência clínica</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6B5850", margin: 0 }}>
                Mais de uma década atendendo pessoas em sofrimento profundo — depressão severa, traumas, fobias, ansiedade. Ela conhece a dor humana de perto.
              </p>
            </div>
            <div style={{ background: "#D9A9A0", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(139,74,82,0.24)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "rgba(91,42,51,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 8px" }}>Dupla formação: TRG + Psicanálise</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#4A2E2A", margin: 0 }}>
                Enquanto a maioria atua com uma abordagem, a Terapeuta Regina enxerga você com duas lentes: mais profundidade, mais precisão, mais resultado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={{ background: "#FAF7F4", padding: "92px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 18 }}>
              Prova social
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 38, lineHeight: 1.16, letterSpacing: "-0.02em", color: "#5B2A33", margin: 0 }}>
              O que diz quem passou por aqui
            </h2>
          </Reveal>
          <Reveal className="rgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: "0 8px 24px rgba(91,42,51,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="#D9A9A0">
                  <path d="M9.5 6C7 6 5 8 5 10.5V18h6v-6H8c0-1.7 1.3-3 3-3V6H9.5zm9 0C16 6 14 8 14 10.5V18h6v-6h-3c0-1.7 1.3-3 3-3V6h-1.5z"></path>
                </svg>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A3630", margin: 0, flex: 1 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 6, borderTop: "1px dashed #D9C9C2" }}>
                  <span style={{ width: 40, height: 40, borderRadius: "50%", background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: "#8B4A52", fontSize: 15, flex: "none" }}>
                    {t.initials}
                  </span>
                  <div style={{ fontSize: 13.5, color: "#8A776F" }}>{t.author}</div>
                </div>
              </div>
            ))}
          </Reveal>
          <p style={{ textAlign: "center", fontSize: 12.5, color: "#AFA098", margin: "28px auto 0", maxWidth: 640 }}>
            Depoimentos modelo baseados em casos reais — para validação e substituição pelos reais. Mais de 10 anos transformando vidas · Presencial em São Paulo · Online para o Brasil e o mundo.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#FAF7F4", padding: "0 28px 96px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", background: "#5B2A33", borderRadius: 32, padding: "72px 56px", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <ParallaxBlob
            range={20}
            style={{ position: "absolute", top: -80, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(217,169,160,0.12)" }}
          />
          <Reveal style={{ position: "relative" }}>
            <h2 style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 16px" }}>
              A TRG resolve. Basta você <span style={{ color: "#D9A9A0" }}>confiar</span>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#E8D2CC", maxWidth: 560, margin: "0 auto 34px" }}>
              Você já carregou esse peso tempo demais. A primeira mensagem é o passo mais difícil. O resto, a Terapeuta Regina cuida.
            </p>
            <MagButton href={WA_LINK} variant="lime">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B2A33" }}></span>
              Quero agendar minha sessão
            </MagButton>
            <p style={{ fontSize: 13.5, color: "#C99691", margin: "24px 0 0" }}>
              Atendimento presencial em São Paulo e online para todo o Brasil e exterior.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
