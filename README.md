# lucyanpeixoto

Site pessoal feito com [Astro](https://astro.build), gerado como HTML estático, em português e inglês, com tema claro/escuro e publicado na [Vercel](https://vercel.com).

## Requisitos

- Node.js 22.12+ (ver `.nvmrc`)

## Desenvolvimento

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist
npm run preview  # serve o build localmente
```

## Estrutura

```
public/            arquivos servidos como estão (favicon, robots.txt)
src/pages/         rotas: / (pt-BR) e /en/ (inglês)
src/components/    Home.astro (layout único das duas línguas)
src/i18n.ts        textos em PT e EN
src/styles/        CSS global
vercel.json        headers de segurança e cache
```

## Deploy

Importe o repositório na Vercel — o framework Astro é detectado automaticamente
(build `npm run build`, saída `dist`). Ou via CLI:

```sh
npx vercel        # preview
npx vercel --prod # produção
```

## Créditos

Layout derivado do [Superfluid Layout](https://github.com/codrops/SuperfluidLayout) da Codrops (MIT).
