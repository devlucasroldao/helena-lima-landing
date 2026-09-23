# Landing page — Helena Lima

Landing page de Helena Lima, gestão administrativa (financeiro, atendimento, agenda e processos) para MEIs, autônomos e empresas. Atendimento 100% online.

## Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` (sem `tailwind.config` nem PostCSS; tema em `src/index.css`, bloco `@theme`)
- Ícones: `lucide-react`
- Gerenciador de pacotes: **pnpm** (nunca npm ou yarn). Comandos: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview`

## Estrutura

- `src/App.tsx`: monta as seções na ordem da página
- `src/components/`, seções (uma por arquivo, na ordem da página): `Header`, `Hero`, `Dores`, `Servicos`, `ComoFunciona`, `Formatos`, `Experiencia`, `Depoimentos`, `Sobre`, `Duvidas`, `CtaFinal`, `Footer`
- `src/components/`, compartilhados:
  - `SectionTitle`: título de seção (acento em Pinyon Script + título na mesma linha)
  - `Logo`: "Helena Lima" em Pinyon Script, usado no header e no rodapé
  - `Tag`: etiqueta (pílula rosa antigo, texto bordô, 700, caixa alta, letter-spacing 0.16em)
  - `WhatsAppIcon` e `InstagramIcon`: glifos oficiais (Simple Icons, CC0), `fill="currentColor"`
  - `WhatsAppFlutuante`: botão flutuante de WhatsApp, só no mobile
- `src/constants.ts`: **todos os contatos e links**. Nunca escrever link ou contato direto em componente; sempre importar daqui.
  - `CONTACTS`: WhatsApp (URL e número exibido), e-mail, Instagram (URL e `INSTAGRAM_HANDLE`)
  - `CONTACT_ICONS`: ícones de contato do rodapé (Instagram, WhatsApp, e-mail)
  - `MONOGRAM_URL`: monograma (o mesmo arquivo do favicon, `/favicon.svg`)
  - `NAV_LINKS`: links de navegação do rodapé, na ordem da página
  - `TESTIMONIALS`: depoimentos
- `src/index.css`: import do Tailwind, tokens de cor/fonte e estilos globais
- `public/`: arquivos servidos como estão (favicons, `og-image.jpg`, `robots.txt`)
- `public/fotos/`: fotos da Helena (`helena-hero.webp` e `helena-hero-640.webp` no hero, `helena-sobre.webp` no Sobre)
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

- **Pinyon Script** (`font-script`): só como acento em 1 ou 2 palavras de título e no logo ("Helena Lima").
- **Schibsted Grotesk** (`font-sans`): todo o resto. O `body` já usa essa fonte.
- As fontes são carregadas por `<link>` no `<head>` do `index.html`. **Não usar `@import` do Google Fonts no CSS**: depois do `@import 'tailwindcss'` ele é descartado e a página cai na fonte do sistema.

Estilo:

- Sem gradientes, sem sombras pesadas.
- Animações sutis, sempre respeitando `prefers-reduced-motion`.

## Componentes: regras

- **Logo** sempre via `Logo.tsx`. Nunca montar o nome à mão.
- **Etiquetas** sempre via `Tag.tsx`. Não criar outro estilo de etiqueta.
- **Ícones de marca** (WhatsApp, Instagram) sempre com o path oficial do Simple Icons, sem redesenhar nem trocar por ícone genérico.
- **Botão flutuante de WhatsApp** (`WhatsAppFlutuante`): some enquanto o hero (`#inicio`), o CTA final (`#contato`) ou o rodapé estão na tela. Se mudar esses ids, atualize o componente.

## Fotos

- Sempre em **WebP**, dentro de `public/fotos/`.
- Toda `<img>` sempre com `width`, `height` (dimensões reais do arquivo, pra não haver salto de layout) e `alt`.

## Imagem de compartilhamento (og-image)

- `public/og-image.jpg`, 1200x630, referenciada por URL absoluta em `og:image` e `twitter:image` no `index.html`.
- **Conteúdo importante no quadrado central de 630x630**: o WhatsApp recorta a miniatura no centro, e o que estiver nas laterais some.
- Ao trocar a imagem, manter nome, tamanho e as metas `og:image:type`, `og:image:width`, `og:image:height` e `og:image:alt` coerentes.

## SEO

- `public/robots.txt` libera tudo.
- **Sem sitemap por enquanto**: ele precisa da URL do domínio final. Criar junto com a troca de domínio (ver Pendências).

## Fluxo de trabalho

- **Uma sessão por vez editando o projeto.** Duas sessões em paralelo sobrescrevem o trabalho uma da outra.

## Mobile-first

A maior parte do acesso vem do Instagram, pelo celular. Desenhar e testar primeiro na largura de celular e depois ampliar com `md:`/`lg:`. Alvos de toque com no mínimo 44px.

## Analytics

Vercel Web Analytics (`<Analytics />` de `@vercel/analytics/react`, no `App.tsx`). Só as visitas padrão: sem eventos personalizados e sem cookies.

## Pendências da versão 2

- **Depoimentos**: array `TESTIMONIALS` vazio, aguardando o texto da Conecte Telecom.
- **Domínio próprio**: trocar `og:url`, `og:image` e `twitter:image` no `index.html`; criar `sitemap.xml`; cadastrar no Google Search Console.
- **Pré-renderização do HTML para SEO**: hoje o conteúdo só existe no JavaScript.
- **E-mail no domínio próprio**, substituindo o Gmail em `CONTACTS.EMAIL` (`src/constants.ts`).
