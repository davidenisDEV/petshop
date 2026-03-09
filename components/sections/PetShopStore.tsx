"use client";

import { ShoppingBag, Star, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function PetShopStore() {
  const { products, contact } = siteConfig;

  const handleBuy = (productName: string) => {
    const text = `🛍️ Olá! Tenho interesse no produto: *${productName}*. Ainda está disponível?`;
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="petshop" className="py-24 relative overflow-hidden bg-background/50">
      
      {/* TEXTURA DE BOLINHAS (Azul Suave) & GLOWS */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(49, 96, 166, 0.15) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#3160a6]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-[-5%] w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-accent" />
              <span className="text-accent font-display text-xl md:text-2xl">Pet Shop & Farmácia</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#3160a6]">
              Os <span className="text-accent">melhores produtos</span> para o seu melhor amigo.
            </h2>
          </div>
          <button className="text-[#3160a6] font-bold flex items-center gap-2 hover:text-accent transition-colors whitespace-nowrap bg-white/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md">
            Ver catálogo completo <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory custom-scrollbar">
          {(products || []).map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] md:min-w-[320px] relative bg-white/40 backdrop-blur-2xl p-5 rounded-[32px] snap-center transition-all duration-500 group border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(49,96,166,0.15)] hover:border-[#3160a6]/30 hover:-translate-y-3 cursor-pointer overflow-hidden flex flex-col"
              onClick={() => handleBuy(product.name)}
            >
              {/* Brilho interno que aparece no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="aspect-square bg-white rounded-2xl mb-5 overflow-hidden relative shadow-inner z-10">
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-[#3160a6] z-10 border border-slate-100 shadow-sm">
                  {product.category}
                </div>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>

              <div className="flex items-center gap-1 mb-2 z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary drop-shadow-sm" />
                ))}
              </div>

              <h3 className="font-bold text-[#3160a6] text-lg mb-2 line-clamp-2 leading-tight z-10 group-hover:text-accent transition-colors duration-300 flex-grow">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between mt-4 z-10">
                <span className="font-display text-2xl text-accent">{product.price}</span>
                
                {/* Botão Magnético: Muda de Amarelo para Azul no Hover do Cartão */}
                <button 
                  className="bg-primary text-[#3160a6] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-md group-hover:bg-[#3160a6] group-hover:text-primary group-hover:scale-110 group-hover:shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}