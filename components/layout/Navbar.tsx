"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Stethoscope, Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-panel shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-primary text-white p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl text-primary">Medicao</span>
            <span className="text-[10px] font-bold text-accent tracking-widest uppercase">Clínica & Pet Shop</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-text-main">
          <Link href="#servicos" className="hover:text-primary transition-colors cursor-pointer">Serviços</Link>
          <Link href="#petshop" className="hover:text-primary transition-colors cursor-pointer">Pet Shop</Link>
          <Link href="#avaliacoes" className="hover:text-primary transition-colors cursor-pointer">Avaliações</Link>
          
          <a 
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-[#EF4444] text-white px-6 py-2.5 rounded-full hover:bg-[#DC2626] transition-all shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:-translate-y-1 cursor-pointer"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* BOTÃO TOGGLE MOBILE */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
        <nav className="container mx-auto px-6 flex flex-col gap-4 font-bold text-lg text-primary">
          <Link href="#servicos" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            Nossos Serviços <ChevronRight className="w-5 h-5 text-accent" />
          </Link>
          <Link href="#petshop" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            Pet Shop e Farmácia <ChevronRight className="w-5 h-5 text-accent" />
          </Link>
          <Link href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            Avaliações e Espaço <ChevronRight className="w-5 h-5 text-accent" />
          </Link>
          <a 
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#EF4444] text-white text-center py-4 rounded-xl shadow-md mt-2"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}