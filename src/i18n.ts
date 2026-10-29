export const locales = ['pt-br', 'en'] as const;
export type Locale = (typeof locales)[number];

// Ano de início da carreira; o tempo de experiência é recalculado a cada build
const careerStartYear = 2013;
const years = new Date().getFullYear() - careerStartYear;

export const content = {
	'pt-br': {
		htmlLang: 'pt-BR',
		ogLocale: 'pt_BR',
		path: '/',
		description:
			'Software engineer brasileiro, tech lead na Doity, focado em desenvolver e escalar produtos digitais.',
		greeting: 'Oi, eu sou Lucyan',
		intro: [
			`Software engineer brasileiro com ${years} anos de experiência e morando na terra de Zumbi dos Palmares — Atualmente como tech lead na`,
			'busco desenvolver e escalar produtos digitais com a melhor experiência para o usuário.',
		],
		contact: 'Entre em contato no',
		linkedin: 'Você pode me encontrar também no',
		switchLanguage: { label: 'EN', title: 'Read in English' },
		theme: { toLight: 'Claro', toDark: 'Escuro', title: 'Alternar tema' },
	},
	en: {
		htmlLang: 'en',
		ogLocale: 'en_US',
		path: '/en/',
		description:
			'Brazilian software engineer, tech lead at Doity, focused on building and scaling digital products.',
		greeting: "Hi, I'm Lucyan",
		intro: [
			`Brazilian software engineer with ${years} years of experience, living in the land of Zumbi dos Palmares — Currently a tech lead at`,
			'where I build and scale digital products with the best possible user experience.',
		],
		contact: 'Get in touch at',
		linkedin: 'You can also find me on',
		switchLanguage: { label: 'PT', title: 'Ler em português' },
		theme: { toLight: 'Light', toDark: 'Dark', title: 'Toggle theme' },
	},
} satisfies Record<Locale, unknown>;
