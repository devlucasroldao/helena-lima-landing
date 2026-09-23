Crie uma landing page de página única para HELENA LIMA, profissional de gestão administrativa que atende pequenos negócios 100% online. A página será acessada principalmente pelo celular, vindo do Instagram (@helenagestao). Faça mobile-first e responsivo.

A imagem anexada é a referência de identidade visual. Siga-a com fidelidade.

REGRAS DE CONTEÚDO (OBRIGATÓRIAS)
- Use EXATAMENTE a copy abaixo. Não reescreva, não resuma, não adicione frases.
- NÃO invente depoimentos, números, métricas, clientes, preços, prêmios, certificações, logos de empresas ou selos.
- NÃO crie seção de depoimentos.
- Imagens: use blocos placeholder com o texto "[foto da Helena]". Não use banco de imagens.
- Sem emojis.

IDENTIDADE VISUAL
Cores (defina como tokens/variáveis CSS centralizadas):
- --bordo: #6E1F2F (cor principal: títulos, linhas, bordas, botões)
- --cafe: #3B2620 (texto corrido)
- --rosa: #D9A5A8 (apoio; texto sobre ela sempre em bordô, nunca branco)
- --blush: #F2DFDC (fundo alternativo de seções)
- --papel: #F5EFE8 (fundo principal)
- Sobre fundo bordô, texto em --papel ou --blush.

Tipografia (Google Fonts):
- "Pinyon Script": SOMENTE como acento caligráfico em 1 ou 2 palavras de título (ex.: "Olá,"). Nunca em frases inteiras, botões, textos pequenos ou informações importantes.
- "Schibsted Grotesk": todo o resto. Títulos em peso 500 com letter-spacing -0.02em; corpo em 400; etiquetas em 700, caixa alta, letter-spacing 0.16em, tamanho pequeno.
- Padrão de título das seções: palavra em Pinyon Script (maior, em bordô) seguida de texto em Schibsted Grotesk.

Elementos:
- Linhas finas de 1.5px em bordô para separar seções e sublinhar cabeçalhos.
- Caixas com contorno de 1.5px bordô, border-radius 10px, com número grande ("01", "02"...) em Schibsted Grotesk sobreposto no canto inferior direito, saindo levemente da caixa (fundo da cor da seção atrás do número).
- Botão principal: fundo bordô, texto papel, formato pílula (border-radius 999px). Botão secundário: contorno bordô, fundo transparente.
- Etiquetas em pílula com contorno bordô.
- Estética: papel e tinta, limpa, com bastante respiro. Sem gradientes, sem sombras pesadas, sem ícones coloridos.

ESTRUTURA TÉCNICA
- React + Tailwind, com as cores e fontes configuradas como tokens no tema.
- Um componente por seção.
- Contatos em um único arquivo de configuração (constantes), usados em todos os botões e no rodapé:
  WHATSAPP_URL = "https://wa.me/5551997999008?text=Oi%20Helena!%20Vim%20pelo%20site%20e%20quero%20entender%20como%20voc%C3%AA%20pode%20ajudar%20meu%20neg%C3%B3cio."
  WHATSAPP_DISPLAY = "(51) 99799-9008"
  EMAIL = "helenalimagestao@gmail.com"
  INSTAGRAM_URL = "https://instagram.com/helenagestao"
- Todos os botões de WhatsApp abrem em nova aba.
- HTML semântico, botões e links reais, contraste acessível, alvos de toque com pelo menos 44px.
- Menu fixo no topo; no mobile, vira menu hambúrguer.
- Os links do menu rolam suavemente até as seções.

COPY DA PÁGINA

[1. HEADER]
Logo: "Helena" (Pinyon Script) + "Lima" (Schibsted Grotesk), em bordô
Menu: Serviços · Como funciona · Experiência · Dúvidas
Botão: Conversar

[2. HERO]
Acento: Olá,
Título: eu organizo o financeiro e o atendimento do seu negócio.
Texto: Pra MEIs, autônomos e pequenas empresas, 100% online. Antes de organizar qualquer coisa, eu entendo como o seu negócio funciona.
Botão principal: Conversar no WhatsApp
Botão secundário: Ver como funciona (rola até a seção Como funciona)
Imagem: [foto da Helena]

[3. DORES] (fundo blush)
Acento: Talvez
Título: você se reconheça aqui
Grade de caixas com contorno (sem números):
- Você não sabe direito quanto entrou e quanto saiu esse mês.
- Uma conta foi paga com juros porque ninguém lembrou do vencimento.
- Tem cliente te devendo e você nem tem certeza de quem.
- O WhatsApp acumula mensagem enquanto você tenta trabalhar.
- A agenda do negócio vive na sua cabeça, e às vezes ela falha.
- Tudo depende de você. Se você para, o negócio para.
Fechamento: Você não precisa resolver tudo de uma vez. A gente começa pelo que mais trava.

[4. SERVIÇOS]
Acento: O que
Título: eu faço
4 blocos, cada um com etiqueta, título e lista:

FINANCEIRO | Organização financeira
- Contas a pagar e a receber
- Registro de entradas e despesas
- Rotina de cobrança, inclusive de inadimplentes
- Planilhas de controle
- Organização do sistema que você já usa

ATENDIMENTO | Atendimento ao cliente
- Atendo os seus clientes em nome da empresa
- Sigo o jeito que o seu negócio já se comunica
- Trabalho dentro do sistema que vocês já usam

AGENDA | Agenda do negócio
- Prioridades, atividades e eventos da empresa organizados
- Rotinas administrativas do dia a dia

PROCESSOS | Organização de processos
- Estruturar como as tarefas são feitas, pra que não dependam da memória de ninguém

Nota abaixo dos blocos (texto menor): Eu não substituo o seu contador. Notas fiscais e impostos ficam com a contabilidade; eu organizo a rotina financeira pra que o trabalho dele, e o seu, fique mais fácil.

[5. COMO FUNCIONA]
Acento: Como
Título: funciona
4 caixas numeradas (01 a 04) em sequência:
01 Conversa inicial: Você me conta como o negócio funciona hoje e o que mais está pesando.
02 Diagnóstico sem custo: Eu olho a sua rotina e identifico onde está o nó.
03 Organização: Organizo começando pelo que mais trava.
04 Acompanhamento: Se fizer sentido pra você, sigo junto, mês a mês.

[6. FORMATOS] (fundo blush)
Acento: Formas
Título: de trabalhar comigo
Dois cartões lado a lado (empilhados no mobile):
PONTUAL: Pra organizar uma área específica: estruturar o financeiro, montar planilhas, arrumar o atendimento.
ACOMPANHAMENTO MENSAL (destacar este cartão com fundo bordô e texto papel): Eu cuido da rotina que a gente combinar e acompanho o seu negócio todo mês.
Abaixo dos cartões: Cada proposta é montada de acordo com o que o seu negócio precisa. Todo trabalho é feito com contrato.
Botão: Conversar no WhatsApp

[7. EXPERIÊNCIA]
Acento: Na prática
Título: o financeiro da Conecte Telecom
Três colunas (empilhadas no mobile), cada uma com etiqueta:
O CENÁRIO: O setor financeiro não tinha uma estrutura organizada. A cobrança dos clientes em dia já tinha data fixa, mas a cobrança de inadimplentes não seguia nenhuma rotina.
O QUE EU FIZ: Organizei contas a pagar e a receber, montei a planilha de controle, defini uma forma mais adequada de registrar despesas e organizei o uso do sistema. Também criei uma régua de cobrança para inadimplentes, com etapas de aviso antes do bloqueio, da retirada de equipamentos e da negativação, e defini o que cobrar em cada situação.
COMO FICOU: O financeiro passou a ter rotina, registro e controle, com processos que não dependem de lembrar tudo de cabeça.

[8. SOBRE]
Acento: Prazer,
Título: Helena Lima
Texto: Comecei aos 14 anos, como secretária num salão, cuidando da parte administrativa e da cobrança dos serviços. Foi lá que meus antigos chefes da Conecte Telecom conheceram meu trabalho e, quando saí, me chamaram pra trabalhar com eles. Entrei como secretária e fui assumindo o financeiro e a organização de tudo.
Hoje atendo pequenos negócios de todo o Brasil, online. Gosto de entender antes de organizar: cada negócio funciona de um jeito, e a solução precisa caber na sua rotina.
Imagem: [foto da Helena]

[9. DÚVIDAS] (acordeão)
Acento: Dúvidas
Título: frequentes
- Você atende de onde? Atendo 100% online, pequenos negócios de qualquer lugar do Brasil.
- Preciso ter CNPJ? Não. Atendo pequenas empresas, MEIs e também autônomos pessoa física.
- Você substitui o meu contador? Não. Notas fiscais e impostos ficam com a contabilidade. Eu organizo a rotina financeira e trabalho junto com ela.
- Como ficam os meus dados? Todo trabalho é feito com contrato, que inclui cláusula de confidencialidade. O acesso a sistemas e informações é combinado de acordo com o serviço.
- Quanto custa? Cada proposta é montada de acordo com o que o seu negócio precisa. O diagnóstico inicial é sem custo.
- Como a gente começa? Com uma conversa pelo WhatsApp. Você me conta a situação e eu explico como posso ajudar.

[10. CTA FINAL] (fundo bordô, texto papel)
Acento: Vamos
Título: conversar?
Texto: Me conta como está o seu negócio hoje.
Botão (fundo papel, texto bordô): Conversar no WhatsApp

[11. RODAPÉ]
Helena Lima · Gestão pra pequenos negócios
Instagram: @helenagestao (link)
WhatsApp: (51) 99799-9008 (link)
E-mail: helenalimagestao@gmail.com (link mailto)