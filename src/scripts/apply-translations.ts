import type { SupportedLanguage } from '../types/language';
import type { TextKey } from '../types/i18n';
import { getTranslations } from '../i18n/translations';

const PLACEHOLDER_KEYS: ReadonlySet<TextKey> = new Set(['phone_placeholder', 'message_placeholder']);

/** Applies translations to all [data-i18n-key] elements and updates lang attribute / aria. */
export function applyTranslations(lang: SupportedLanguage): void {
	const map = getTranslations(lang);
	document.documentElement.setAttribute('lang', lang);

	document.querySelectorAll<HTMLElement>('[data-i18n-key]').forEach((el) => {
		const key = el.getAttribute('data-i18n-key') as TextKey | null;
		if (!key || !(key in map)) return;
		const text = map[key as keyof typeof map];

		if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
			if (PLACEHOLDER_KEYS.has(key)) {
				el.placeholder = text;
			} else {
				el.value = text;
			}
		} else {
			el.textContent = text;
		}
	});

	const openButton = document.getElementById('open-whatsapp');
	if (openButton) openButton.setAttribute('aria-label', map.button_aria);

	const langEn = document.querySelector<HTMLButtonElement>('[data-lang="en"]');
	const langEs = document.querySelector<HTMLButtonElement>('[data-lang="es"]');
	if (langEn) langEn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
	if (langEs) langEs.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
}
