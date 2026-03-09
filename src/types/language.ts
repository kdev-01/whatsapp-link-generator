/** Supported UI languages. */
export type SupportedLanguage = 'en' | 'es';

/** Check if a string is a valid SupportedLanguage. */
export function isSupportedLanguage(value: string): value is SupportedLanguage {
	return value === 'en' || value === 'es';
}
