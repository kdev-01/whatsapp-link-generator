import type { SupportedLanguage } from '../types/language';
import type { TranslationMap, TranslationsByLanguage } from '../types/i18n';

const ENGLISH: TranslationMap = {
	badge: 'Open WhatsApp in one step',
	header_title: 'Send a WhatsApp without saving the number',
	header_subtitle:
		'Write the phone number and press the button to open WhatsApp without saving the contact.',
	phone_legend: 'Phone number',
	phone_helper: 'First choose the country, then type the phone number.',
	country_label: 'Country',
	phone_label: 'Phone number',
	phone_placeholder: 'Example: 5551234567',
	phone_hint: 'Numbers only. Do not write the country code.',
	error_choose_country: 'Please choose a country.',
	error_empty_phone: 'Please enter a phone number.',
	error_invalid_phone: 'Please enter a valid phone number.',
	message_label: 'Optional message',
	message_placeholder: 'Write a short message that will appear ready in WhatsApp.',
	message_hint:
		'You can leave this empty if you prefer to write the message directly in WhatsApp.',
	button_label: 'Open WhatsApp',
	button_aria: 'Open WhatsApp chat in a new tab',
	faq_title: 'Questions',
	faq_q_safe: 'Is this safe?',
	faq_a_safe:
		'Your message goes directly from your device to WhatsApp. We do not store the phone number or the message.',
	faq_q_install: 'Do I need to install anything?',
	faq_a_install:
		'No. You only need WhatsApp on your phone or the WhatsApp Web / Desktop app on your computer.',
	faq_q_devices: 'Does it work on phone and computer?',
	faq_a_devices:
		'Yes. On a phone it opens your WhatsApp app. On a computer it opens WhatsApp Web or the WhatsApp Desktop app if you have it installed.',
	footer_note:
		'Made to help you send quick WhatsApp messages without filling your contacts list.',
	lang_label: 'Language',
	lang_en: 'English',
	lang_es: 'Spanish',
};

const SPANISH: TranslationMap = {
	badge: 'Abre WhatsApp en un solo paso',
	header_title: 'Envía un WhatsApp sin guardar el número',
	header_subtitle:
		'Escribe el número y pulsa el botón para abrir WhatsApp sin guardar el contacto.',
	phone_legend: 'Número de teléfono',
	phone_helper: 'Primero elige el país y luego escribe el número.',
	country_label: 'País',
	phone_label: 'Número de teléfono',
	phone_placeholder: 'Ejemplo: 5551234567',
	phone_hint: 'Solo números. No escribas el código del país.',
	error_choose_country: 'Por favor, elige un país.',
	error_empty_phone: 'Por favor, escribe un número de teléfono.',
	error_invalid_phone: 'Por favor, escribe un número de teléfono válido.',
	message_label: 'Mensaje opcional',
	message_placeholder: 'Escribe un mensaje corto que se abrirá listo en WhatsApp.',
	message_hint:
		'Si quieres, puedes dejarlo vacío y escribir el mensaje directamente en WhatsApp.',
	button_label: 'Abrir WhatsApp',
	button_aria: 'Abrir un chat de WhatsApp en una nueva pestaña',
	faq_title: 'Preguntas frecuentes',
	faq_q_safe: '¿Es seguro?',
	faq_a_safe:
		'Tu mensaje va directamente desde tu dispositivo a WhatsApp. No guardamos el número ni el mensaje.',
	faq_q_install: '¿Tengo que instalar algo?',
	faq_a_install:
		'No. Solo necesitas tener WhatsApp en tu teléfono o usar WhatsApp Web / la aplicación de Escritorio en tu computadora.',
	faq_q_devices: '¿Funciona en celular y en computadora?',
	faq_a_devices:
		'Sí. En el celular se abre tu app de WhatsApp. En la computadora se abre WhatsApp Web o la aplicación de Escritorio si la tienes instalada.',
	footer_note:
		'Creado para ayudarte a enviar mensajes rápidos por WhatsApp sin llenar tu lista de contactos.',
	lang_label: 'Idioma',
	lang_en: 'Inglés',
	lang_es: 'Español',
};

export const TRANSLATIONS: TranslationsByLanguage = {
	en: ENGLISH,
	es: SPANISH,
};

/** Returns the translation map for the given language. */
export function getTranslations(lang: SupportedLanguage): TranslationMap {
	return TRANSLATIONS[lang];
}
