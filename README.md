# WhatsApp Link Generator 💬

A small web app that lets you open a WhatsApp chat with any phone number without adding it to your contacts. Enter the number, choose a country, and open the conversation in one click—on phone or desktop.

## Description

WhatsApp Link Generator builds a `wa.me` link from the country and number you enter. You can optionally add a pre-filled message. No account or backend: everything runs in the browser. Your data is not stored or sent to any server.

## Demo

**[Live demo](#)** — https://openchatnow.com

## Tech Stack

- **[Astro](https://astro.build)** — Static site generation and composition
- **TypeScript** — Typed logic, validation, and i18n
- **Vanilla CSS** — Modular styles (tokens, layout, components), no framework
- **Client-side only** — No server runtime; build outputs static HTML, CSS, and JS

## Project Structure

```
whatsapp-link-generator/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Astro components (AppCard, WhatsAppForm, FAQ)
│   ├── data/            # Static data (countries, meta) and constants
│   ├── i18n/            # Translation strings (EN, ES)
│   ├── lib/             # Pure utilities (phone normalization, URL builder, storage)
│   ├── pages/           # Astro pages (single entry: index.astro)
│   ├── scripts/         # Client-side TS (form logic, validation, language switcher)
│   ├── styles/          # CSS modules (tokens, layout, form, card, responsive)
│   └── types/           # TypeScript types (language, i18n keys)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Installation

Clone the repo and install dependencies (Node 18+ recommended):

```bash
git clone https://github.com/your-username/whatsapp-link-generator.git
cd whatsapp-link-generator
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

Build for production:

```bash
pnpm build
pnpm preview   # optional: preview the built site locally
```

## Usage

1. Select your **country** from the dropdown.
2. Enter the **phone number** (without country code); only digits are accepted.
3. Optionally type a **message** that will appear in the chat.
4. Click **Open WhatsApp**. A new tab opens with the `wa.me` link; on mobile it opens the WhatsApp app if installed.

The app may suggest a country based on your IP (via a third-party API) and remembers your last country and language in `localStorage`.

## Ezoic Ads Setup (Astro + Vercel)

- Header scripts are injected at the top of `src/pages/index.astro` (CMP + `sa.min.js` + analytics).
- `ads.txt` is served via redirect in `vercel.json` to Ezoic Ads.txt Manager.
- Ad placeholders are configured from `PUBLIC_EZOIC_PLACEHOLDER_IDS` (comma-separated).

Set your placement IDs in Vercel Project Settings -> Environment Variables:

```bash
PUBLIC_EZOIC_PLACEHOLDER_IDS=101,102,103
```

Then redeploy and verify:

1. `https://openchatnow.com/ads.txt` resolves and shows seller lines.
2. Test with `?ez_js_debugger=1` and confirm head scripts, consent, ad request, and placeholders.

## Contributing

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Create a branch from `main` for your feature or fix.
3. Make your changes; keep the existing structure (types, i18n, modular styles).
4. Run `pnpm build` to ensure the project builds.
5. Open a pull request with a short description of what changed and why.

For new languages or countries, add entries in `src/i18n/translations.ts` and `src/data/countries.ts` respectively.

## License

This project is licensed under the MIT License.

## Author

**Kevin Tapia** ❤️
