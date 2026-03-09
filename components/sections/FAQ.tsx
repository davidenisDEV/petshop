"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function FAQ() {
  const { faqs } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-transparent">
      
      {/* GLOWS MISTURADOS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-accent" />
            <span className="text-primary font-display text-2xl">Tire as suas dúvidas</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-text-main">
            Perguntas <span className="text-primary">Frequentes.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                onClick={() => toggleFAQ(idx)}
                className={`glass-panel rounded-[24px] border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen ? "bg-white/80 border-primary/30 shadow-lg" : "bg-white/40 border-white/60 shadow-sm hover:bg-white/60 hover:shadow-md"
                }`}
              >
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <h3 className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? "text-primary" : "text-text-main"}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 pt-0 text-text-main/80 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}