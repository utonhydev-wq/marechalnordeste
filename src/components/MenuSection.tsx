import React from 'react';
import { UtensilsCrossed, MessageCircle, ExternalLink, Flame, Check, Sparkles } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const MenuSection: React.FC = () => {
  const highlights = [
    {
      title: 'Batatas Recheadas Especiais',
      desc: 'Generosas porções com queijo derretido, bacon crocante e complementos selecionados.',
      badge: 'Mais Pedidas',
    },
    {
      title: 'Batatas Fritas Crocantes & Turbinadas',
      desc: 'Crocância dourada com coberturas irresistíveis de cheddar, molhos artesanais e adicionais.',
      badge: 'Crocância Máxima',
    },
    {
      title: 'Porções Fartas & Petiscos',
      desc: 'Ideais para dividir com os amigos ou matar aquela fome sem miséria.',
      badge: 'Para Fomes Grandes',
    },
    {
      title: 'Combos & Bebidas Geladas',
      desc: 'Combine sua batata favorita com refrigerantes e bebidas trincando de geladas.',
      badge: 'Combo Perfeito',
    },
  ];

  return (
    <section id="cardapio" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Cardápio Digital Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-2 flex-wrap">
            <span>🍟</span>
            <span>Nosso Cardápio</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Escolha seus favoritos e faça seu pedido de forma rápida e fácil.
          </p>
        </div>

        {/* Informative Showcase Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#181822] to-[#121217] rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl shadow-black/80 mb-12">
          
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Cardápio 100% Atualizado
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
              Opções completas, tamanhos e adicionais no MenuFire
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Para garantir que você sempre veja os preços oficiais, itens do dia e promoções ativas em tempo real, acesse o cardápio oficial abaixo:
            </p>
          </div>

          {/* Grid de Destaques das Categorias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Os Dois Botões de Conversão do Cardápio */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-zinc-800/80">
            {/* Botão Principal: VER CARDÁPIO COMPLETO */}
            <a
              href={OFFICIAL_LINKS.MENU_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-base sm:text-lg shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-center group"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>VER CARDÁPIO COMPLETO</span>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Segunda Opção: PEDIR AGORA PELO WHATSAPP */}
            <a
              href={OFFICIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border-2 border-emerald-500/70 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-extrabold text-base sm:text-lg shadow-lg active:scale-95 transition-all text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>PEDIR AGORA PELO WHATSAPP</span>
            </a>
          </div>

          <p className="text-center text-xs text-zinc-500 mt-5">
            🔒 Link direto e seguro para o sistema oficial de pedidos MenuFire &amp; WhatsApp.
          </p>

        </div>

      </div>
    </section>
  );
};
