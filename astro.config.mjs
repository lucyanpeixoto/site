// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
	i18n: {
		defaultLocale: 'pt-br',
		locales: ['pt-br', 'en'],
		routing: { prefixDefaultLocale: false },
	},
});
