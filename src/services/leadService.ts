/**
 * Serviço de captação e gerenciamento de leads para Marechal Nordeste
 * Preparado para conexões futuras:
 * - Supabase (via VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY)
 * - Firebase
 * - Webhooks (Google Sheets / Zapier / Make / n8n via VITE_LEADS_WEBHOOK_URL)
 * - CRM / WhatsApp Marketing
 */

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  rawPhone: string;
  optIn: boolean;
  createdAt: string;
}

const STORAGE_KEY = 'marechal_leads_v1';

/**
 * Remove caracteres não numéricos
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Formata telefone brasileiro no padrão: (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX
 */
export function formatWhatsAppMask(value: string): string {
  const digits = sanitizePhone(value).slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Valida se é um telefone brasileiro válido (10 ou 11 dígitos, DDD entre 11 e 99)
 */
export function isValidBrazilianPhone(phone: string): boolean {
  const digits = sanitizePhone(phone);
  if (digits.length !== 10 && digits.length !== 11) return false;
  
  const ddd = parseInt(digits.slice(0, 2), 10);
  if (isNaN(ddd) || ddd < 11 || ddd > 99) return false;

  // Celulares no Brasil com 11 dígitos começam com o dígito 9
  if (digits.length === 11 && digits[2] !== '9') return false;

  return true;
}

/**
 * Salva um novo lead de forma segura com fallback garantido
 */
export async function saveLead(data: { name: string; whatsapp: string; optIn: boolean }): Promise<Lead> {
  const trimmedName = data.name.trim();
  const rawPhone = sanitizePhone(data.whatsapp);

  if (!trimmedName || trimmedName.length < 2) {
    throw new Error('Por favor, informe seu nome completo.');
  }

  if (!isValidBrazilianPhone(data.whatsapp)) {
    throw new Error('Por favor, insira um número de WhatsApp válido com DDD (Ex: 85 99999-9999).');
  }

  if (!data.optIn) {
    throw new Error('É necessário aceitar os termos para receber promoções.');
  }

  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    name: trimmedName,
    whatsapp: formatWhatsAppMask(data.whatsapp),
    rawPhone,
    optIn: data.optIn,
    createdAt: new Date().toISOString(),
  };

  // 1. Armazenamento seguro no LocalStorage (sempre garantido no cliente)
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existing: Lead[] = existingRaw ? JSON.parse(existingRaw) : [];
    // Evita duplicação por telefone
    const filtered = existing.filter((item) => item.rawPhone !== rawPhone);
    filtered.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {
    console.warn('Não foi possível salvar no localStorage:', err);
  }

  // 2. Disparo opcional para backend local ou webhook externo configurado (Google Sheets / Supabase / CRM)
  try {
    const webhookUrl = (import.meta as any).env?.VITE_LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead),
      });
    } else {
      // Tenta rota interna da API se disponível (ignora erro se estático na Vercel)
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead),
      }).catch(() => {
        // Silencioso em caso de hospedagem 100% estática
      });
    }
  } catch {
    // Lead já está seguro no localStorage do cliente
  }

  return newLead;
}

/**
 * Retorna todos os leads salvos
 */
export function getSavedLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Exporta os contatos para arquivo CSV para o lojista usar em campanhas de WhatsApp
 */
export function exportLeadsToCSV(): void {
  const leads = getSavedLeads();
  if (leads.length === 0) {
    alert('Nenhum contato cadastrado ainda.');
    return;
  }

  const headers = ['ID', 'Nome', 'WhatsApp', 'Telefone Limpo', 'Data de Cadastro'];
  const rows = leads.map((lead) => [
    lead.id,
    `"${lead.name.replace(/"/g, '""')}"`,
    lead.whatsapp,
    lead.rawPhone,
    new Date(lead.createdAt).toLocaleString('pt-BR'),
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `leads_marechal_nordeste_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
