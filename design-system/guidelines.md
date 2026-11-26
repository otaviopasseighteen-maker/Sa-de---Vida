# Diretrizes visuais

## Identidade

A interface existente utiliza tema escuro, superfícies em tons de azul/preto, texto claro e dois acentos principais: roxo e verde-água. O conjunto transmite uma aparência digital, contemporânea e voltada ao bem-estar.

## Cores

- Use o fundo principal para a base da página.
- Use superfícies soft/panel para separar áreas de conteúdo.
- Use o roxo como acento de destaque e ação principal.
- Use o verde-água como acento complementar.
- Use o texto muted para informações secundárias, sem comprometer a legibilidade.
- Use bordas discretas para separar superfícies sem criar ruído visual.

Consulte os valores oficiais em `tokens.css`.

## Tipografia

- **DM Sans:** textos corridos, descrições, rótulos e conteúdo geral.
- **Space Grotesk:** títulos, marca e números que precisem de maior destaque.

Mantenha hierarquia clara entre título, subtítulo, corpo e metadados. Evite usar muitos pesos e tamanhos diferentes sem necessidade.

## Superfícies e componentes

- Prefira cards com fundo escuro, bordas sutis e cantos arredondados.
- Preserve a distinção entre ações primárias e secundárias.
- Mantenha espaçamentos consistentes entre elementos relacionados.
- Agrupe informações por assunto e evite excesso de elementos decorativos.
- Use gradientes e brilhos como detalhes de identidade, não como substitutos de hierarquia ou contraste.

## Responsividade

Os estilos atuais incluem adaptações em breakpoints próximos de 850px e 520px. Ao criar ou documentar novas variações:

- evite rolagem horizontal não intencional;
- permita que grades e cards se reorganizem em telas estreitas;
- mantenha alvos de toque confortáveis;
- preserve a leitura e a hierarquia do conteúdo;
- teste navegação e formulários em dispositivos móveis.

## Acessibilidade

- Garanta contraste suficiente entre texto e fundo.
- Não comunique estados apenas por cor.
- Mantenha foco de teclado perceptível.
- Associe rótulos aos campos de formulário.
- Garanta que controles interativos possam ser usados por teclado.
- Respeite `prefers-reduced-motion` e evite animações essenciais para compreender o conteúdo.

## Regra de preservação

Estas diretrizes documentam o design já existente. Não altere os estilos ou scripts da aplicação principal apenas para alinhar o código à documentação. Mudanças de implementação devem ser tratadas separadamente, com escopo e revisão próprios.
