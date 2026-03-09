"use client";

import { Camera, Heart } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Gallery() {
  const { gallery } = siteConfig;
  
  // Duplicamos a lista de fotos para criar o efeito de "Loop Infinito" contínuo
  const extendedGallery = [...gallery, ...gallery];

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      
      {/* GLOWS */}
      <div className="absolute top-1/2 left-[-5%] w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-accent" />
            <span className="text-primary font-display text-2xl">Nosso Espaço</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-main">
            Onde a mágica acontece <span className="text-primary">todos os dias.</span>
          </h2>
        </div>
      </div>

      {/* ÁREA DO CARROSSEL INFINITO */}
      <div className="relative w-full overflow-hidden flex z-10 py-8">
        
        {/* Efeito Fade nas pontas do ecrã para uma entrada e saída mais elegantes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        {/* TRILHO DE ANIMAÇÃO */}
        <div className="flex w-max gap-6 md:gap-8 px-6 animate-infinite-scroll hover:animation-pause">
          {extendedGallery.map((img, idx) => (
            <div 
              key={idx} 
              className="w-[280px] h-[320px] md:w-[350px] md:h-[400px] flex-shrink-0 glass-panel p-3 md:p-4 rounded-[40px] cursor-pointer group hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)] hover:border-primary/30"
            >
              <div className="w-full h-full rounded-[28px] overflow-hidden relative shadow-inner bg-slate-100">
                <img 
                  src={img} 
                  alt={`Galeria ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                  <Heart className="w-8 h-8 text-accent fill-accent mb-2 drop-shadow-lg group-hover:animate-bounce" />
                  <p className="font-bold text-lg leading-tight">Paciente Feliz</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* Desliza exatamente metade da lista (mais o gap) para ser perfeito */
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
        }
        /* Pausa a animação quando o rato (a nossa patinha) está por cima */
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}