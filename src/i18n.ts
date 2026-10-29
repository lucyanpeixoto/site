export const locales = ['pt-br', 'en'] as const;
export type Locale = (typeof locales)[number];

// Ano de início da carreira; o tempo de experiência é recalculado a cada build
const careerStartYear = 2013;
const years = new Date().getFullYear() - careerStartYear;

const doity = '<a href="https://doity.com.br" target="_blank" rel="noopener">Doity</a>';
const integrabot = '<a href="https://integrabot.ai" target="_blank" rel="noopener">Integrabot.ai</a>';

// Parágrafos em HTML (conteúdo próprio, renderizado com set:html)
export const content = {
	'pt-br': {
		htmlLang: 'pt-BR',
		ogLocale: 'pt_BR',
		path: '/',
		description: `Engenheiro de Software e Tech Lead com mais de ${years} anos de experiência construindo e escalando produtos digitais. Tech Lead na Doity e cofundador da Integrabot.ai.`,
		greeting: 'Olá, eu sou Lucyan Peixoto.',
		lead: `Engenheiro de Software e Tech Lead com mais de ${years} anos de experiência construindo, evoluindo e escalando produtos digitais.`,
		paragraphs: [
			`Atualmente, lidero iniciativas de engenharia na ${doity}, conectando decisões técnicas, estratégia de produto e desenvolvimento de equipes para transformar desafios complexos em soluções confiáveis, eficientes e escaláveis.`,
			`Também sou cofundador da ${integrabot}, onde exploro o potencial da inteligência artificial para criar produtos e automatizar processos de negócio.`,
		],
		closing:
			'De União dos Palmares, Alagoas, para qualquer lugar onde boas ideias possam se transformar em produtos reais.',
		contact: 'Entre em contato no',
		linkedin: 'Você pode me encontrar também no',
		switchLanguage: { label: 'EN', title: 'Read in English' },
		theme: { toLight: 'Claro', toDark: 'Escuro', title: 'Alternar tema' },
	},
	en: {
		htmlLang: 'en',
		ogLocale: 'en_US',
		path: '/en/',
		description: `Software Engineer and Tech Lead with over ${years} years of experience building and scaling digital products. Tech Lead at Doity and co-founder of Integrabot.ai.`,
		greeting: "Hi, I'm Lucyan Peixoto.",
		lead: `Software Engineer and Tech Lead with over ${years} years of experience building, evolving and scaling digital products.`,
		paragraphs: [
			`I currently lead engineering initiatives at ${doity}, connecting technical decisions, product strategy and team development to turn complex challenges into reliable, efficient and scalable solutions.`,
			`I'm also a co-founder of ${integrabot}, where I explore the potential of artificial intelligence to build products and automate business processes.`,
		],
		closing:
			'From União dos Palmares, Alagoas, Brazil, to anywhere good ideas can become real products.',
		contact: 'Get in touch at',
		linkedin: 'You can also find me on',
		switchLanguage: { label: 'PT', title: 'Ler em português' },
		theme: { toLight: 'Light', toDark: 'Dark', title: 'Toggle theme' },
	},
} satisfies Record<Locale, unknown>;
