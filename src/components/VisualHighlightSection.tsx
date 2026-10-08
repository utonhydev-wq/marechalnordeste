import React from 'react';
import { Flame, Sparkles, UtensilsCrossed, MessageCircle, Heart, Star } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const VisualHighlightSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0c0c10] overflow-hidden text-white border-y border-zinc-800">
      
      {/* Dynamic warm fiery background backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-red-600/15 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-amber-500/15 blur-[140px] rounded-full" />
        {/* Subtle diagonal stripes to mimic street food stall textures */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 24px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Hero Banner Grid */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1515] via-[#151313] to-[#121118] border border-amber-500/40 p-8 sm:p-14 lg:p-20 shadow-2xl shadow-black">
          
          {/* Glowing Ambient Halo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Big Punchy Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 to-amber-600/20 border border-red-500/40 text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Experiência Gastronômica Raiz</span>
              </div>

              {/* Título Oficial Exato */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] text-balance">
                Não é só uma batata.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block sm:inline">
                  É A BATATA.
                </span>{' '}
                <span className="inline-block hover:scale-110 transition-transform cursor-default">
                  🔥
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl text-balance">
                Crocância dourada por fora, maciez por dentro e aquele recheio farto que derrete a cada garfada. 
                Queijo derretido, bacon estalando, frango desfiado suculento e molhos pensados para despertar todos os seus sentidos.
              </p>

              {/* Micro-destaques sensoriais */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-4">
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-3 text-center sm:text-left">
                  <div className="text-lg">🧀</div>
                  <div className="text-xs font-bold text-white mt-1">Queijo Derretido</div>
                  <div className="text-[10px] text-zinc-400">Puxa de verdade</div>
                </div>
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-3 text-center sm:text-left">
                  <div className="text-lg">🥓</div>
                  <div className="text-xs font-bold text-white mt-1">Bacon Crocante</div>
                  <div className="text-[10px] text-zinc-400">Defumado no ponto</div>
                </div>
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-3 text-center sm:text-left col-span-2 sm:col-span-1">
                  <div className="text-lg">🍟</div>
                  <div className="text-xs font-bold text-white mt-1">Porção Farta</div>
                  <div className="text-[10px] text-zinc-400">Mata qualquer fome</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={OFFICIAL_LINKS.MENU_ORDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all active:scale-95"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  <span>EXPERIMENTAR AGORA</span>
                </a>
                <a
                  href={OFFICIAL_LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/60 text-emerald-400 font-bold text-base transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>CHAMAR NO WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Showcase Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Visual Card Centerpiece */}
                <div className="relative rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 sm:p-8 border-2 border-amber-500/50 shadow-2xl shadow-black text-center">
                  
                  {/* Glowing Top Dish Graphic */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-red-500 p-1 shadow-xl shadow-amber-500/30 mb-6 flex items-center justify-center">
                    <div className="w-full h-full bg-[#14141a] rounded-full flex items-center justify-center text-5xl">
                      🥔🔥
                    </div>
                  </div>

                  <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
                    Padrão Marechal Nordeste
                  </span>
                  
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mt-1 mb-2">
                    FEITA COM CAPRICHO
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Cada porção é montada na hora, quentinha, bem embalada e pronta para proporcionar aquela explosão de sabor.
                  </p>

                  {/* Badges bar */}
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-zinc-300 bg-black/40 py-2.5 px-4 rounded-xl border border-zinc-800">
                    <span className="text-amber-400">★ 100% Saborosa</span>
                    <span>·</span>
                    <span className="text-amber-400">★ Bem Servida</span>
                    <span>·</span>
                    <span className="text-amber-400">★ Quentinha</span>
                  </div>

                </div>

                {/* Floating Depth Badge 1 */}
                <div className="absolute -top-3 -left-3 bg-red-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg border border-red-400/40 transform -rotate-3">
                  🔥 QUENTINHA &amp; CROCANTE
                </div>

                {/* Floating Depth Badge 2 */}
                <div className="absolute -bottom-3 -right-3 bg-amber-500 text-black text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg border border-yellow-200/50 transform rotate-2">
                  🧀 MUITO RECHEIO
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
