# Roteiro de apresentação — Design System Saúde & Vida

Material de apoio para apresentar o sistema visual e explicar como ele foi documentado a partir do produto implementado.

## Abertura

"O Saúde & Vida é uma experiência sobre tecnologia, emoções, hábitos e bem-estar. O Design System organiza a linguagem visual que já existe no site para que cores, tipografia, componentes e padrões sejam reconhecíveis e consistentes."

## 1. Identidade visual

"A interface usa uma base escura para criar foco no conteúdo. O roxo e o verde-água são as cores de acento: o roxo destaca elementos e o verde-água aparece em detalhes, estados e indicadores. O texto principal é claro e o texto secundário usa um tom mais suave."

Mostre:
- paleta de cores;
- DM Sans para corpo e Space Grotesk para títulos;
- superfícies escuras, bordas discretas, cantos arredondados;
- gradientes e órbitas como detalhes da hero.

## 2. Componentes

"Em vez de apresentar elementos isolados, o sistema identifica os componentes que formam as telas reais: navegação, botões, cards informativos, controle de tempo de tela, seleção de emoções, cards de bem-estar, campos de formulário, hábitos, histórico, dashboard e questionário."

Mostre na página visual:
- botão primário branco e botão ghost;
- cards de conteúdo;
- controle de tempo de tela;
- seleção de emoção e humor;
- lista de hábitos e barra de progresso.

## 3. Padrões de interface

"O sistema também registra como os componentes se organizam em experiências completas. No projeto, isso aparece no check-in diário, no acompanhamento de hábitos, no resumo semanal e na autoavaliação emocional."

Destaque:
- o check-in reúne humor, sono, disposição e observação opcional;
- os cinco hábitos alimentam o progresso diário;
- o dashboard resume check-ins, sono e hábitos ao longo de sete dias;
- a pesquisa tem 18 perguntas, seis áreas, quatro opções de frequência e uma pergunta de segurança separada.

## 4. Acessibilidade e cuidado

"O projeto utiliza foco visível, estados selecionados, feedback de formulário e adaptações para telas menores. Também respeita a preferência por movimento reduzido. O questionário é apresentado como reflexão educativa, não como diagnóstico."

## 5. Fechamento

"O Design System não foi criado para mudar a identidade do site, mas para registrar e tornar explícitas as decisões que já existem. Assim, novas telas e componentes podem seguir os mesmos padrões, mantendo unidade visual e uma experiência coerente."

## Ordem sugerida para demonstrar em 3–5 minutos

1. Abra o [preview visual](preview/index.html) e apresente a hero.
2. Role até fundamentos: cores, tipografia e superfícies.
3. Mostre botões e cards.
4. Demonstre o range de tempo de tela e a seleção de emoção.
5. Mostre o check-in, os cinco hábitos e a barra de progresso.
6. Apresente o dashboard e explique que os dados reais vêm do armazenamento local do navegador.
7. Termine com o fluxo da autoavaliação e os cuidados de acessibilidade.

## Observações técnicas importantes

- A página de preview é uma biblioteca visual independente e demonstrativa. Não está conectada ao armazenamento real do site e não salva respostas.
- Os valores de dados mostrados no gráfico são ilustrativos.
- Os arquivos da aplicação original não foram modificados por este Design System.
- O código-fonte de referência foi analisado na branch `main`; o material de documentação e preview foi criado na branch `design-system`.
