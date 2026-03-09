/** Strips everything except digits from a phone string. */
export function normalisePhone(raw: string): string {
	return raw.replace(/\D/g, '');
}

const MIN_PHONE_LENGTH = 8;
const MAX_PHONE_LENGTH = 15;

/** Returns true if the digit-only phone length is valid (E.164 range). */
export function isValidPhoneLength(digitsOnly: string): boolean {
	const len = digitsOnly.length;
	return len >= MIN_PHONE_LENGTH && len <= MAX_PHONE_LENGTH;
}
