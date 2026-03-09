"use client";

import { useState } from "react";
import { Scissors, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  
  const { beforeAfter, contact } = siteConfig;

  const handleSchedule = () => {
    const text = "🛁 Olá! Vi o antes e depois no site e gostaria de agendar um Banho & Tosa para o meu pet.";
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      
      {/* TEXTURA DE BOLINHAS & GLOWS (Background Contínuo) */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(30, 58, 138, 0.06) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>
      <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>

      {/* ÍCONES 3D FLUTUANTES */}
      <div className="absolute top-[20%] left-[8%] text-7xl animate-float-fast opacity-50 pointer-events-none z-0 drop-shadow-xl -rotate-12">🛁</div>
      <div className="absolute bottom-[15%] right-[8%] text-6xl animate-float-slow opacity-60 pointer-events-none z-0 drop-shadow-xl rotate-12">🐾</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-primary font-display text-2xl">Estética Animal</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-text-main">
            O verdadeiro <span className="text-primary">Dia de Spa.</span>
          </h2>
          <p className="text-text-muted text-lg">
            Deslize para ver a transformação. Usamos apenas produtos premium para garantir o pelo macio, cheiroso e saudável do seu melhor amigo.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group cursor-pointer">
          
          {/* FOTO DO ANTES */}
          <img 
            src={beforeAfter.beforeImage} 
            alt="Pet Antes do Banho" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm text-text-muted shadow-sm z-0 border border-white/50">
            Antes
          </div>

          {/* FOTO DO DEPOIS */}
          <img 
            src={beforeAfter.afterImage} 
            alt="Pet Depois do Banho" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
          />
          <div 
            className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
            style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
          >
            Depois ✨
          </div>

          {/* CONTROLE DESLIZANTE */}
          <input 
            type="range" 
            min="0" max="100" 
            value={position} 
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          <div className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none z-10" style={{ left: `calc(${position}%)` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-accent">
              <ChevronLeft className="w-5 h-5 -mr-1" />
              <ChevronRight className="w-5 h-5 -ml-1" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleSchedule}
            className="bg-primary text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <Scissors className="w-5 h-5" /> Agendar Banho e Tosa
          </button>
        </div>

      </div>
    </section>
  );
}