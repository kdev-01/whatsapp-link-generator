const COUNTRY_STORAGE_KEY = 'whatsapp-helper-country';
const LANGUAGE_STORAGE_KEY = 'whatsapp-helper-language';

export const STORAGE_KEYS = {
	country: COUNTRY_STORAGE_KEY,
	language: LANGUAGE_STORAGE_KEY,
} as const;

export function getStoredCountry(): string | null {
	try {
		return window.localStorage.getItem(COUNTRY_STORAGE_KEY);
	} catch {
		return null;
	}
}

export function setStoredCountry(countryCode: string): void {
	try {
		window.localStorage.setItem(COUNTRY_STORAGE_KEY, countryCode);
	} catch {
		// ignore
	}
}

export function getStoredLanguage(): string | null {
	try {
		return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
	} catch {
		return null;
	}
}

export function setStoredLanguage(language: string): void {
	try {
		window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
	} catch {
		// ignore
	}
}
