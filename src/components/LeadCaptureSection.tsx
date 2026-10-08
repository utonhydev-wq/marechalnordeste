import React, { useState } from 'react';
import { Flame, CheckCircle2, AlertCircle, Phone, User, Check, Send, Download } from 'lucide-react';
import { saveLead, formatWhatsAppMask, exportLeadsToCSV, getSavedLeads } from '../services/leadService';

export const LeadCaptureSection: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAdminExport, setShowAdminExport] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsAppMask(e.target.value);
    setWhatsapp(formatted);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Por favor, preencha o seu nome.');
      return;
    }

    if (!whatsapp.trim()) {
      setErrorMessage('Por favor, informe seu número de WhatsApp com DDD.');
      return;
    }

    if (!optIn) {
      setErrorMessage('Por favor, marque a caixinha aceitando receber novidades e promoções.');
      return;
    }

    try {
      setLoading(true);
      await saveLead({
        name,
        whatsapp,
        optIn,
      });
      setSuccess(true);
      setName('');
      setWhatsapp('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Ocorreu um erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setErrorMessage('');
  };

  return (
    <section id="promocoes" className="py-20 sm:py-28 bg-[#111116] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Box */}
        <div className="bg-gradient-to-br from-[#191823] via-[#14141c] to-[#121217] rounded-3xl border-2 border-amber-500/40 p-7 sm:p-12 shadow-2xl shadow-black">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-amber-400 text-xs font-bold mb-4">
              <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>Vantagens Exclusivas</span>
            </div>

            {/* Título Oficial Exato */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-2 flex-wrap text-balance">
              <span>Quer receber nossas promoções?</span>
              <span>👀</span>
            </h2>

            {/* Texto Oficial Exato */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
              Cadastre seu WhatsApp e fique por dentro das novidades, ofertas e promoções da Marechal Nordeste.
            </p>
          </div>

          {/* Estado de Sucesso */}
          {success ? (
            <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              {/* Mensagem Exata Solicitada */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Cadastro realizado! 🔥 Agora você poderá receber nossas novidades e promoções.
              </h3>

              <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
                Fique atento ao seu WhatsApp para cupons especiais, dias de frete grátis e lançamentos quentinhos!
              </p>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
              >
                Cadastrar outro número
              </button>
            </div>
          ) : (
            /* Formulário de Captura */
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
              
              {/* Feedback de Erro */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-sm flex items-center gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Campo Nome */}
              <div>
                <label htmlFor="lead-name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Seu Nome *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="Digite seu nome ou apelido"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-zinc-500 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Campo WhatsApp */}
              <div>
                <label htmlFor="lead-whatsapp" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Seu WhatsApp (com DDD) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    id="lead-whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={handlePhoneChange}
                    placeholder="(00) 90000-0000"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-zinc-500 text-sm transition-all outline-none font-mono"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Exemplo: (85) 99876-5432
                </p>
              </div>

              {/* Checkbox Obrigatório */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded-md border border-zinc-600 bg-zinc-900 peer-checked:bg-amber-500 peer-checked:border-amber-400 transition-colors flex items-center justify-center">
                      {optIn && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                    </div>
                  </div>
                  <span className="text-xs text-zinc-300 group-hover:text-zinc-200 leading-snug">
                    Aceito receber novidades e promoções da Marechal Nordeste.
                  </span>
                </label>
              </div>

              {/* Botão Oficial Exato */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 disabled:opacity-60 text-black font-extrabold text-base tracking-wide uppercase shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Cadastrando...</span>
                  ) : (
                    <>
                      <span>QUERO RECEBER PROMOÇÕES</span>
                      <span>🔥</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-zinc-500">
                  🔒 Seus dados estão seguros. Não enviamos spam. Apenas promoções e ofertas deliciosas.
                </p>
              </div>

            </form>
          )}

          {/* Quick link for restaurant manager to export registered leads */}
          <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
            <span>Sistema pronto para Supabase / Sheets / CRM</span>
            <button
              onClick={() => {
                const leads = getSavedLeads();
                if (leads.length === 0) {
                  alert('Ainda não há leads cadastrados neste navegador. Cadastre um número acima para testar!');
                } else {
                  exportLeadsToCSV();
                }
              }}
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-[11px]"
              title="Exportar contatos de clientes cadastrados"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Leads em CSV ({getSavedLeads().length})</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
