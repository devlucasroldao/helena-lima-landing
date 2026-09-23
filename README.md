<div align="center">

<img src="public/favicon.png" alt="Monograma Helena Lima" width="96" height="96">

# Helena Lima · Gestão pra negócios

Landing page de apresentação e contato da Helena Lima, profissional de gestão administrativa que organiza o financeiro, o atendimento e a rotina de MEIs, autônomos e empresas, 100% online.

**[helena-lima-landing.vercel.app](https://helena-lima-landing.vercel.app)**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Objetivo da página](#objetivo-da-página)
- [Estrutura da página](#estrutura-da-página)
- [Identidade visual](#identidade-visual)
- [Stack](#stack)
- [Como rodar localmente](#como-rodar-localmente)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como editar o conteúdo](#como-editar-o-conteúdo)
- [Deploy](#deploy)
- [SEO e compartilhamento](#seo-e-compartilhamento)
- [Acessibilidade e performance](#acessibilidade-e-performance)
- [Regras do projeto](#regras-do-projeto)
- [Decisões técnicas e aprendizados](#decisões-técnicas-e-aprendizados)
- [Roadmap](#roadmap)
- [Créditos e licenças](#créditos-e-licenças)

---

## Sobre o projeto

A Helena começou aos 14 anos como secretária num salão, cuidando da parte administrativa e da cobrança. Depois foi para a Conecte Telecom, onde estruturou do zero um setor financeiro que não tinha organização: contas a pagar e a receber, planilha de controle, registro de despesas e uma régua de cobrança para inadimplentes.

Hoje ela atende negócios de todo o Brasil de forma remota. Este repositório é a página que apresenta esse trabalho e leva a pessoa até uma conversa.

O projeto é uma **marca pessoal**, não uma empresa. A página foi pensada para passar a sensação de *"eu sei organizar o seu negócio, mas antes eu quero entender como ele funciona"*: profissional, sem ser fria, e humana, sem ser amadora.

## Objetivo da página

A página tem um único objetivo de conversão: **iniciar uma conversa no WhatsApp**.

Todo o conteúdo existe para responder, na ordem, as perguntas que um possível cliente faz antes de chamar alguém:

1. Quem é ela e o que ela faz?
2. Isso tem a ver com o meu problema?
3. Como funciona o trabalho?
4. Ela já fez isso antes?
5. Como eu começo?

Os botões de WhatsApp abrem a conversa com uma mensagem pré-preenchida (*"Vim pelo site..."*). Além de facilitar o primeiro contato, isso permite contar quantas conversas vieram da página sem nenhuma ferramenta extra.

A página não mostra preços de propósito: cada proposta é montada de acordo com a necessidade do negócio, e o diagnóstico inicial é sem custo.

## Estrutura da página

| Seção | Função |
|---|---|
| **Header** | Logo em assinatura, navegação e botão de contato. Fixo, com 64px de altura no mobile. |
| **Hero** | Apresentação ("Olá, eu organizo o financeiro e o atendimento do seu negócio"), foto e os dois botões principais. |
| **Talvez você se reconheça aqui** | Seis situações do dia a dia de quem administra um negócio sozinho. É onde a pessoa se identifica com o problema. |
| **Como posso ajudar?** | As quatro áreas de atuação: financeiro, atendimento, agenda e processos, com o aviso de que ela não substitui a contabilidade. |
| **Como funciona?** | As quatro etapas do trabalho: conversa inicial, diagnóstico sem custo, organização e acompanhamento. |
| **Formas de trabalhar comigo** | Trabalho pontual ou acompanhamento mensal, sem valores. |
| **Na prática** | O caso da Conecte Telecom: cenário, o que foi feito e como ficou. Só resultados qualitativos, sem dados financeiros da empresa. |
| **Quem já trabalhou comigo** | Depoimentos. Fica **oculta** até existir pelo menos um depoimento real cadastrado. |
| **Prazer, Helena Lima** | A história dela, do salão até o trabalho atual. |
| **Dúvidas frequentes** | Acordeão com as perguntas que mais aparecem antes da contratação. |
| **Vamos conversar?** | Chamada final para o WhatsApp. |
| **Rodapé** | Marca, navegação por seções e contatos (o e-mail é copiado ao clicar). |

No mobile, um **botão flutuante de WhatsApp** aparece depois que o hero sai da tela e some no CTA final e no rodapé, para não duplicar o botão.

## Identidade visual

A direção visual se chama **"Tinta bordô"**: papel e tinta, como uma caneta num caderno bem organizado. Uma cor principal faz quase todo o trabalho, a caligrafia entra só como acento e a estrutura fica com uma fonte sem serifa.

### Paleta

| Cor | Hex | Uso |
|---|---|---|
| Bordô | `#6E1F2F` | Cor principal: títulos, linhas, bordas e botões |
| Café | `#3B2620` | Texto corrido |
| Rosa antigo | `#D9A5A8` | Apoio: etiquetas, círculos dos ícones, seleção de texto. Nunca com texto branco. |
| Blush | `#F2DFDC` | Fundo alternativo de seções |
| Papel | `#F5EFE8` | Fundo principal |

As cores estão definidas como tokens no tema do Tailwind. Não use valores hex soltos nos componentes.

### Tipografia

| Fonte | Uso |
|---|---|
| **Pinyon Script** | Só no logo e como acento em uma ou duas palavras de cada título ("Olá,", "Talvez", "Como"...). Nunca em frases inteiras, botões ou textos pequenos. |
| **Schibsted Grotesk** | Todo o resto: títulos (peso 500, `letter-spacing: -0.02em`), corpo (400) e etiquetas (700, caixa alta, `letter-spacing: 0.16em`). |

As fontes são carregadas do Google Fonts por `<link>` no `index.html`, **nunca** por `@import` no CSS (veja [Decisões técnicas](#decisões-técnicas-e-aprendizados)).

### Elementos

- Linhas finas de 1px a 1.5px em bordô separando seções e sublinhando títulos.
- Caixas com contorno bordô e número grande sobreposto ("01", "02"...) nas etapas.
- Etiquetas em pílula rosa antigo, sempre pelo componente `Tag`.
- Ícones de traço fino (Lucide) e ícones oficiais de marca para WhatsApp e Instagram.
- Sem gradientes e sem sombras.

## Stack

| Ferramenta | Uso |
|---|---|
| [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | Interface e componentes |
| [Vite](https://vite.dev) | Servidor de desenvolvimento e build |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos, com tokens de cor e fonte no tema |
| [Lucide](https://lucide.dev) | Ícones de interface |
| [Simple Icons](https://simpleicons.org) | Paths oficiais dos ícones de WhatsApp e Instagram |
| [@vercel/analytics](https://vercel.com/docs/analytics) | Contagem de visitas, sem cookies |
| [pnpm](https://pnpm.io) | Gerenciador de pacotes |
| [mise](https://mise.jdx.dev) | Fixa as versões de Node e pnpm do ambiente (`.mise.toml`) |
| [Vercel](https://vercel.com) | Hospedagem e deploy automático |

## Como rodar localmente

**Pré-requisitos:** Node.js e pnpm, nas versões definidas no `.mise.toml`. Com o mise instalado, `mise install` resolve os dois.

```bash
# instalar as dependências
pnpm install

# rodar em modo de desenvolvimento (http://localhost:5173)
pnpm dev

# testar no celular pela mesma rede Wi-Fi
pnpm dev --host

# gerar a versão de produção em dist/
pnpm build

# checar os tipos
pnpm exec tsc --noEmit
```

Use sempre **pnpm**. O projeto tem `pnpm-lock.yaml`, e a Vercel instala com pnpm. Usar npm localmente pode gerar versões diferentes entre a sua máquina e o site no ar.

## Estrutura de pastas

```
helena-lima-landing/
├── public/
│   ├── fotos/                  # fotos da Helena em WebP
│   ├── favicon.svg             # monograma "H" (aba do navegador)
│   ├── favicon.ico
│   ├── favicon.png             # 512×512
│   ├── apple-touch-icon.png    # 180×180, tela inicial do iPhone
│   ├── og-image.jpg            # 1200×630, prévia de links
│   └── robots.txt
├── src/
│   ├── components/             # um componente por seção + componentes compartilhados
│   │   ├── Logo.tsx            # assinatura "Helena Lima" (header e rodapé)
│   │   ├── SectionTitle.tsx    # padrão acento em caligrafia + título
│   │   ├── Tag.tsx             # etiqueta em pílula (único estilo do site)
│   │   ├── WhatsAppIcon.tsx    # ícone oficial (Simple Icons)
│   │   ├── InstagramIcon.tsx   # ícone oficial (Simple Icons)
│   │   ├── WhatsAppFlutuante.tsx
│   │   └── ...                 # seções da página
│   ├── constants.ts            # contatos, links, navegação e depoimentos
│   ├── index.css               # tokens do tema, transições e estilos globais
│   └── App.tsx
├── index.html                  # meta tags, fontes e ícones
├── CLAUDE.md                   # regras do projeto para agentes de IA
├── .mise.toml
└── vite.config.ts
```

## Como editar o conteúdo

### Contatos e links

Todos os contatos ficam em `src/constants.ts`: link e número do WhatsApp, e-mail, Instagram e os links de navegação. **Nenhum componente tem contato escrito direto no código.** Para trocar o número ou o e-mail, basta alterar esse arquivo.

### Adicionar um depoimento

A seção de depoimentos só aparece quando o array `TESTIMONIALS` tem pelo menos um item. Para adicionar:

```ts
// src/constants.ts
export const TESTIMONIALS: Testimonial[] = [
  {
    texto: "Texto do depoimento, exatamente como a pessoa escreveu.",
    nome: "Nome da pessoa",
    cargo: "Cargo",
    empresa: "Empresa",
  },
]
```

Com um depoimento, ele aparece num cartão centralizado. Com dois ou mais, em grade. Nunca publique depoimento inventado ou editado sem autorização de quem escreveu.

### Trocar ou adicionar fotos

- Formato **WebP**, dentro de `public/fotos/`.
- Toda imagem precisa de `width`, `height` e `alt`.
- A foto do hero usa `fetchpriority="high"`. As outras usam `loading="lazy"`.
- Antes de publicar qualquer foto de bastidor, confira se nenhuma tela, planilha ou conversa mostra dado real de cliente ou de empresa.

### Textos

A copy da página foi escrita e aprovada com a Helena. Qualquer mudança de texto deve ser combinada com ela antes.

## Deploy

O deploy é automático: **cada push na branch `main` publica uma nova versão na Vercel** em cerca de 30 segundos.

| Configuração | Valor |
|---|---|
| Framework | Vite |
| Build | `pnpm build` |
| Saída | `dist` |
| Variáveis de ambiente | nenhuma |

Para conferir se uma imagem foi publicada corretamente, abra a URL dela direto no navegador (por exemplo, `/og-image.jpg`). O projeto **não usa Git LFS**: se um dia aparecer um texto começando com `version https://git-lfs...` no lugar de uma imagem, algo voltou a passar pelo LFS.

## SEO e compartilhamento

- `<title>`, `description`, Open Graph e Twitter Card configurados no `index.html`.
- `og:image` com URL absoluta, 1200×630, em JPG.
- **Regra da og-image:** o conteúdo importante fica no quadrado central de 630×630, porque o WhatsApp recorta a miniatura no centro. Na versão atual, o quadrado central é a foto da Helena, e o texto fica nas laterais.
- `robots.txt` liberando a indexação.
- `lang="pt-BR"` e `theme-color` bordô.

Para ver a prévia nova depois de trocar a og-image, compartilhe o link com um parâmetro novo (`?v=7`, por exemplo), porque o WhatsApp guarda a prévia antiga em cache. Para Facebook e Instagram, use o [Sharing Debugger](https://developers.facebook.com/tools/debug/).

## Acessibilidade e performance

- Mobile-first: a maior parte das visitas vem do Instagram, pelo celular.
- Sem rolagem horizontal de 390px a 1440px.
- Alvos de toque com pelo menos 44px.
- Foco visível pelo teclado (`:focus-visible`) em todos os elementos clicáveis.
- `aria-expanded` no menu mobile e no acordeão, `aria-live` no aviso de e-mail copiado.
- Transições de 200ms apenas em `color`, `background-color`, `border-color`, `opacity` e `transform`. Nunca `transition: all`.
- Todo movimento respeita `prefers-reduced-motion`.
- Suporte à área segura do iPhone (`viewport-fit=cover` + `env(safe-area-inset-*)`), testado em aparelho real.
- Fotos em WebP com `srcset` e dimensões declaradas, sem salto de layout.

## Regras do projeto

As regras completas estão no [`CLAUDE.md`](CLAUDE.md). As principais:

- A copy é definitiva: não reescrever, resumir nem adicionar textos sem pedido explícito.
- Nunca inventar depoimentos, números, métricas, clientes, preços ou certificações.
- Logo sempre pelo `Logo.tsx`, etiquetas sempre pelo `Tag.tsx`.
- Ícones de marca sempre com o path oficial do Simple Icons.
- Fontes sempre por `<link>` no `index.html`.
- Uma sessão por vez editando o projeto.

## Decisões técnicas e aprendizados

O projeto começou no **Figma Make** e foi migrado para um repositório próprio. Alguns problemas encontrados nesse caminho ficam registrados aqui para não se repetirem:

- **Fontes que não carregavam.** O `@import` do Google Fonts ficava depois do `@import "tailwindcss"` no CSS. O navegador descarta imports que não estão no topo do arquivo, sem mostrar erro nenhum, e a página caía na fonte do sistema. A solução foi carregar as fontes por `<link>` no `index.html`.
- **Site invisível para o Google.** Um plugin do Figma Make no `vite.config.ts` injetava `noindex`, uma descrição genérica em inglês e um `robots.txt` bloqueando tudo. O plugin foi removido junto com a pasta `.figma/`.
- **Git LFS.** O `.gitattributes` herdado mandava todas as imagens para o LFS, que a Vercel não baixa por padrão. O site publicaria arquivos de texto no lugar das imagens. O LFS foi removido antes das imagens entrarem no repositório.
- **Prévia cortada no WhatsApp.** A primeira og-image deixava texto no centro, e a miniatura mostrava só um pedaço. A imagem foi refeita com o rosto no quadrado central.
- **Dados reais em fotos de bastidor.** Algumas fotos de mesa mostravam uma planilha com dados de terceiros e uma conversa legível. As telas foram desfocadas antes de qualquer uso.

## Roadmap

**Versão 1 (atual)**
- [x] Página completa com copy aprovada
- [x] Identidade visual aplicada
- [x] Fotos reais, favicon e og-image
- [x] Revisão de UX mobile e teste em iPhone
- [x] Analytics sem cookies e `robots.txt`

**Versão 2**
- [ ] Depoimento da Conecte Telecom
- [ ] Domínio próprio, com troca de `og:url`, `og:image` e `twitter:image`
- [ ] `sitemap.xml` e cadastro no Google Search Console
- [ ] Pré-renderização do HTML para SEO (hoje o conteúdo só existe no JavaScript)
- [ ] E-mail no domínio próprio

## Créditos e licenças

- **Cliente e conteúdo:** Helena Lima · [@helenagestao](https://instagram.com/helenagestao)
- **Estratégia, design e desenvolvimento:** Lucas Roldão · [GitHub](https://github.com/devlucasroldao) · [LinkedIn](https://linkedin.com/in/devlucasroldao)

Terceiros:

- Fontes Pinyon Script e Schibsted Grotesk: [SIL Open Font License](https://openfontlicense.org)
- Ícones de marca: [Simple Icons](https://simpleicons.org), CC0
- Ícones de interface: [Lucide](https://lucide.dev), licença ISC

**Todos os direitos reservados.** O código deste repositório foi feito para este projeto. Os textos, as fotos e a identidade visual pertencem a Helena Lima e não podem ser reutilizados sem autorização.
