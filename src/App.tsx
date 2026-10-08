/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HungrySection } from './components/HungrySection';
import { MenuSection } from './components/MenuSection';
import { VisualHighlightSection } from './components/VisualHighlightSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d11] text-zinc-100 flex flex-col font-sans-main selection:bg-amber-500 selection:text-black">
      {/* Barra de Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 1. Hero / Primeira Dobra */}
        <HeroSection />

        {/* 2. Seção "Bateu a Fome?" */}
        <HungrySection />

        {/* 3. Seção Cardápio */}
        <MenuSection />

        {/* 4. Seção de Destaque Visual */}
        <VisualHighlightSection />

        {/* 5. Seção "Por que escolher a Marechal Nordeste?" */}
        <WhyChooseSection />

        {/* 6. Avaliações (Prova Social) */}
        <ReviewsSection />

        {/* 7. Instagram */}
        <InstagramSection />

        {/* 8. CTA Final */}
        <FinalCTASection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
