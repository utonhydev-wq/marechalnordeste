import React from 'react';
import { UtensilsCrossed, MessageCircle, Flame } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#111116] relative overflow-hidden border-t border-zinc-800">
      
      {/* Background warm flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/15 via-red-600/15 to-amber-500/15 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Top Kicker */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-6">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>Chega de passar vontade</span>
        </div>

        {/* Título Oficial Exato */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5 text-balance">
          E aí... vai ficar só olhando?{' '}
          <span className="inline-block hover:scale-110 transition-transform">
            👀🍟
          </span>
        </h2>

        {/* Subtítulo Oficial Exato */}
        <p className="text-xl sm:text-2xl text-zinc-300 font-medium max-w-xl mx-auto mb-10 text-balance">
          Escolha seu pedido e mate a fome agora.
        </p>

        {/* Botões Oficiais Exatos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Botão 1: 🍟 VER CARDÁPIO */}
          <a
            href={OFFICIAL_LINKS.MENU_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-base shadow-xl shadow-amber-500/25 active:scale-95 transition-all text-center"
          >
            <span className="text-xl">🍟</span>
            <span className="tracking-wide uppercase font-extrabold">VER CARDÁPIO</span>
          </a>

          {/* Botão 2: 💬 PEDIR NO WHATSAPP */}
          <a
            href={OFFICIAL_LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border-2 border-emerald-500/80 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-extrabold text-base shadow-lg active:scale-95 transition-all text-center"
          >
            <span className="text-xl">💬</span>
            <span className="tracking-wide uppercase font-extrabold">PEDIR NO WHATSAPP</span>
          </a>
        </div>

        <p className="text-xs text-zinc-400 mt-6">
          Atendimento rápido, porções no capricho e entrega para você saborear sem sair de casa!
        </p>

      </div>
    </section>
  );
};
