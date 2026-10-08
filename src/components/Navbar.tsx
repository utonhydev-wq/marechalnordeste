import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants/links';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Destaques', href: '#bateu-a-fome' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Promoções', href: '#promocoes' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d12]/95 backdrop-blur-md border-b border-amber-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark with official logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-500/80 shadow-md group-hover:scale-105 transition-transform duration-200">
              <img
                src={OFFICIAL_LINKS.LOGO_URL}
                alt="Logo Marechal Nordeste"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl sm:text-3xl tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors leading-none">
                {OFFICIAL_LINKS.BRAND_NAME}
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-400 font-medium tracking-wider uppercase">
                Batata &amp; Lanches
              </span>
            </div>
          </a>

          {/* Zone 2: Clean navigation links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={OFFICIAL_LINKS.MENU_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 shadow-sm"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Ver Cardápio</span>
            </a>
            <a
              href={OFFICIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={OFFICIAL_LINKS.MENU_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-1"
            >
              <UtensilsCrossed className="w-3 h-3" />
              <span>Cardápio</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111116] border-b border-zinc-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
              <a
                href={OFFICIAL_LINKS.MENU_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-amber-400 bg-amber-500/15 border border-amber-500/40 rounded-xl flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                🍟 Ver Cardápio Completo
              </a>
              <a
                href={OFFICIAL_LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                💬 Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
