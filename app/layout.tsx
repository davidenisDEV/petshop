import type { Metadata } from "next";
import { Lily_Script_One, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/floating/CustomCursor";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

const lilyScript = Lily_Script_One({ weight: "400", subsets: ["latin"], variable: "--font-lily", display: 'swap' });
const sofiaSans = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia", display: 'swap' });

export const metadata: Metadata = {
  title: "Medicao Clínica Veterinária & Pet Shop",
  description: "Atendimento 24 horas, Banho e Tosa, Táxi Dog e muito mais.",
  icons: { icon: "/fotos/logo.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      {/* A class cursor-none esconde o cursor padrão do Windows/Mac para o nosso brilhar */}
      <body className={`${lilyScript.variable} ${sofiaSans.variable} font-sans antialiased md:cursor-none pb-20 md:pb-0`}>
        <CustomCursor />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}