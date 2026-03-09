"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function FloatingWhatsApp() {
  const { contact } = siteConfig;

  // Uma mensagem genérica para o botão flutuante
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = "Olá! Estava vendo o site e gostaria de falar com o atendimento.";
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <a 
      href={contact.whatsapp}
      onClick={handleWhatsApp}
      className="fixed bottom-24 md:bottom-8 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center animate-bounce cursor-pointer group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:animate-ping" />
      
      {/* Tooltip opcional no Desktop */}
      <span className="absolute right-full mr-4 bg-white text-text-main text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block whitespace-nowrap pointer-events-none border border-slate-100">
        Precisa de ajuda?
      </span>
    </a>
  );
}