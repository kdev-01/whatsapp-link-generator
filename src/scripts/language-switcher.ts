import type { SupportedLanguage } from '../types/language.js';
import { persistLanguage } from './detect-language.js';
import { applyTranslations } from './apply-translations.js';

/** Wires language buttons and applies initial translations. */
export function initLanguageSwitcher(currentLang: SupportedLanguage): void {
	function setLanguage(lang: SupportedLanguage) {
		persistLanguage(lang);
		applyTranslations(lang);
	}

	const langEn = document.querySelector<HTMLButtonElement>('[data-lang="en"]');
	const langEs = document.querySelector<HTMLButtonElement>('[data-lang="es"]');
	if (langEn) langEn.addEventListener('click', () => setLanguage('en'));
	if (langEs) langEs.addEventListener('click', () => setLanguage('es'));

	applyTranslations(currentLang);
}
