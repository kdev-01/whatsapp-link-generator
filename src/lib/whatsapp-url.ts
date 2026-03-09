/**
 * Builds the wa.me URL for a given E.164-style number and optional prefill message.
 * @param fullNumber - Digits only (country code + national number).
 * @param message - Optional prefill text (will be URL-encoded).
 */
export function buildWhatsAppUrl(fullNumber: string, message?: string): string {
	const base = `https://wa.me/${encodeURIComponent(fullNumber)}`;
	if (message && message.trim()) {
		return `${base}?text=${encodeURIComponent(message.trim())}`;
	}
	return base;
}
