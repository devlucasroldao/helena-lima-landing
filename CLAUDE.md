# Landing page — Helena Lima

Landing page de Helena Lima, gestão administrativa (financeiro, atendimento, agenda e processos) para MEIs, autônomos e empresas. Atendimento 100% online.

## Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` (sem `tailwind.config` nem PostCSS; tema em `src/index.css`, bloco `@theme`)
- Ícones: `lucide-react`
- Gerenciador de pacotes: **pnpm** (nunca npm ou yarn). Comandos: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview`

## Estrutura

- `src/App.tsx`: monta as seções na ordem da página
- `src/components/`: uma seção por arquivo (Header, Hero, Dores, Servicos, ComoFunciona, Formatos, Experiencia, Depoimentos, Sobre, Duvidas, CtaFinal, Footer), mais os componentes compartilhados `SectionTitle` (acento + título na mesma linha) e `WhatsAppIcon` (glifo oficial, Simple Icons CC0)
- `src/constants.ts`: **todos os contatos** (WhatsApp, e-mail, Instagram). Nunca escrever link ou contato direto em componente; sempre importar de `CONTACTS`. Também guarda os depoimentos (`TESTIMONIALS`).
- `src/index.css`: import do Tailwind, tokens de cor/fonte e estilos globais
- `index.html`: shell do Vite; é aqui que as Google Fonts são carregadas
- `vite.config.ts`: configuração padrão (React, Tailwind e alias `@` para `src`). O `<head>` (title, meta, Open Graph) é fixo no `index.html`, não gerado pelo Vite.

## Regras de conteúdo

- **A copy é definitiva.** Nunca reescrever, resumir, "melhorar" ou adicionar textos sem pedido explícito.
- **Nunca inventar** depoimentos, números, métricas, clientes, preços ou certificações.

## Depoimentos

A seção Depoimentos (entre Experiência e Sobre) só aparece quando `TESTIMONIALS`, em `src/constants.ts`, tem pelo menos 1 item. Com o array vazio, nada é renderizado.

Para adicionar um depoimento, inclua um objeto no array:

```ts
export const TESTIMONIALS: Testimonial[] = [
  {
    texto: "Texto do depoimento, exatamente como a cliente escreveu.",
    nome: "Nome da pessoa",
    cargo: "Cargo",
    empresa: "Empresa",
  },
]
```

- Só depoimentos reais, com autorização de quem escreveu. Nunca inventar.
- Com 1 depoimento, o cartão aparece centralizado; com 2 ou mais, em grade (empilhada no mobile).

## Identidade visual

Cores (tokens do Tailwind entre parênteses):

| Cor | Hex | Uso |
|---|---|---|
| Bordô (`bordo`) | #6E1F2F | Principal |
| Café (`cafe`) | #3B2620 | Texto |
| Rosa antigo (`rosa`) | #D9A5A8 | Apoio. **Nunca com texto branco** |
| Blush (`blush`) | #F2DFDC | Fundo alternativo |
| Papel (`papel`) | #F5EFE8 | Fundo principal |

Fontes:

- **Pinyon Script** (`font-script`): só como acento em 1 ou 2 palavras de título e no "Helena" do logo.
- **Schibsted Grotesk** (`font-sans`): todo o resto. O `body` já usa essa fonte.
- As fontes são carregadas por `<link>` no `<head>` do `index.html`. **Não usar `@import` do Google Fonts no CSS**: depois do `@import 'tailwindcss'` ele é descartado e a página cai na fonte do sistema.

Estilo:

- Sem gradientes, sem sombras pesadas.
- Animações sutis, sempre respeitando `prefers-reduced-motion`.

## Mobile-first

A maior parte do acesso vem do Instagram, pelo celular. Desenhar e testar primeiro na largura de celular e depois ampliar com `md:`/`lg:`. Alvos de toque com no mínimo 44px.
