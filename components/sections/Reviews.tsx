"use client";

import { Star, MessageCircleHeart } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Reviews() {
  const { reviews, rating } = siteConfig;

  return (
    <section id="avaliacoes" className="py-24 relative overflow-hidden bg-background">
      
      {/* TEXTURA DE BOLINHAS & GLOWS */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(49, 96, 166, 0.15) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#3160a6]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ÍCONES 3D FLUTUANTES */}
      <div className="absolute top-[10%] right-[15%] text-6xl animate-float-slow opacity-50 pointer-events-none z-0 drop-shadow-xl rotate-[20deg]">🦴</div>
      <div className="absolute bottom-[10%] left-[5%] text-7xl animate-float-fast opacity-40 pointer-events-none z-0 drop-shadow-xl -rotate-12">🐾</div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO COM GOOGLE RATING */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          
          {/* Ouro Ícone Flutuante perto da Nota */}
          <div className="absolute top-[-20px] left-[20%] md:left-[30%] text-5xl animate-float-fast opacity-80 pointer-events-none z-20 drop-shadow-lg -rotate-12">⭐</div>

          <div className="inline-flex flex-col items-center bg-white/40 backdrop-blur-xl px-8 py-6 rounded-[32px] border border-white/60 shadow-[0_8px_30px_rgba(49,96,166,0.08)] mb-8 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default group relative z-10">
            <h3 className="font-display text-5xl text-accent mb-2 group-hover:scale-110 transition-transform duration-500">{rating.score}</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < Math.floor(rating.score) ? 'text-primary fill-primary drop-shadow-sm' : 'text-slate-200 fill-slate-200'}`} />
              ))}
            </div>
            <p className="text-sm font-bold text-[#3160a6]">
              {rating.trustedText} • Baseado em {rating.reviewsCount} avaliações
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 text-[#3160a6]">
            O amor de volta em forma de <span className="text-accent">palavras.</span>
          </h2>
        </div>

        {/* CARROSSEL DE AVALIAÇÕES - GLASSMORPHISM */}
        <div className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory custom-scrollbar">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="min-w-[300px] md:min-w-[380px] bg-white/40 backdrop-blur-2xl p-8 rounded-[32px] snap-center border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(49,96,166,0.12)] hover:-translate-y-2 transition-all duration-500 group flex flex-col cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/60 border border-white text-[#3160a6] rounded-full flex items-center justify-center font-display text-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3160a6] group-hover:text-accent transition-colors">{review.name}</h4>
                    <p className="text-xs text-text-muted">{review.date}</p>
                  </div>
                </div>
                <MessageCircleHeart className="w-6 h-6 text-[#3160a6]/20 group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary drop-shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              <p className="text-[#3160a6]/80 text-sm leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}