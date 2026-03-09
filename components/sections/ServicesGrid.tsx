"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site-config";
import { ArrowRight, ChevronLeft } from "lucide-react";

export function ServicesGrid() {
  const { services } = siteConfig;
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleWhatsApp = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    const url = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="servicos" className="py-24 relative bg-transparent">
      
      {/* PONTOS DE LUZ (GLOWS) - Sem overflow hidden para se misturarem! */}
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* ÍCONES 3D FLUTUANTES */}
      <div className="absolute top-[15%] left-[5%] text-6xl animate-float-slow opacity-60 pointer-events-none z-0 drop-shadow-xl -rotate-12">🐾</div>
      <div className="absolute bottom-[10%] right-[5%] text-7xl animate-float-fast opacity-50 pointer-events-none z-0 drop-shadow-xl rotate-12">🦴</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm border border-primary/20">
            Nossas Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl mb-4 text-text-main">
            Tudo o que o seu pet precisa em <span className="text-primary">um só lugar.</span>
          </h2>
          <p className="text-text-muted text-lg">
            De exames de rotina a emergências de madrugada, a nossa equipa está pronta para oferecer o melhor cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div 
                key={service.id}
                className={`relative rounded-[32px] transition-all duration-500 overflow-hidden min-h-[420px] flex flex-col group cursor-pointer ${
                  isActive 
                    ? `${service.activeBg} shadow-2xl scale-[1.02] z-10 border border-white/20` 
                    : "glass-panel bg-white/40 hover:bg-white/60 hover:border-primary/30 hover:-translate-y-3"
                }`}
                onClick={() => !isActive && setActiveCard(service.id)}
              >
                {!isActive ? (
                  <div className="p-8 flex flex-col h-full animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-white rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:shadow-md">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl mb-4 text-primary group-hover:text-accent transition-colors duration-300 font-bold">{service.name}</h3>
                    <p className="text-text-muted leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-2 font-bold text-primary group-hover:translate-x-2 transition-transform">
                      Saber mais <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    </div>
                  </div>
                ) : (
                  <div className="p-8 flex flex-col h-full animate-in zoom-in-95 duration-300">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveCard(null); }} 
                      className="flex items-center gap-2 mb-6 font-bold opacity-70 hover:opacity-100 transition-opacity w-fit"
                    >
                      <ChevronLeft className="w-5 h-5" /> Voltar
                    </button>
                    <h3 className="text-2xl mb-6 font-display leading-tight">{service.name}</h3>
                    <div className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                      {service.subServices?.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => handleWhatsApp(e, sub.whatsappText)}
                          className="w-full text-left p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm group/btn hover:scale-[1.02] shadow-sm cursor-pointer"
                        >
                          <div className="font-bold flex items-center justify-between mb-1">
                            {sub.name}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                          </div>
                          <div className="text-sm opacity-90 leading-snug">{sub.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}