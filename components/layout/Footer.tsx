"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Instagram, MapPin, Phone, HeartPulse } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, links, description } = siteConfig;

  return (
    <footer className="bg-[#3160a6] text-white pt-12 pb-6 relative overflow-hidden mt-auto border-t border-[#3160a6]/90">
      
      {/* TEXTURA DE BOLINHAS BRANCAS (DESTAQUE NO AZUL) E GLOWS */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 2px, transparent 2px)', backgroundSize: '20px 20px' }}
      ></div>
      <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[250px] h-[250px] bg-primary/10 rounded-full blur-[70px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* GRID MAIS COMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 border-b border-white/10 pb-8">
          
          {/* COLUNA 1: Marca (Ocupa 4 colunas) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex group">
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white group-hover:scale-105 transition-all backdrop-blur-md border border-white/20">
                <img src="/fotos/logo.png" alt="Logo Medicao" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl text-primary">Medicao</span>
                <span className="text-[10px] font-bold text-white/70 tracking-widest uppercase">Clínica & Pet Shop</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-sm">
              {description}
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
              <HeartPulse className="w-4 h-4 text-accent" /> Plantão 24 Horas
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display text-lg text-primary mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="#servicos" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Nossos Serviços</Link></li>
              <li><Link href="#petshop" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Pet Shop</Link></li>
              <li><Link href="#avaliacoes" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Avaliações</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Contato e Endereço */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-primary mb-4">Atendimento</h4>
            <ul className="space-y-4">
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group">
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md group-hover:bg-primary group-hover:border-primary transition-colors"><Phone className="w-4 h-4 group-hover:text-[#3160a6]" /></div>
                  {contact.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <div className="p-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md shrink-0 mt-0.5"><MapPin className="w-4 h-4 text-accent" /></div>
                  <span className="leading-relaxed">{contact.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: Redes Sociais */}
          <div className="lg:col-span-1 lg:col-start-12 flex lg:justify-end">
            <div>
              <h4 className="font-display text-lg text-primary mb-4 hidden lg:block">&nbsp;</h4>
              <a 
                href={links.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-[#3160a6] hover:border-primary transition-all group shadow-lg"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM: Direitos Autorais */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-white/60 uppercase tracking-widest">
          <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-accent text-sm">♥</span> para os pets.
          </p>
        </div>
      </div>
    </footer>
  );
}