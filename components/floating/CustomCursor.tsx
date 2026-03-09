"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Só ativa o cursor em ecrãs com rato (evita bugar em telemóveis)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Deteta Links, Botões OU qualquer Div de Cartão que tenha "cursor-pointer"
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer');
      
      if (isInteractive) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out flex items-center justify-center"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* O Cursor Normal (ponto azul) ou Patinha (quando faz hover num link/card) */}
      {isHovering ? (
        <span className="text-3xl drop-shadow-lg animate-in zoom-in duration-200">🐾</span>
      ) : (
        <div className="w-3 h-3 bg-primary/50 backdrop-blur-sm rounded-full shadow-lg"></div>
      )}
    </div>
  );
}