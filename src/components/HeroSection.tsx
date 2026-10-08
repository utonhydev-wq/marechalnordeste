import React from 'react';
import { UtensilsCrossed, MessageCircle, Star, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#0d0d11]"
    >
      {/* Background glow and subtle warm radial lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-amber-500/15 via-red-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full" />
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Conteúdo (Texto e Ações de Conversão) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Google Rating Social Proof Pill */}
            <a
              href={OFFICIAL_LINKS.GOOGLE_REVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-xs text-zinc-200 hover:border-amber-400/70 hover:bg-zinc-900 transition-all duration-200 mb-6 shadow-md shadow-black/40 group active:scale-98"
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 opacity-60" />
              </div>
              <span className="font-bold text-amber-400 font-mono tabular-nums">4,5</span>
              <span className="text-zinc-400">estrelas no Google</span>
              <span className="text-zinc-500 group-hover:text-amber-400 transition-colors">↗</span>
            </a>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5 max-w-2xl text-balance">
              Aquela batata que dá{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                vontade de pedir de novo.
              </span>{' '}
              <span className="inline-block hover:rotate-12 transition-transform duration-200 cursor-default">
                🥔🔥
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-xl text-balance">
              Sabor, recheio e aquela porção caprichada que combina com qualquer fome.
            </p>

            {/* Dois Botões Principais de Alta Conversão */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={OFFICIAL_LINKS.MENU_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 rounded-2xl shadow-xl shadow-amber-500/25 transition-all duration-200 active:scale-95 text-center"
              >
                <span className="text-xl">🍟</span>
                <span className="tracking-wide uppercase font-extrabold text-sm sm:text-base">
                  VER CARDÁPIO
                </span>
                <span className="text-xs bg-black/15 text-black px-2 py-0.5 rounded-md font-mono">
                  Online
                </span>
              </a>

              <a
                href={OFFICIAL_LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-zinc-900/90 hover:bg-zinc-800 border-2 border-emerald-500/60 hover:border-emerald-400 rounded-2xl shadow-lg transition-all duration-200 active:scale-95 text-center"
              >
                <span className="text-xl">💬</span>
                <span className="tracking-wide uppercase font-extrabold text-sm sm:text-base text-emerald-400 group-hover:text-emerald-300">
                  PEDIR PELO WHATSAPP
                </span>
              </a>
            </div>

            {/* Destaques Rápidos de Confiança */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Porções bem servidas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ingredientes frescos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Entrega rápida</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual (Logo da Empresa + Apresentação Gastronômica Marcante) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Outer Sizzling Frame */}
              <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-amber-500/30 via-red-600/20 to-zinc-900 border border-amber-500/30 shadow-2xl shadow-black/80">
                
                {/* Background Card Surface */}
                <div className="relative bg-[#131318] rounded-[22px] overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center">
                  
                  {/* Subtle top badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-6">
                    <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
                    <span>Original Marechal Nordeste</span>
                  </div>

                  {/* LOGO OFICIAL EM DESTAQUE */}
                  <div className="relative mb-6">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl shadow-amber-500/30 mx-auto transition-transform duration-300 hover:scale-105">
                      <img
                        src={OFFICIAL_LINKS.LOGO_URL}
                        alt="Logo Oficial Marechal Nordeste Batata"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Floating mini badge: Batatas & Lanches */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                      🔥 BATATA RECHEADA &amp; LANCHES
                    </div>
                  </div>

                  <h3 className="font-bebas text-3xl sm:text-4xl text-amber-400 tracking-wide mt-2 mb-1">
                    MARECHAL NORDESTE
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-xs mb-6">
                    Crocância irresistível, queijo derretido e porções que satisfazem de verdade.
                  </p>

                  {/* Micro Quick Order Bar */}
                  <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800">
                    <a
                      href={OFFICIAL_LINKS.MENU_ORDER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                      <span>Abrir Cardápio</span>
                    </a>
                    <a
                      href={OFFICIAL_LINKS.WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating aesthetic badge 1 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-zinc-900/95 border border-amber-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 text-lg">
                  🍟
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Porção Caprichada</div>
                  <div className="text-[10px] text-amber-400">Muito recheio</div>
                </div>
              </div>

              {/* Floating aesthetic badge 2 */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-zinc-900/95 border border-emerald-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pedido Rápido</div>
                  <div className="text-[10px] text-zinc-400">Direto no WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
