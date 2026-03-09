/** Country option for the phone form (code, dial code, display label). */
export interface CountryOption {
	code: string;
	dialCode: string;
	label: string;
}

export const COUNTRIES: CountryOption[] = [
	{ code: 'US', dialCode: '+1', label: '🇺🇸 United States (+1)' },
	{ code: 'CA', dialCode: '+1', label: '🇨🇦 Canada (+1)' },
	{ code: 'MX', dialCode: '+52', label: '🇲🇽 Mexico (+52)' },
	{ code: 'BR', dialCode: '+55', label: '🇧🇷 Brazil (+55)' },
	{ code: 'AR', dialCode: '+54', label: '🇦🇷 Argentina (+54)' },
	{ code: 'CO', dialCode: '+57', label: '🇨🇴 Colombia (+57)' },
	{ code: 'CL', dialCode: '+56', label: '🇨🇱 Chile (+56)' },
	{ code: 'VE', dialCode: '+58', label: '🇻🇪 Venezuela (+58)' },
	{ code: 'PE', dialCode: '+51', label: '🇵🇪 Peru (+51)' },
	{ code: 'EC', dialCode: '+593', label: '🇪🇨 Ecuador (+593)' },
	{ code: 'CU', dialCode: '+53', label: '🇨🇺 Cuba (+53)' },
	{ code: 'BO', dialCode: '+591', label: '🇧🇴 Bolivia (+591)' },
	{ code: 'CR', dialCode: '+506', label: '🇨🇷 Costa Rica (+506)' },
	{ code: 'PA', dialCode: '+507', label: '🇵🇦 Panama (+507)' },
	{ code: 'UY', dialCode: '+598', label: '🇺🇾 Uruguay (+598)' },
	{ code: 'ES', dialCode: '+34', label: '🇪🇸 Spain (+34)' },
	{ code: 'DE', dialCode: '+49', label: '🇩🇪 Germany (+49)' },
	{ code: 'FR', dialCode: '+33', label: '🇫🇷 France (+33)' },
	{ code: 'IT', dialCode: '+39', label: '🇮🇹 Italy (+39)' },
	{ code: 'GB', dialCode: '+44', label: '🇬🇧 United Kingdom (+44)' },
	{ code: 'RU', dialCode: '+7', label: '🇷🇺 Russia (+7)' },
	{ code: 'UA', dialCode: '+380', label: '🇺🇦 Ukraine (+380)' },
	{ code: 'PL', dialCode: '+48', label: '🇵🇱 Poland (+48)' },
	{ code: 'RO', dialCode: '+40', label: '🇷🇴 Romania (+40)' },
	{ code: 'NL', dialCode: '+31', label: '🇳🇱 Netherlands (+31)' },
	{ code: 'BE', dialCode: '+32', label: '🇧🇪 Belgium (+32)' },
	{ code: 'GR', dialCode: '+30', label: '🇬🇷 Greece (+30)' },
	{ code: 'PT', dialCode: '+351', label: '🇵🇹 Portugal (+351)' },
	{ code: 'SE', dialCode: '+46', label: '🇸🇪 Sweden (+46)' },
	{ code: 'NO', dialCode: '+47', label: '🇳🇴 Norway (+47)' },
	{ code: 'CN', dialCode: '+86', label: '🇨🇳 China (+86)' },
	{ code: 'IN', dialCode: '+91', label: '🇮🇳 India (+91)' },
	{ code: 'JP', dialCode: '+81', label: '🇯🇵 Japan (+81)' },
	{ code: 'KR', dialCode: '+82', label: '🇰🇷 South Korea (+82)' },
	{ code: 'ID', dialCode: '+62', label: '🇮🇩 Indonesia (+62)' },
	{ code: 'TR', dialCode: '+90', label: '🇹🇷 Turkey (+90)' },
	{ code: 'PH', dialCode: '+63', label: '🇵🇭 Philippines (+63)' },
	{ code: 'TH', dialCode: '+66', label: '🇹🇭 Thailand (+66)' },
	{ code: 'VN', dialCode: '+84', label: '🇻🇳 Vietnam (+84)' },
	{ code: 'IL', dialCode: '+972', label: '🇮🇱 Israel (+972)' },
	{ code: 'MY', dialCode: '+60', label: '🇲🇾 Malaysia (+60)' },
	{ code: 'SG', dialCode: '+65', label: '🇸🇬 Singapore (+65)' },
	{ code: 'PK', dialCode: '+92', label: '🇵🇰 Pakistan (+92)' },
	{ code: 'BD', dialCode: '+880', label: '🇧🇩 Bangladesh (+880)' },
	{ code: 'SA', dialCode: '+966', label: '🇸🇦 Saudi Arabia (+966)' },
	{ code: 'EG', dialCode: '+20', label: '🇪🇬 Egypt (+20)' },
	{ code: 'ZA', dialCode: '+27', label: '🇿🇦 South Africa (+27)' },
	{ code: 'NG', dialCode: '+234', label: '🇳🇬 Nigeria (+234)' },
	{ code: 'KE', dialCode: '+254', label: '🇰🇪 Kenya (+254)' },
	{ code: 'MA', dialCode: '+212', label: '🇲🇦 Morocco (+212)' },
	{ code: 'DZ', dialCode: '+213', label: '🇩🇿 Algeria (+213)' },
	{ code: 'UG', dialCode: '+256', label: '🇺🇬 Uganda (+256)' },
	{ code: 'GH', dialCode: '+233', label: '🇬🇭 Ghana (+233)' },
	{ code: 'CM', dialCode: '+237', label: '🇨🇲 Cameroon (+237)' },
	{ code: 'CI', dialCode: '+225', label: '🇨🇮 Ivory Coast (+225)' },
	{ code: 'SN', dialCode: '+221', label: '🇸🇳 Senegal (+221)' },
	{ code: 'TZ', dialCode: '+255', label: '🇹🇿 Tanzania (+255)' },
	{ code: 'SD', dialCode: '+249', label: '🇸🇩 Sudan (+249)' },
	{ code: 'LY', dialCode: '+218', label: '🇱🇾 Libya (+218)' },
	{ code: 'TN', dialCode: '+216', label: '🇹🇳 Tunisia (+216)' },
	{ code: 'AU', dialCode: '+61', label: '🇦🇺 Australia (+61)' },
	{ code: 'NZ', dialCode: '+64', label: '🇳🇿 New Zealand (+64)' },
	{ code: 'FJ', dialCode: '+679', label: '🇫🇯 Fiji (+679)' },
	{ code: 'PG', dialCode: '+675', label: '🇵🇬 Papua New Guinea (+675)' },
	{ code: 'TO', dialCode: '+676', label: '🇹🇴 Tonga (+676)' },
	{ code: 'IR', dialCode: '+98', label: '🇮🇷 Iran (+98)' },
	{ code: 'IQ', dialCode: '+964', label: '🇮🇶 Iraq (+964)' },
	{ code: 'JO', dialCode: '+962', label: '🇯🇴 Jordan (+962)' },
	{ code: 'LB', dialCode: '+961', label: '🇱🇧 Lebanon (+961)' },
	{ code: 'KW', dialCode: '+965', label: '🇰🇼 Kuwait (+965)' },
	{ code: 'AE', dialCode: '+971', label: '🇦🇪 United Arab Emirates (+971)' },
	{ code: 'OM', dialCode: '+968', label: '🇴🇲 Oman (+968)' },
	{ code: 'QA', dialCode: '+974', label: '🇶🇦 Qatar (+974)' },
	{ code: 'BH', dialCode: '+973', label: '🇧🇭 Bahrain (+973)' },
	{ code: 'YE', dialCode: '+967', label: '🇾🇪 Yemen (+967)' },
];

/** Default country code when geo or storage fails. */
export const DEFAULT_COUNTRY_CODE = 'US';

const DIAL_BY_CODE = new Map(COUNTRIES.map((c) => [c.code, c.dialCode]));

/** Returns the dial code for a country code, or empty string if not found. */
export function getDialCodeForCountry(countryCode: string): string {
	return DIAL_BY_CODE.get(countryCode) ?? '';
}
