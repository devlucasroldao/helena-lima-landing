# Helena Lima — landing page

Landing page de Helena Lima, gestão administrativa (financeiro, atendimento, agenda e processos) para MEIs, autônomos e empresas, com atendimento 100% online.

Publicada em https://helena-lima-landing.vercel.app

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [pnpm](https://pnpm.io) como gerenciador de pacotes (não usar npm nem yarn)

## Rodar localmente

Requer Node 22 e pnpm.

```bash
pnpm install
pnpm dev
```

O site abre em http://localhost:5173.

## Build

```bash
pnpm build     # gera a versão de produção em dist/
pnpm preview   # serve o dist/ localmente pra conferir
```

## Deploy

Na [Vercel](https://vercel.com), automático a cada push na branch `main`. Não há passo manual.

## Onde editar

- **Contatos** (WhatsApp, e-mail, Instagram) e links: `src/constants.ts`, no objeto `CONTACTS`. Nenhum contato fica escrito direto nos componentes.
- **Depoimentos**: `src/constants.ts`, no array `TESTIMONIALS`. Com o array vazio, a seção não aparece; basta acrescentar um item pra ela surgir na página. Só depoimentos reais, com autorização de quem escreveu.
