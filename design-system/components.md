# Catálogo de componentes reais — Saúde & Vida

Este catálogo foi montado a partir da estrutura efetiva de `index.html` e dos comportamentos de `script.js`, `wellness.js`, `dashboard.js` e `screening.js`. Os componentes abaixo representam a interface que existe no projeto, não uma biblioteca genérica.

## 1. Estrutura global e navegação

| Componente | Implementação observada | Comportamento |
|---|---|---|
| Cabeçalho fixo | `.site-header` | Fica no topo, com fundo translúcido e blur |
| Marca | `.brand`, `.brand-mark` | Símbolo de mais em contorno verde-água e lettering |
| Navegação | `.nav` | Âncoras para as seções da página |
| Menu mobile | `.menu-toggle`, `.nav.open` | Abre/fecha a navegação em viewport menor |
| Hero | `.hero`, `.hero-content` | Mensagem principal e duas ações |
| Órbita decorativa | `.hero-orbit`, `.orbit`, `.hero-glow` | Elementos circulares e brilhos decorativos |

## 2. Botões e links

| Variante | Classes | Aparência e uso |
|---|---|---|
| Primário | `.button.primary` | Fundo branco, texto escuro; ação de maior prioridade |
| Ghost | `.button.ghost` | Transparente com borda discreta; ação secundária |
| Link de card | `.info-card a` | Link textual com seta |
| Envio de check-in | `.wellness-submit` | Botão branco de largura total |
| Navegação de questionário | `.screening-controls button` | Voltar e avançar; avançar usa estilo branco |

**Atenção:** o roxo é acento de identidade; não é a cor do botão primário atual.

## 3. Cards e conteúdo

- **Cards informativos:** `.info-card`, com número, ícone, título, descrição e link.
- **Cards de wellness:** `.wellness-card`, com formulário ou hábitos.
- **Card de estatística:** `.dashboard-stat`, com rótulo, valor e detalhe.
- **Card de resultado:** `.screening-result-card`, com área, pontuação, indicador e orientação.
- **Painel de uso:** `.usage-panel`, com explicação, range e mensagem contextual.
- **Painel de pesquisa:** `.screening-shell`, recipiente do questionário e dos resultados.

## 4. Componentes de reflexão e seleção

| Componente | Classes/IDs | Quantidade ou opções |
|---|---|---|
| Controle de tempo de tela | `#screen-range`, `#screen-output` | 0 a 16 horas |
| Seleção de emoção | `.emotion` | 6: ansiedade, cansaço, estresse, solidão, desânimo e tranquilidade |
| Resposta contextual | `#emotion-response` | Mensagem dinâmica por emoção |
| Seleção de humor do dia | `.mood-choice` | 6: muito bem, bem, mais ou menos, em baixo, estressado(a), cansado(a) |
| Campo de sono | `#wellness-sleep` | Número de horas, opcional |
| Campo de disposição | `#wellness-energy` | Escala de 1 a 5, opcional |
| Nota pessoal | `#wellness-note` | Texto opcional, máximo de 280 caracteres |
| Feedback de envio | `#wellness-status` | Confirmação ou erro com anúncio acessível |

## 5. Hábitos e histórico

- **Lista de hábitos:** `#habit-list`, com cinco checkboxes:
  1. Beber água ao longo do dia.
  2. Fazer algum movimento.
  3. Fazer uma pausa sem tela.
  4. Conversar com alguém ou ter um momento offline.
  5. Preparar uma rotina para descansar.
- **Progresso diário:** `#habit-progress`, preenchimento em gradiente e valor percentual acessível.
- **Resumo de hábitos:** `#habit-progress-text`.
- **Histórico:** `#wellness-history-list`, últimos sete registros.
- **Privacidade:** os dados do check-in e hábitos ficam em armazenamento local do navegador.

## 6. Dashboard semanal

| Componente | Implementação | Função |
|---|---|---|
| Cabeçalho | `.dashboard-heading` | Título e período da semana |
| Período | `.dashboard-period` | Intervalo de datas |
| Estatísticas | `.dashboard-stats` / `.dashboard-stat` | Check-ins, sono médio e hábitos |
| Gráfico | `.week-chart` / `.week-day` | Barras dos cinco hábitos nos últimos sete dias |
| Estado vazio | `.dashboard-empty` | Orientação quando ainda não há dados |
| Nota | `.dashboard-footnote` | Contexto e limite dos dados |

O painel calcula informações a partir dos registros locais; não apresenta dados reais no preview do Design System.

## 7. Autoavaliação emocional

- **Questionário:** 18 perguntas organizadas em seis áreas:
  1. Humor e interesse.
  2. Ansiedade e preocupação.
  3. Estresse e sobrecarga.
  4. Sono e descanso.
  5. Conexão social.
  6. Energia e concentração.
- **Escala de resposta:** Nunca, Poucos dias, Vários dias, Quase todos os dias.
- **Progresso:** pergunta atual e total de perguntas.
- **Navegação:** anterior e próxima, com avanço bloqueado até selecionar uma resposta.
- **Pergunta de segurança:** etapa separada, sem pontuação.
- **Resultado:** seis cards de área, indicadores, orientações e próximos passos.
- **Ações finais:** refazer pesquisa e imprimir/salvar PDF.

O próprio projeto informa que a autoavaliação é educativa, autoral e não validada clinicamente. Não deve ser apresentada como diagnóstico.

## 8. Conteúdo editorial e encerramento

- **Seção de entendimento:** três cards — cérebro & recompensa, atenção & telas, sono & ansiedade.
- **Grade de equilíbrio:** quatro pilares — movimento, alimentação, sono e vida offline.
- **CTA final:** mensagem de encerramento e retorno ao início.
- **Rodapé:** marca, descrição do projeto e status de desenvolvimento.

## Estados transversais a especificar

Padrão, hover, foco visível, selecionado/pressionado, desabilitado, carregando, vazio, sucesso e erro. Aplicar apenas os estados pertinentes a cada componente.

## Fonte de verdade

Arquivos analisados na branch `main`: `index.html`, `style.css`, `wellness.css`, `dashboard.css`, `screening.css`, `script.js`, `wellness.js`, `dashboard.js` e `screening.js`.

Este documento descreve o produto existente. O preview é uma demonstração visual isolada; não é importado pelo site nem substitui os arquivos originais.
