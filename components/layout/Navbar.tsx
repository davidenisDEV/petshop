"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito de mudar a cor/vidro ao descer a página
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-panel" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO OFICIAL */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative transition-transform group-hover:scale-105">
            <img 
              src="/fotos/logo.png" 
              alt="Logo Medicao" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl text-accent">Medicao</span>
            <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase">Clínica & Pet Shop</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-text-main">
          <Link href="#servicos" className="hover:text-accent transition-colors">Serviços</Link>
          <Link href="#petshop" className="hover:text-accent transition-colors">Pet Shop</Link>
          <Link href="#avaliacoes" className="hover:text-accent transition-colors">Avaliações</Link>
          
          <a 
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent-hover transition-all shadow-[0_4px_15px_rgba(216,51,40,0.3)] hover:-translate-y-1"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* MENU MOBILE TOGGLE */}
        <button 
          className="md:hidden text-accent p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}