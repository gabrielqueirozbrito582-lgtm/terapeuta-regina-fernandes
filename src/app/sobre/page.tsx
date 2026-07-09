import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import MagButton from "@/components/MagButton";
import CountUp from "@/components/CountUp";
import { WA_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Regina Fernandes, terapeuta em Terapia de Reprocessamento Generativo e psicanalista, com mais de 10 anos de experiência clínica.",
};

const creds = [
  { figure: "+10 anos", label: "de experiência clínica real" },
  { figure: "TRG", label: "Terapia de Reprocessamento Generativo" },
  { figure: "Psicanálise", label: "segunda formação clínica" },
  { figure: "SP + online", label: "presencial e para o mundo" },
];

const attend = [
  {
    title: "Presencial ou online",
    body: "Atendo presencialmente em São Paulo e online para o Brasil e o exterior — com a mesma qualidade e os mesmos resultados.",
  },
  {
    title: "Sessões de 50 minutos",
    body: "Encontros individuais, com escuta, sigilo e acolhimento real desde o primeiro contato. Aquele momento é só seu.",
  },
  {
    title: "Resultados que aparecem",
    body: "A maioria dos clientes sente diferença já na 3ª ou 4ª sessão. A TRG tem começo, meio e fim — não é uma terapia de anos.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* HEADLINE + INTRO */}
      <section style={{ background: "#FAF7F4", padding: "72px 28px 40px" }}>
        <div
          className="rgrid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <Reveal immediate>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 20 }}>
              Sobre a Terapeuta Regina
            </span>
            <h1 style={{ fontWeight: 700, fontSize: 46, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 22px" }}>
              Eu resgato a vontade de viver de quem já tinha perdido a{" "}
              <Highlight immediate delay={0.7}>esperança</Highlight>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#6B5850", maxWidth: 500, margin: 0 }}>
              Sou Regina Fernandes, terapeuta em Terapia de Reprocessamento Generativo e psicanalista, com mais de 10 anos de experiência clínica. Meu trabalho é acompanhar pessoas em sofrimento profundo até o outro lado — a leveza.
            </p>
          </Reveal>
          <Reveal immediate delay={0.15} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-14px -14px 30px 20px",
                background: "#D9A9A0",
                borderRadius: 30,
                transform: "rotate(-2.5deg)",
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 26,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(91,42,51,0.2)",
                border: "6px solid #fff",
                height: 480,
              }}
            >
              <Image
                src="/images/regina-retrato.jpg"
                alt="Terapeuta Regina Fernandes"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREDENCIAIS STRIP */}
      <section style={{ background: "#FAF7F4", padding: "24px 28px 8px" }}>
        <Reveal className="rgrid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {creds.map((c) => {
            const match = c.figure.match(/^\+?(\d+)(.*)$/);
            return (
              <div key={c.label} style={{ background: "#fff", border: "1px solid #EAE0DA", borderRadius: 16, padding: "22px 24px" }}>
                <div style={{ fontWeight: 700, fontSize: 26, color: "#8B4A52", letterSpacing: "-0.02em", marginBottom: 4 }}>
                  {match ? (
                    <CountUp value={Number(match[1])} prefix={c.figure.startsWith("+") ? "+" : ""} suffix={match[2]} />
                  ) : (
                    c.figure
                  )}
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.45, color: "#8A776F" }}>{c.label}</div>
              </div>
            );
          })}
        </Reveal>
      </section>

      {/* HISTÓRIA */}
      <section style={{ background: "#FAF7F4", padding: "72px 28px" }}>
        <Reveal style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 16 }}>
            Como tudo começou
          </span>
          <h2 style={{ fontWeight: 700, fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 24px" }}>
            A terapia chegou até mim por amor — e por necessidade.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 17, lineHeight: 1.78, color: "#6B5850" }}>
            <p style={{ margin: 0 }}>
              Eu não escolhi a terapia como uma carreira distante. Ela nasceu de dentro de casa. Vi pessoas que eu amo travadas por dores que ninguém conseguia alcançar — e senti, na pele, o quanto é angustiante assistir a alguém sofrer sem saber como ajudar.
            </p>
            <p style={{ margin: 0 }}>
              Foi essa necessidade real de cuidar da minha própria família que me levou a estudar a fundo o funcionamento da mente. Eu precisava entender por que a dor ficava presa. E, mais do que entender, precisava de um caminho que realmente libertasse.
            </p>
          </div>
        </Reveal>
      </section>

      {/* POR QUE A TRG */}
      <section style={{ background: "#5B2A33", color: "#fff", padding: "80px 28px" }}>
        <Reveal className="rgrid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 52, alignItems: "start" }}>
          <div>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D9A9A0", marginBottom: 16 }}>
              Por que a TRG
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 30, lineHeight: 1.22, letterSpacing: "-0.02em", margin: 0 }}>
              Quando encontrei a TRG, encontrei o que eu procurava.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 16.5, lineHeight: 1.75, color: "#E8D2CC" }}>
            <p style={{ margin: 0 }}>
              A Terapia de Reprocessamento Generativo me mostrou algo que outras abordagens não davam: um processo com começo, meio e fim, que vai direto à raiz e reconstrói a pessoa por dentro.
            </p>
            <p style={{ margin: 0 }}>
              Me apaixonei por ver a transformação acontecer de verdade. Quem chega com o semblante triste, visivelmente com dor, vai mudando sessão por sessão. O brilho volta. A leveza volta. É por isso que amo o que faço — e não me vejo em outra profissão.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FORMAÇÃO */}
      <section style={{ background: "#FAF7F4", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 640, margin: "0 auto 44px", textAlign: "center" }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 16 }}>
              Formação & credenciais
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#5B2A33", margin: 0 }}>
              Duas lentes para enxergar você com profundidade.
            </h2>
          </Reveal>
          <Reveal className="rgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: 34, boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 21, color: "#5B2A33", margin: "0 0 10px" }}>Terapeuta TRG</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#6B5850", margin: 0 }}>
                Formada em Terapia de Reprocessamento Generativo — a abordagem que acessa e reprocessa as lembranças traumáticas guardadas no inconsciente, tratando a raiz do sofrimento com velocidade e profundidade.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: 20, padding: 34, boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
              <span style={{ width: 52, height: 52, borderRadius: 15, background: "#F3E3DF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B2A33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 21, color: "#5B2A33", margin: "0 0 10px" }}>Psicanalista</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#6B5850", margin: 0 }}>
                A formação em Psicanálise soma escuta, contexto e compreensão profunda da história de cada pessoa. Juntas, as duas abordagens significam mais precisão, mais profundidade e mais resultado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMO ELA ATENDE */}
      <section style={{ background: "#F3E3DF", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 640, margin: "0 auto 44px", textAlign: "center" }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B4A52", marginBottom: 16 }}>
              Como eu atendo
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#5B2A33", margin: 0 }}>
              Um cuidado que se adapta à sua vida.
            </h2>
          </Reveal>
          <Reveal className="rgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {attend.map((a) => (
              <div key={a.title} style={{ background: "#fff", borderRadius: 20, padding: 30, boxShadow: "0 8px 24px rgba(91,42,51,0.06)" }}>
                <h3 style={{ fontWeight: 600, fontSize: 19, color: "#5B2A33", margin: "0 0 10px" }}>{a.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6B5850", margin: 0 }}>{a.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FAF7F4", padding: "80px 28px 96px" }}>
        <Reveal style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#5B2A33", margin: "0 0 16px" }}>
            Se você chegou até aqui, talvez seja a hora.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "#6B5850", maxWidth: 520, margin: "0 auto 32px" }}>
            A primeira conversa é sem compromisso e sem pressão. Me chame no WhatsApp — eu respondo pessoalmente.
          </p>
          <MagButton href={WA_LINK} variant="solid">
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D9A9A0" }}></span>
            Quero agendar minha sessão
          </MagButton>
        </Reveal>
      </section>
    </>
  );
}
