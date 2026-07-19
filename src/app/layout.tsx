import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Regina Fernandes Terapeuta TRG",
    template: "%s Regina Fernandes",
  },
  description:
    "Terapia de Reprocessamento Generativo (TRG) com a Terapeuta Regina Fernandes. Resolvendo na raiz, para você voltar a viver com leveza. Presencial em São Paulo e online para o Brasil e o mundo.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${cormorant.variable}`}>
      <body>
        <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
