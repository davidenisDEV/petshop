"use client";

import { Award, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function VetChief() {
  const { vetChief } = siteConfig;

  return (
    <section className="py-24 relative bg-transparent">
      
      {/* GLOWS DE FUNDO (Sem overflow-hidden para se misturarem) */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(30,58,138,0.08)] rounded-[40px] p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 group">
          
          {/* FOTO DO VETERINÁRIO */}
          <div className="md:w-2/5 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-[32px] transform rotate-6 group-hover:rotate-12 transition-transform duration-500 z-0"></div>
            <div className="relative z-10 aspect-square rounded-[32px] overflow-hidden border-4 border-white shadow-xl">
              <img src={vetChief.image} alt={vetChief.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Selo Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 animate-float-slow">
              <div className="bg-accent/20 p-2 rounded-full text-accent-hover">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">Registro</p>
                <p className="font-bold text-primary leading-none">{vetChief.crmv}</p>
              </div>
            </div>
          </div>

          {/* INFORMAÇÕES */}
          <div className="md:w-3/5 text-center md:text-left mt-8 md:mt-0">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block backdrop-blur-sm border border-primary/20">
              Direção Clínica
            </span>
            <h2 className="text-4xl md:text-5xl mb-2 text-primary leading-tight">
              {vetChief.name}
            </h2>
            <h3 className="text-xl text-accent-hover font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="w-5 h-5" /> {vetChief.role}
            </h3>
            <p className="text-text-main/80 text-lg leading-relaxed mb-8">
              "{vetChief.description}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}