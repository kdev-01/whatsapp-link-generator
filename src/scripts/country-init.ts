import { getStoredCountry, setStoredCountry } from '../lib/storage';
import { getDialCodeForCountry, DEFAULT_COUNTRY_CODE } from '../data/countries';
import type { FormElements } from './form-validation';
import { validateForm } from './form-validation';
import type { SupportedLanguage } from '../types/language';

const GEO_API_URL = 'https://ipapi.co/json/';

function setCountryAndValidate(
	countryCode: string,
	countrySelect: HTMLSelectElement,
	lang: SupportedLanguage,
	elements: FormElements,
): void {
	if (!getDialCodeForCountry(countryCode)) return;
	countrySelect.value = countryCode;
	setStoredCountry(countryCode);
	validateForm(lang, elements);
}

/**
 * Restores country from storage or fetches from geo API, then runs validation.
 */
export function initCountrySelect(
	countrySelect: HTMLSelectElement,
	lang: SupportedLanguage,
	elements: FormElements,
): void {
	const stored = getStoredCountry();
	if (stored && getDialCodeForCountry(stored)) {
		countrySelect.value = stored;
		validateForm(lang, elements);
		return;
	}

	fetch(GEO_API_URL)
		.then((res) => {
			if (!res.ok) throw new Error('Network error');
			return res.json() as Promise<{ country_code?: string }>;
		})
		.then((data) => {
			if (data?.country_code && typeof data.country_code === 'string') {
				const code = data.country_code.toUpperCase();
				setCountryAndValidate(code, countrySelect, lang, elements);
			}
		})
		.catch(() => {
			if (!countrySelect.value && getDialCodeForCountry(DEFAULT_COUNTRY_CODE)) {
				countrySelect.value = DEFAULT_COUNTRY_CODE;
				setStoredCountry(DEFAULT_COUNTRY_CODE);
				validateForm(lang, elements);
			}
		});
}
