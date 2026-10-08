import React from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Opinião de quem já pediu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-2 flex-wrap">
            <span>Quem prova, avalia.</span>
            <span>⭐</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            A satisfação dos nossos clientes é nossa melhor propaganda. Veja nossa pontuação oficial no Google e deixe também a sua experiência.
          </p>
        </div>

        {/* Card Principal de Prova Social */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#181822] to-[#121218] rounded-3xl border border-amber-500/30 p-8 sm:p-12 text-center shadow-2xl shadow-black/80">
          
          {/* Google Icon / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium mb-6">
            <span className="text-blue-400 font-bold">G</span>
            <span className="text-red-400 font-bold">o</span>
            <span className="text-yellow-400 font-bold">o</span>
            <span className="text-blue-400 font-bold">g</span>
            <span className="text-green-400 font-bold">l</span>
            <span className="text-red-400 font-bold">e</span>
            <span className="text-zinc-400 ml-1">Reviews</span>
          </div>

          {/* Destaque Principal: 4,5 / 5 ⭐ */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="font-bebas text-6xl sm:text-7xl text-amber-400 tracking-wide leading-none flex items-baseline gap-2">
              <span>{OFFICIAL_LINKS.RATING}</span>
              <span className="text-3xl sm:text-4xl text-zinc-500">/ {OFFICIAL_LINKS.MAX_RATING}</span>
            </div>

            {/* Estrelas Grandes */}
            <div className="flex items-center gap-1.5 mt-3 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <div className="relative">
                <Star className="w-6 h-6 text-zinc-700" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
              </div>
            </div>

            <p className="text-lg font-bold text-white mt-3">
              Avaliação no Google
            </p>
            <p className="text-xs text-zinc-400 max-w-sm mt-1">
              Avaliações reais e verificadas por clientes que saborearam nossas porções e batatas.
            </p>
          </div>

          {/* Botão de Avaliação no Google */}
          <div className="pt-6 border-t border-zinc-800">
            <a
              href={OFFICIAL_LINKS.GOOGLE_REVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-base shadow-xl shadow-amber-500/20 active:scale-95 transition-all w-full sm:w-auto"
            >
              <Star className="w-4 h-4 fill-black" />
              <span>⭐ AVALIAR NO GOOGLE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-zinc-500 mt-3">
              Já provou nossa batata? Sua opinião é fundamental para continuarmos melhorando!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
