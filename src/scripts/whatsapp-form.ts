import type { SupportedLanguage } from '../types/language.js';
import { isSupportedLanguage } from '../types/language.js';
import { getCurrentLanguage } from './detect-language.js';
import { initLanguageSwitcher } from './language-switcher.js';
import { initCountrySelect } from './country-init.js';
import {
	validateForm,
	getFullPhoneDigits,
	type FormElements,
} from './form-validation.js';
import { setStoredCountry } from '../lib/storage.js';
import { normalisePhone } from '../lib/phone.js';
import { buildWhatsAppUrl } from '../lib/whatsapp-url.js';

const FORM_ID = 'whatsapp-form';
const COUNTRY_ID = 'country';
const PHONE_ID = 'phone';
const MESSAGE_ID = 'message';
const BUTTON_ID = 'open-whatsapp';
const PHONE_ERROR_ID = 'phone-error';

function getFormElements(): FormElements | null {
	const countrySelect = document.getElementById(COUNTRY_ID) as HTMLSelectElement | null;
	const phoneInput = document.getElementById(PHONE_ID) as HTMLInputElement | null;
	const submitButton = document.getElementById(BUTTON_ID) as HTMLButtonElement | null;
	const phoneError = document.getElementById(PHONE_ERROR_ID) as HTMLElement | null;
	if (!countrySelect || !phoneInput || !submitButton || !phoneError) return null;
	return { countrySelect, phoneInput, submitButton, phoneError };
}

function wirePhoneInput(elements: FormElements, getLang: () => SupportedLanguage): void {
	const { phoneInput } = elements;
	phoneInput.addEventListener('input', () => {
		const raw = phoneInput.value;
		const cleaned = normalisePhone(raw);
		if (raw !== cleaned) {
			const pos = phoneInput.selectionStart;
			phoneInput.value = cleaned;
			if (pos != null) {
				const next = Math.min(cleaned.length, pos);
				phoneInput.setSelectionRange(next, next);
			}
		}
		validateForm(getLang(), elements);
	});
}

function wireCountryChange(elements: FormElements, getLang: () => SupportedLanguage): void {
	elements.countrySelect.addEventListener('change', () => {
		const code = elements.countrySelect.value;
		if (code) setStoredCountry(code);
		validateForm(getLang(), elements);
	});
}

function wireSubmitButton(
	elements: FormElements,
	messageInput: HTMLTextAreaElement,
	getLang: () => SupportedLanguage,
): void {
	elements.submitButton.addEventListener('click', () => {
		if (!validateForm(getLang(), elements)) {
			elements.phoneInput.focus();
			return;
		}
		const fullNumber = getFullPhoneDigits(elements);
		const url = buildWhatsAppUrl(fullNumber, messageInput.value);
		window.open(url, '_blank', 'noopener,noreferrer');
	});
}

function syncLangFromDocument(getLang: () => SupportedLanguage, setLang: (l: SupportedLanguage) => void): void {
	const observer = new MutationObserver(() => {
		const langAttr = document.documentElement.getAttribute('lang');
		if (langAttr && isSupportedLanguage(langAttr)) setLang(langAttr);
	});
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}

/** Initialises the WhatsApp form: validation, country init, and open-in-new-tab. */
export function initWhatsAppForm(initialLang: SupportedLanguage): void {
	const form = document.getElementById(FORM_ID) as HTMLFormElement | null;
	const messageInput = document.getElementById(MESSAGE_ID) as HTMLTextAreaElement | null;
	const elements = getFormElements();
	if (!form || !messageInput || !elements) return;

	let currentLang = initialLang;
	const getLang = () => currentLang;
	const setLang = (l: SupportedLanguage) => {
		currentLang = l;
	};

	syncLangFromDocument(getLang, setLang);
	wirePhoneInput(elements, getLang);
	wireCountryChange(elements, getLang);
	wireSubmitButton(elements, messageInput, getLang);

	initCountrySelect(elements.countrySelect, initialLang, elements);
	validateForm(initialLang, elements);
}

function main(): void {
	const lang = getCurrentLanguage();
	initLanguageSwitcher(lang);
	initWhatsAppForm(lang);
}

document.addEventListener('DOMContentLoaded', main);
