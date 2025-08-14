export function formatDateFriendly(iso: string) { const d = new Date(iso); return d.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }); }
