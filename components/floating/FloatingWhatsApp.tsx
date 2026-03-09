"use client";

import { useState } from "react";
import { MessageCircle, X, HeartPulse, Scissors, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para enviar mensagem pré-formatada
  const sendMessage = (type: string) => {
    let text = "";
    if (type === "emergencia") {
      text = "🚨 *EMERGÊNCIA 24H*%0A%0AOlá! Meu pet precisa de atendimento urgente. Podemos falar agora?";
    } else if (type === "banho") {
      text = "🛁 *Agendamento: Banho e Tosa*%0A%0AOlá! Gostaria de agendar um banho/tosa para o meu pet. Como funciona?";
    } else {
      text = "🐾 *Atendimento Geral*%0A%0AOlá, Medicao! Gostaria de tirar algumas dúvidas e conhecer melhor a clínica.";
    }
    window.open(`${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* Janela do Mini-Bot */}
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-primary p-5 relative overflow-hidden">
            {/* Decoração de fundo no cabeçalho */}
            <div className="absolute top-[-20%] right-[-10%] w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                  🐶
                </div>
                <div>
                  <h4 className="text-white font-bold font-display leading-tight">Medicao Bot</h4>
                  <p className="text-primary-light text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online 24h
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-5 bg-background/50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 mb-4 text-sm text-text-main">
              Olá! Como podemos ajudar o seu pet hoje? Selecione uma opção para falarmos no WhatsApp. 🐾
            </div>

            <div className="space-y-2">
              <button onClick={() => sendMessage("emergencia")} className="w-full flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-xl text-sm font-bold transition-colors border border-red-100 group">
                <div className="bg-red-500 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform"><HeartPulse className="w-4 h-4" /></div>
                Emergência 24h
              </button>
              
              <button onClick={() => sendMessage("banho")} className="w-full flex items-center gap-3 bg-white hover:bg-slate-50 text-text-main p-3 rounded-xl text-sm font-bold transition-colors border border-slate-200 group">
                <div className="bg-primary text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform"><Scissors className="w-4 h-4" /></div>
                Agendar Banho & Tosa
              </button>
              
              <button onClick={() => sendMessage("geral")} className="w-full flex items-center gap-3 bg-white hover:bg-slate-50 text-text-main p-3 rounded-xl text-sm font-bold transition-colors border border-slate-200 group">
                <div className="bg-accent text-primary-dark p-1.5 rounded-lg group-hover:scale-110 transition-transform"><CalendarCheck className="w-4 h-4" /></div>
                Dúvidas / Outros
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botão Flutuante (Trigger) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,180,216,0.4)] transition-all duration-300 hover:scale-110 z-50 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-primary hover:bg-primary-dark animate-float-slow'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 -rotate-90" /> : <MessageCircle className="w-6 h-6" />}
      </button>

    </div>
  );
}