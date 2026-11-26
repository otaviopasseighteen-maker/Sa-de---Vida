# Saúde & Vida — Design System

Este diretório documenta o sistema visual existente do site Saúde & Vida. O objetivo é organizar e tornar reutilizáveis as decisões de design já presentes no projeto, sem redesenhar o produto nem alterar sua implementação atual.

## Princípios

- **Preservar a identidade atual:** tema escuro, roxo e verde-água como cores de destaque.
- **Consistência:** reutilizar tokens para cores, tipografia, espaçamento e superfícies.
- **Acessibilidade:** manter contraste legível, foco visível e respeito à preferência por movimento reduzido.
- **Responsividade:** documentar padrões que funcionem em telas grandes e pequenas.
- **Evolução segura:** esta documentação vive em uma branch separada e não modifica os arquivos existentes do site.

## Estrutura

- `tokens.css`: variáveis visuais extraídas dos estilos atuais.
- `components.md`: inventário dos componentes identificados no HTML e nas folhas CSS.
- `guidelines.md`: orientações de uso, responsividade e acessibilidade.

## Fontes analisadas

- `index.html`
- `style.css`
- `wellness.css`
- `dashboard.css`
- `screening.css`

Os estilos originais permanecem como fonte de verdade para o comportamento atual do site. Este Design System é uma documentação organizada da identidade existente; não é uma substituição automática dos CSS atuais.

## Como evoluir

1. Ao identificar um padrão visual recorrente, documente-o antes de criar uma variação.
2. Prefira os tokens definidos em `tokens.css` em novos componentes.
3. Registre estados importantes (padrão, hover, foco, desabilitado, selecionado).
4. Confira contraste, teclado, telas menores e `prefers-reduced-motion`.
5. Não altere os arquivos da aplicação sem uma tarefa específica de implementação e revisão.
