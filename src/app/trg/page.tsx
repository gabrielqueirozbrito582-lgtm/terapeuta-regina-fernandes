import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import MagButton from "@/components/MagButton";
import FaqItem from "@/components/FaqItem";
import { WA_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "A TRG",
  description:
    "Entenda a Terapia de Reprocessamento Generativo (TRG): como funciona, o que a torna única e por que resolve na raiz do sofrimento.",
};

const timeline = [
  { tag: "Passado", title: "O que ficou preso", body: "Reprocessa as lembranças traumáticas que ficaram guardadas no inconsciente e que continuam agindo hoje." },
  { tag: "Presente", title: "O que paralisa", body: "Libera o que trava você agora — a ansiedade, o vazio, os padrões que se repetem sem explicação." },
  { tag: "Futuro", title: "O que bloqueia", body: "Abre caminho para o que vem: vontade de viver, autoestima e a leveza de seguir em frente." },
];

const steps = [
  { n: "1", title: "Primeiro contato", body: "Você manda uma mensagem no WhatsApp. Sem formulário, sem burocracia. A Terapeuta Regina responde pessoalmente, entende sua situação e tira suas dúvidas." },
  { n: "2", title: "Acolhimento", body: "A primeira sessão começa com escuta, cuidado e muito acolhimento. Aquele momento é seu — sem julgamento, com sigilo. A Terapeuta Regina entende o que está acontecendo e traça o caminho." },
  { n: "3", title: "O reprocessamento começa", body: "Sessão a sessão, as lembranças traumáticas são reprocessadas em profundidade. O semblante muda. O peso vai embora. O brilho volta." },
  { n: "4", title: "Você se reconhece", body: "O processo tem fim. E quando ele chega, você está leve, inteira, dona de si — com vontade de viver." },
];

const faqs = [
  { q: "Vou precisar contar tudo que já passei?", a: "Não. O reprocessamento acontece através das lembranças, mas você não precisa narrar cada detalhe do que viveu. A Terapeuta Regina conduz o processo com cuidado e no seu tempo." },
  { q: "Em quanto tempo vou sentir resultado?", a: "A maioria dos clientes sente diferença real a partir da 3ª ou 4ª sessão. O reprocessamento da TRG é profundo — e é por isso que os resultados aparecem rápido." },
  { q: "O atendimento online funciona igual ao presencial?", a: "Sim. A TRG é igualmente eficaz no formato online. Clientes do Brasil e do exterior passam pelo mesmo processo e têm os mesmos resultados." },
  { q: "Já fiz terapia antes e não funcionou. Por que seria diferente?", a: "Porque a TRG trata a raiz — não os sintomas. Enquanto outras abordagens trabalham o que você pensa e sente conscientemente, a TRG acessa e reprocessa o que está guardado no inconsciente. É uma abordagem diferente, com resultados diferentes." },
  { q: "Quanto tempo dura o processo?", a: "Depende de cada pessoa. Mas a TRG tem começo, meio e fim — não é uma terapia de anos. A maioria dos clientes chega ao final muito mais rápido do que esperava." },
  { q: "Como funciona o primeiro contato?", a: "Você manda uma mensagem no WhatsApp. A Terapeuta Regina responde pessoalmente, entende sua situação e você decide se quer seguir em frente. Sem formulário, sem pressão." },
];

export default function Trg() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#FAF7F4", padding: "72px 28px 48px", textAlign: "center" }}>
        <Reveal immediate style={{ maxWidth: 820, margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C9E8A", marginBottom: 22 }}>
            Terapia de Reprocessamento Generativo
          </span>
          <h1 style={{ fontWeight: 700, fontSize: 48, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#1E2D28", margin: "0 0 22px" }}>
            A TRG resolve na <Highlight immediate delay={0.7}>raiz</Highlight>. É assim que a mudança acontece de verdade.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: "#45564C", maxWidth: 600, margin: "0 auto" }}>
            Ansiedade, depressão, fobias, baixa autoestima, padrões que se repetem — quase sempre são sintomas de algo que ficou guardado no inconsciente sem nunca ter sido reprocessado de verdade.
          </p>
        </Reveal>
      </section>

      {/* O QUE É */}
      <section style={{ background: "#FAF7F4", padding: "24px 28px 80px" }}>
        <Reveal className="rgrid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          <div className="hcard" style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 8px 24px rgba(30,45,40,0.06)" }}>
            <h2 style={{ fontWeight: 600, fontSize: 23, color: "#1E2D28", margin: "0 0 14px" }}>Não é fraqueza. É natureza humana.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.72, color: "#45564C", margin: 0 }}>
              O sofrimento que se repete não vem por falta de esforço. Simplesmente porque a mente humana não foi criada para carregar tudo sozinha. Algumas dores ficam presas — e continuam agindo por baixo, mesmo anos depois.
            </p>
          </div>
          <div className="hcard" style={{ background: "#F0F7F4", border: "1px solid #C8E6DE", borderRadius: 20, padding: 36 }}>
            <h2 style={{ fontWeight: 600, fontSize: 23, color: "#1E2D28", margin: "0 0 14px" }}>A TRG vai direto à raiz.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.72, color: "#4A6B62", margin: 0 }}>
              Ela acessa as lembranças traumáticas que ficaram presas e as reprocessa em profundidade. À medida que isso acontece, tudo começa a se reconstruir — por dentro e por fora. O processo acontece — e a transformação também.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PASSADO PRESENTE FUTURO */}
      <section style={{ background: "#F0F7F4", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 680, margin: "0 auto 44px", textAlign: "center" }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C9E8A", marginBottom: 16 }}>
              O que a torna única
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#1E2D28", margin: 0 }}>
              A única terapia que trata passado, presente e futuro.
            </h2>
          </Reveal>
          <Reveal className="rgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {timeline.map((t) => (
              <div key={t.tag} className="hcard" style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 8px 24px rgba(30,45,40,0.06)" }}>
                <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5C9E8A", marginBottom: 14 }}>
                  {t.tag}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 20, color: "#1E2D28", margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#45564C", margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ background: "#FAF7F4", padding: "88px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 640, margin: "0 auto 52px", textAlign: "center" }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C9E8A", marginBottom: 16 }}>
              Como funciona
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 36, lineHeight: 1.16, letterSpacing: "-0.02em", color: "#1E2D28", margin: "0 0 10px" }}>
              Simples assim.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#45564C", margin: 0 }}>
              Do primeiro contato até o dia em que você se reconhece de novo.
            </p>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 820, margin: "0 auto" }}>
            {steps.map((s) => (
              <div key={s.n} className="hcard" style={{ background: "#fff", borderRadius: 20, padding: "28px 32px", boxShadow: "0 8px 24px rgba(30,45,40,0.06)", display: "flex", gap: 26, alignItems: "flex-start" }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "#E0F2EC", color: "#5C9E8A", fontWeight: 700, fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  {s.n}
                </span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: 20, color: "#1E2D28", margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#45564C", margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <MagButton href={WA_LINK} variant="solid">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5C9E8A" }}></span>
              Quero agendar minha sessão
            </MagButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F0F7F4", color: "#1E2D28", padding: "88px 28px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ display: "inline-block", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C9E8A", marginBottom: 16 }}>
              Perguntas frequentes
            </span>
            <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#1E2D28", margin: 0 }}>
              Perguntas que todo mundo tem antes de começar.
            </h2>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
