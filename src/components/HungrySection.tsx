import React from 'react';
import { Sparkles, ArrowRight, Utensils, Flame, Heart, Smartphone } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const HungrySection: React.FC = () => {
  const cards = [
    {
      emoji: '🍟',
      icon: Utensils,
      title: 'Batatas',
      subtitle: 'Crocância e textura perfeita',
      description: 'Douradas, sequinhas e preparadas no ponto certo para dar aquele estalo a cada mordida.',
      tag: 'O Carro-Chefe',
      gradient: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'border-amber-500/30 hover:border-amber-400',
      badgeColor: 'text-amber-400 bg-amber-400/10',
    },
    {
      emoji: '🔥',
      icon: Flame,
      title: 'Porções caprichadas',
      subtitle: 'Feitas para matar a fome',
      description: 'Aqui a porção é farta e sem economia. Servida no capricho para você saborear sem miséria.',
      tag: 'Bem Servidas',
      gradient: 'from-red-500/20 to-amber-500/5',
      borderColor: 'border-red-500/30 hover:border-red-400',
      badgeColor: 'text-red-400 bg-red-400/10',
    },
    {
      emoji: '🤤',
      icon: Heart,
      title: 'Combinações irresistíveis',
      subtitle: 'Recheios que dão água na boca',
      description: 'Muito queijo, tempero especial e aquele mix de sabores que transforma qualquer lanche.',
      tag: 'Sabor Explosivo',
      gradient: 'from-orange-500/20 to-yellow-500/5',
      borderColor: 'border-orange-500/30 hover:border-orange-400',
      badgeColor: 'text-orange-400 bg-orange-400/10',
    },
    {
      emoji: '📲',
      icon: Smartphone,
      title: 'Pedido fácil',
      subtitle: 'Sem complicação nenhuma',
      description: 'Acesse o cardápio digital ou mande uma mensagem no WhatsApp. Em poucos instantes seu pedido entra em preparo.',
      tag: 'Rápido & Prático',
      gradient: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
      badgeColor: 'text-emerald-400 bg-emerald-400/10',
    },
  ];

  return (
    <section id="bateu-a-fome" className="py-20 sm:py-28 bg-[#111116] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fome não espera</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Bateu aquela fome? A gente resolve.{' '}
            <span className="inline-block hover:scale-110 transition-transform duration-200">
              😋
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Escolha seu pedido, chame a gente e prepare-se para uma experiência caprichada do começo ao fim.
          </p>
        </div>

        {/* 4 Cards Visuais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative rounded-2xl bg-gradient-to-b ${card.gradient} bg-[#16161d] p-6 border ${card.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Emoji and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-200 inline-block">
                      {card.emoji}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${card.badgeColor}`}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-semibold text-zinc-400 mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-sm text-zinc-300/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom link to MenuFire */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={OFFICIAL_LINKS.MENU_ORDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/link"
                  >
                    <span>Ver no cardápio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={OFFICIAL_LINKS.MENU_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/30 text-sm font-bold transition-all shadow-md active:scale-95"
          >
            <span>Ver todas as opções disponíveis no cardápio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
