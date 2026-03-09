import type { SupportedLanguage } from '../types/language.js';
import { isSupportedLanguage } from '../types/language.js';
import { getStoredLanguage, setStoredLanguage } from '../lib/storage.js';

/** Detects preferred language from browser (navigator.languages / navigator.language). */
export function detectBrowserLanguage(): SupportedLanguage {
	if (typeof navigator === 'undefined') return 'en';
	const candidates: string[] = [];
	if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
	if (typeof navigator.language === 'string') candidates.push(navigator.language);
	const lowered = candidates.map((c) => c.toLowerCase());
	if (lowered.some((c) => c.startsWith('es'))) return 'es';
	if (lowered.some((c) => c.startsWith('en'))) return 'en';
	return 'en';
}

/** Returns current UI language: stored preference or browser detection. */
export function getCurrentLanguage(): SupportedLanguage {
	const stored = getStoredLanguage();
	if (stored && isSupportedLanguage(stored)) return stored;
	return detectBrowserLanguage();
}

/** Saves the selected language to localStorage. */
export function persistLanguage(lang: SupportedLanguage): void {
	setStoredLanguage(lang);
}
