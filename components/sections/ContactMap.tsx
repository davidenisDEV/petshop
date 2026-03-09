"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, PawPrint } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function ContactMap() {
  const { contact, map } = siteConfig;
  const [formData, setFormData] = useState({ name: "", petName: "", message: "" });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🐾 *Novo Contato pelo Site*%0A%0A*Tutor(a):* ${formData.name}%0A*Pet:* ${formData.petName}%0A*Mensagem:* ${formData.message}`;
    window.open(`${contact.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      
      {/* TEXTURA DE BOLINHAS & GLOWS DE FUNDO */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(49, 96, 166, 0.15) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>
      <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-accent font-display text-2xl">Onde Estamos</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#3160a6]">
            Venha fazer-nos uma <span className="text-accent">visita.</span>
          </h2>
          <p className="text-text-muted text-lg">
            Estamos de portas abertas 24 horas por dia para receber você e o seu melhor amigo com todo o conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
          
          {/* GLOW CENTRAL ATRÁS DOS CARDS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/50 blur-[100px] rounded-full pointer-events-none z-0"></div>

          {/* COLUNA ESQUERDA: Informações e Formulário */}
          <div className="flex flex-col justify-between relative z-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              
              {/* CARD INFO 1: Interativo */}
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-[32px] border border-white/60 shadow-[0_8px_30px_rgba(49,96,166,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(49,96,166,0.1)] transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 bg-white/80 text-[#3160a6] rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:bg-[#3160a6] group-hover:text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#3160a6] mb-1">Contato</h4>
                <p className="text-[#3160a6]/70 text-sm">{contact.phone}</p>
              </div>
              
              {/* CARD INFO 2: Interativo */}
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-[32px] border border-white/60 shadow-[0_8px_30px_rgba(49,96,166,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(49,96,166,0.1)] transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 bg-white/80 text-accent rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#3160a6] mb-1">Horário</h4>
                <p className="text-[#3160a6]/70 text-sm">{contact.hours}</p>
              </div>
            </div>

            {/* FORMULÁRIO GLASSMORPHISM */}
            <div className="bg-white/40 backdrop-blur-2xl p-8 rounded-[32px] border border-white/60 shadow-[0_20px_40px_rgba(49,96,166,0.08)] flex-grow transition-all duration-500 hover:shadow-[0_20px_40px_rgba(49,96,166,0.15)]">
              <h3 className="font-display text-2xl text-[#3160a6] mb-6 flex items-center gap-2">
                <PawPrint className="w-6 h-6 text-accent" /> Fale Conosco
              </h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#3160a6]/70 uppercase mb-1 block">Seu Nome</label>
                    <input 
                      type="text" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white focus:bg-white p-3 rounded-xl outline-none focus:border-primary shadow-sm text-sm text-[#3160a6] transition-all"
                      placeholder="Ex: Maria"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#3160a6]/70 uppercase mb-1 block">Nome do Pet</label>
                    <input 
                      type="text" required
                      value={formData.petName} onChange={e => setFormData({...formData, petName: e.target.value})}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white focus:bg-white p-3 rounded-xl outline-none focus:border-primary shadow-sm text-sm text-[#3160a6] transition-all"
                      placeholder="Ex: Thor"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#3160a6]/70 uppercase mb-1 block">Como podemos ajudar?</label>
                  <textarea 
                    required rows={3}
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/60 backdrop-blur-sm border border-white focus:bg-white p-3 rounded-xl outline-none focus:border-primary shadow-sm text-sm text-[#3160a6] resize-none transition-all"
                    placeholder="Digite sua dúvida ou o serviço que procura..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl group">
                  Enviar para o WhatsApp <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* COLUNA DIREITA: Mapa em Painel de Vidro */}
          <div className="relative z-10 bg-white/40 backdrop-blur-2xl p-2 md:p-4 rounded-[32px] md:rounded-[40px] border border-white/60 shadow-[0_20px_40px_rgba(49,96,166,0.12)] h-[400px] lg:h-auto group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(49,96,166,0.2)]">
            <div className="w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-inner bg-slate-100">
              <iframe 
                src={map.iframeSrc} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}