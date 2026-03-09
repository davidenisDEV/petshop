"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Instagram, MapPin, Phone, HeartPulse } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, links, description } = siteConfig;

  return (
    <footer className="bg-gradient-to-b from-primary to-[#0B1536] text-white pt-12 pb-6 relative overflow-hidden mt-auto border-t border-primary-light/20">
      
      {/* TEXTURA DE BOLINHAS (Agora alinhadas com o tamanho padrão 30x30 do site) */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>

      {/* SPOTLIGHTS DE DEGRADÊ PARA DAR PROFUNDIDADE */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-primary-light/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* GRID MAIS COMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 border-b border-white/10 pb-8">
          
          {/* COLUNA 1: Marca */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex group cursor-pointer">
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white group-hover:scale-105 transition-all backdrop-blur-md border border-white/20 shadow-lg">
                <img src="/fotos/logo.png" alt="Logo Medicao" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl text-accent">Medicao</span>
                <span className="text-[10px] font-bold text-white/70 tracking-widest uppercase">Clínica & Pet Shop</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-sm">
              {description}
            </p>
            <div className="inline-flex items-center gap-2 bg-[#EF4444]/20 border border-[#EF4444]/40 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md shadow-sm">
              <HeartPulse className="w-4 h-4 text-[#EF4444]" /> Plantão 24 Horas
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display text-lg text-accent mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="#servicos" className="text-white/80 hover:text-accent hover:translate-x-1 inline-block transition-all text-sm cursor-pointer">Nossos Serviços</Link></li>
              <li><Link href="#petshop" className="text-white/80 hover:text-accent hover:translate-x-1 inline-block transition-all text-sm cursor-pointer">Pet Shop</Link></li>
              <li><Link href="#avaliacoes" className="text-white/80 hover:text-accent hover:translate-x-1 inline-block transition-all text-sm cursor-pointer">Avaliações</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Contato e Endereço */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-accent mb-4">Atendimento</h4>
            <ul className="space-y-4">
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group cursor-pointer">
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md group-hover:bg-accent transition-colors shadow-sm"><Phone className="w-4 h-4 group-hover:text-primary-dark" /></div>
                  {contact.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md shrink-0 mt-0.5 shadow-sm"><MapPin className="w-4 h-4 text-accent" /></div>
                  <span className="leading-relaxed">{contact.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: Redes Sociais */}
          <div className="lg:col-span-1 lg:col-start-12 flex lg:justify-end">
            <div>
              <h4 className="font-display text-lg text-transparent mb-4 hidden lg:block select-none">&nbsp;</h4>
              <a 
                href={links.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-primary-dark hover:border-accent transition-all group shadow-lg cursor-pointer"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM: Direitos Autorais */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-white/50 uppercase tracking-widest">
          <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-white/70">
            Feito com <span className="text-[#EF4444] text-sm animate-pulse">♥</span> para os pets.
          </p>
        </div>
      </div>
    </footer>
  );
}