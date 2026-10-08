import React from 'react';
import { Instagram, MessageCircle, UtensilsCrossed, Star } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090d] text-zinc-400 border-t border-zinc-800/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-800/80">
          
          {/* Logo e Nome da Empresa */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/80 shadow-md shrink-0">
              <img
                src={OFFICIAL_LINKS.LOGO_URL}
                alt="Logo Marechal Nordeste"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-bebas text-3xl text-amber-400 tracking-wide leading-none">
                {OFFICIAL_LINKS.BRAND_NAME}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Batatas recheadas, crocantes e lanches saborosos
              </p>
            </div>
          </div>

          {/* Links Oficiais Solicitados */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
            <a
              href={OFFICIAL_LINKS.MENU_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>Cardápio</span>
            </a>

            <a
              href={OFFICIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href={OFFICIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href={OFFICIAL_LINKS.GOOGLE_REVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Avaliar no Google</span>
            </a>
          </nav>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>© 2026 Marechal Nordeste. Todos os direitos reservados.</p>
          <p className="text-zinc-400">
            Sabor, recheio e qualidade em cada porção.
          </p>
        </div>

      </div>
    </footer>
  );
};
