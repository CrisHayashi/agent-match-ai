import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Match AI",
  description: "Sistema recomendador de ferramentas de IA agenticas com Next.js, GPT-5.5 e SDD."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
