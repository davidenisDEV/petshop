"use client";

import { PhoneCall, HeartPulse } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-transparent">
      
      {/* PONTOS DE LUZ (GLOWS) - Livres para sangrar para a próxima section */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      {/* Este glow fica na base da Hero, conectando perfeitamente com os Serviços */}
      <div className="absolute -bottom-40 right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* TEXTO E CHAMADA */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#EF4444]/10 text-[#EF4444] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#EF4444]/20 backdrop-blur-sm">
              <HeartPulse className="w-4 h-4" /> Atendimento 24 Horas
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl leading-tight mb-6 text-text-main">
              O <span className="text-primary">cuidado</span> que o seu pet merece, a <span className="text-accent">alegria</span> que ele transmite.
            </h1>
            
            <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Clínica veterinária, banho & tosa, hotel e pet shop. Tudo num só lugar com a segurança e o amor de quem entende de verdade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#EF4444] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#DC2626] transition-all shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:-translate-y-1 relative group overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                Atendimento Rápido
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="w-full sm:w-auto bg-white text-primary border border-primary/20 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-primary/5 transition-colors shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" /> Ligar Agora
              </a>
            </div>
          </div>

          {/* IMAGEM FELIZ */}
          <div className="md:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-accent/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" 
              alt="Cachorro Feliz" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white"
            />

            <div className="absolute top-10 -left-10 text-6xl animate-float-slow z-20 drop-shadow-xl">🦴</div>
            <div className="absolute bottom-10 -right-5 text-6xl animate-float-fast z-20 drop-shadow-xl">🐾</div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}