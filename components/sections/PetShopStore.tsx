"use client";

import { useState } from "react";
import { ShoppingBag, Star, ChevronRight, X, Minus, Plus } from "lucide-react";
import { siteConfig } from "@/config/site-config";

type Product = { id: string; name: string; price: string; category: string; img: string; };

export function PetShopStore() {
  const { products, contact } = siteConfig;
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleBuy = () => {
    if (!selectedProduct) return;
    const text = `🛍️ *Novo Pedido - Pet Shop*%0A%0A*Produto:* ${selectedProduct.name}%0A*Quantidade:* ${quantity}%0A%0AOlá! Ainda está disponível?`;
    window.open(`${contact.whatsapp}?text=${text}`, "_blank");
    closeModal();
  };

  return (
    <section id="petshop" className="py-24 relative bg-transparent">
      
      {/* GLOWS PARA DEGRADÊ */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-accent" />
              <span className="text-accent font-display text-xl md:text-2xl">Pet Shop & Farmácia</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-text-main">
              Os <span className="text-primary">melhores produtos</span> para o seu melhor amigo.
            </h2>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors whitespace-nowrap bg-white/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/60 shadow-sm cursor-pointer">
            Ver catálogo completo <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CARROSSEL DE PRODUTOS */}
        <div className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory custom-scrollbar">
          {(products || []).map((product) => (
            <div 
              key={product.id} 
              onClick={() => openModal(product)}
              className="min-w-[280px] md:min-w-[320px] relative glass-panel bg-white/50 p-5 rounded-[32px] snap-center transition-all duration-500 group hover:bg-white hover:-translate-y-3 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="aspect-square bg-white rounded-2xl mb-5 overflow-hidden relative shadow-inner z-10">
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-primary z-10 shadow-sm border border-slate-100">
                  {product.category}
                </div>
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>

              <div className="flex items-center gap-1 mb-2 z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent drop-shadow-sm" />
                ))}
              </div>

              <h3 className="font-bold text-text-main text-lg mb-2 line-clamp-2 leading-tight z-10 group-hover:text-primary transition-colors flex-grow">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between mt-4 z-10">
                <span className="font-display text-2xl text-text-main">{product.price}</span>
                <button className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg cursor-pointer">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE VISUALIZAÇÃO RÁPIDA E QUANTIDADE */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative bg-white rounded-[32px] p-6 md:p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={closeModal} className="absolute top-4 right-4 text-text-muted hover:text-primary transition-colors bg-slate-100 p-2 rounded-full cursor-pointer">
              <X className="w-5 h-5" />
            </button>

            <div className="flex gap-4 md:gap-6 mb-6 mt-2">
              <div className="w-1/3 aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{selectedProduct.category}</span>
                <h3 className="font-bold text-text-main text-lg md:text-xl leading-tight mb-2">{selectedProduct.name}</h3>
                <span className="font-display text-2xl text-primary">{selectedProduct.price}</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between mb-8 border border-slate-100">
              <span className="font-bold text-text-muted text-sm uppercase tracking-widest">Quantidade:</span>
              <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-text-muted hover:text-[#EF4444] transition-colors cursor-pointer"><Minus className="w-4 h-4" /></button>
                <span className="font-bold text-primary w-6 text-center text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-text-muted hover:text-primary transition-colors cursor-pointer"><Plus className="w-4 h-4" /></button>
              </div>
            </div>

            <button onClick={handleBuy} className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(239,68,68,0.3)] hover:-translate-y-1 cursor-pointer">
              <ShoppingBag className="w-5 h-5" /> Pedir no WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}