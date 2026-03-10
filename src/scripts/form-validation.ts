import type { SupportedLanguage } from '../types/language';
import { getTranslations } from '../i18n/translations';
import { getDialCodeForCountry } from '../data/countries';
import { normalisePhone, isValidPhoneLength } from '../lib/phone';

export interface FormElements {
	countrySelect: HTMLSelectElement;
	phoneInput: HTMLInputElement;
	submitButton: HTMLButtonElement;
	phoneError: HTMLElement;
}

/**
 * Validates country + phone, updates error message and button state.
 * Returns true if valid.
 */
export function validateForm(
	lang: SupportedLanguage,
	elements: FormElements,
): boolean {
	const { countrySelect, phoneInput, submitButton, phoneError } = elements;
	const messages = getTranslations(lang);
	const countryCode = countrySelect.value;
	const dialCode = getDialCodeForCountry(countryCode);
	const digits = normalisePhone(phoneInput.value);

	if (!countryCode || !dialCode) {
		phoneError.textContent = messages.error_choose_country;
		submitButton.disabled = true;
		return false;
	}
	if (!digits) {
		phoneError.textContent = messages.error_empty_phone;
		submitButton.disabled = true;
		return false;
	}
	const fullNumber = (dialCode + digits).replace(/\D/g, '');
	if (!isValidPhoneLength(fullNumber)) {
		phoneError.textContent = messages.error_invalid_phone;
		submitButton.disabled = true;
		return false;
	}

	phoneError.textContent = '';
	submitButton.disabled = false;
	return true;
}

/** Returns E.164-style digits (dial + national) for the current form values. */
export function getFullPhoneDigits(elements: FormElements): string {
	const { countrySelect, phoneInput } = elements;
	const dialCode = getDialCodeForCountry(countrySelect.value);
	const digits = normalisePhone(phoneInput.value);
	return (dialCode + digits).replace(/\D/g, '');
}
