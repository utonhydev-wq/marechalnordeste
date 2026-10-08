import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const InstagramSection: React.FC = () => {
  // Post previews simulating real appetizing food posts
  const feedItems = [
    {
      id: 1,
      title: 'Aquela porção que transborda sabor e cheddar cremoso',
      emoji: '🍟🧀',
      likes: '342',
      comments: '28',
      tag: '#MarechalNordeste',
      bgGradient: 'from-amber-600/30 to-red-900/40',
    },
    {
      id: 2,
      title: 'Bacon frito na hora e batata dourada crocante',
      emoji: '🥓🔥',
      likes: '419',
      comments: '36',
      tag: '#BatataCrocante',
      bgGradient: 'from-orange-600/30 to-amber-900/40',
    },
    {
      id: 3,
      title: 'Quentinha saindo para entrega agora mesmo!',
      emoji: '🛵💨',
      likes: '285',
      comments: '19',
      tag: '#DeliveryRapido',
      bgGradient: 'from-red-600/30 to-zinc-900',
    },
    {
      id: 4,
      title: 'Sextou com a melhor batata recheada da região',
      emoji: '🤤🥔',
      likes: '512',
      comments: '44',
      tag: '#VemPraMarechal',
      bgGradient: 'from-yellow-600/30 to-amber-950',
    },
  ];

  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>@marechalnordestebatata</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-2 flex-wrap text-balance">
            <span>📸 Siga a Marechal Nordeste</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Acompanhe nossas novidades, promoções e aquele conteúdo que dá fome.
          </p>

          <div className="mt-6">
            <a
              href={OFFICIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-pink-600/20 active:scale-95 transition-all group"
            >
              <Instagram className="w-4 h-4" />
              <span>SEGUIR NO INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grade Visual para Exibir Publicações do Instagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={OFFICIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-900/20 block aspect-square flex flex-col justify-between p-5"
            >
              {/* Card visual background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-60 group-hover:opacity-80 transition-opacity`} />
              
              {/* Top Row: Instagram handle & Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  {item.tag}
                </span>
                <Instagram className="w-4 h-4 text-white/80 group-hover:text-pink-400 transition-colors" />
              </div>

              {/* Center Emoji / Food teaser */}
              <div className="relative z-10 text-center py-4">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                  {item.emoji}
                </div>
                <p className="text-xs font-semibold text-white/95 mt-3 line-clamp-2 px-2 text-balance drop-shadow">
                  {item.title}
                </p>
              </div>

              {/* Bottom Row: Likes & Comments hover overlay */}
              <div className="relative z-10 flex items-center justify-between text-xs text-white/80 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <span className="font-mono text-[11px]">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px]">{item.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Marque <strong className="text-zinc-300">@marechalnordestebatata</strong> no seu story e apareça nos nossos destaques! 🥔✨
        </p>

      </div>
    </section>
  );
};
