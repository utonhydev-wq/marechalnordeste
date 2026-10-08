import React from 'react';
import { Flame, Utensils, Smile, Smartphone, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const WhyChooseSection: React.FC = () => {
  const differentiators = [
    {
      emoji: '🔥',
      icon: Flame,
      title: 'Capricho no pedido',
      description:
        'Cuidado em cada etapa: da escolha dos ingredientes ao preparo da sua porção, tudo feito com dedicação.',
      color: 'border-red-500/30 group-hover:border-red-400',
      badge: 'Feito com carinho',
      badgeColor: 'text-red-400 bg-red-400/10',
    },
    {
      emoji: '🍟',
      icon: Utensils,
      title: 'Porções para matar a fome',
      description:
        'Nada de porções miúdas. Aqui o prato vem bem servido para você comer bem e se sentir satisfeito de verdade.',
      color: 'border-amber-500/30 group-hover:border-amber-400',
      badge: 'Fartura real',
      badgeColor: 'text-amber-400 bg-amber-400/10',
    },
    {
      emoji: '😋',
      icon: Smile,
      title: 'Muito sabor',
      description:
        'Tempero no ponto certo, equilíbrio de recheios e aquele gostinho especial que dá vontade de repetir.',
      color: 'border-yellow-500/30 group-hover:border-yellow-400',
      badge: 'Sabor inconfundível',
      badgeColor: 'text-yellow-400 bg-yellow-400/10',
    },
    {
      emoji: '📲',
      icon: Smartphone,
      title: 'Pedido fácil e rápido',
      description:
        'Sem burocracia ou cadastros demorados: abra o cardápio digital ou mande uma mensagem direta no WhatsApp.',
      color: 'border-emerald-500/30 group-hover:border-emerald-400',
      badge: 'Praticidade total',
      badgeColor: 'text-emerald-400 bg-emerald-400/10',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#111116] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Nossos Diferenciais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Por que escolher a Marechal Nordeste?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Compromisso com o que realmente importa: comida boa, porção honesta e atendimento ágil.
          </p>
        </div>

        {/* Os 4 Diferenciais em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative rounded-2xl bg-[#16161f] p-7 border ${item.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl filter drop-shadow group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    0{index + 1}
                  </span>
                  <a
                    href={OFFICIAL_LINKS.MENU_ORDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Fazer pedido ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
