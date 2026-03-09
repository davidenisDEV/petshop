import type { Metadata } from "next";
import { Lily_Script_One, Sofia_Sans } from "next/font/google";
import "./globals.css";

// 1. Fonte Primária (Títulos - Lily Script One)
const lilyScript = Lily_Script_One({ 
  weight: "400", // Peso exato que você solicitou
  subsets: ["latin"],
  variable: "--font-lily",
  display: 'swap',
});

// 2. Fonte Secundária (Textos - Sofia Sans)
const sofiaSans = Sofia_Sans({ 
  subsets: ["latin"],
  variable: "--font-sofia",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Medicao Clínica Veterinária & Pet Shop",
  description: "Atendimento 24 horas, Banho e Tosa, Táxi Dog e muito mais.",
  icons: {
    icon: "/fotos/logo.png", 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lilyScript.variable} ${sofiaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}