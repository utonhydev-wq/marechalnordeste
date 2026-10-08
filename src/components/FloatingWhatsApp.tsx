import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido no WhatsApp"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center"
    >
      <a
        href={OFFICIAL_LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Pedir pelo WhatsApp"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Discreto anel pulsante */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping [animation-duration:2.5s] pointer-events-none" />

        {/* Ícone oficial */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-[2.2] shrink-0" />

        {/* Hover / Label no Desktop */}
        <span
          className={`overflow-hidden transition-all duration-300 whitespace-nowrap text-sm font-extrabold tracking-wide hidden sm:inline-block ${
            isHovered ? 'max-w-xs pl-2.5 pr-1 opacity-100' : 'max-w-0 pl-0 opacity-0'
          }`}
        >
          Pedir pelo WhatsApp
        </span>

        {/* Micro indicador online */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-amber-400 border-2 border-zinc-900 rounded-full" />
      </a>
    </aside>
  );
};
