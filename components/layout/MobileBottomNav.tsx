"use client";

import Link from "next/link";
import { Home, HeartPulse, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function MobileBottomNav() {
  const handleEmergency = () => {
    const text = "🚨 *EMERGÊNCIA 24H*%0A%0AOlá! Meu pet precisa de atendimento urgente.";
    window.open(`${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200 pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        
        <Link href="/" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">Início</span>
        </Link>

        <a href={siteConfig.map.iframeSrc} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <MapPin className="w-6 h-6" />
          <span className="text-[10px] font-bold">Chegar</span>
        </a>

        {/* Botão Central de Emergência (Vermelho) */}
        <button onClick={handleEmergency} className="relative -top-5 flex flex-col items-center gap-1 group">
          <div className="bg-[#EF4444] text-white p-4 rounded-full shadow-[0_8px_20px_rgba(239,68,68,0.4)] group-hover:scale-105 transition-transform animate-pulse">
            <HeartPulse className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold text-[#EF4444]">Plantão 24h</span>
        </button>

        <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold">Contato</span>
        </a>

      </div>
    </div>
  );
}