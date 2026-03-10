import type { SupportedLanguage } from './language';

/** Keys for translatable UI strings. */
export type TextKey =
	| 'badge'
	| 'header_title'
	| 'header_subtitle'
	| 'phone_legend'
	| 'phone_helper'
	| 'country_label'
	| 'phone_label'
	| 'phone_placeholder'
	| 'phone_hint'
	| 'error_choose_country'
	| 'error_empty_phone'
	| 'error_invalid_phone'
	| 'message_label'
	| 'message_placeholder'
	| 'message_hint'
	| 'button_label'
	| 'button_aria'
	| 'faq_title'
	| 'faq_q_safe'
	| 'faq_a_safe'
	| 'faq_q_install'
	| 'faq_a_install'
	| 'faq_q_devices'
	| 'faq_a_devices'
	| 'footer_note'
	| 'lang_label'
	| 'lang_en'
	| 'lang_es';

/** Map of every translation key to its string value for a given language. */
export type TranslationMap = Record<TextKey, string>;

/** All translations keyed by SupportedLanguage. */
export type TranslationsByLanguage = Record<SupportedLanguage, TranslationMap>;
