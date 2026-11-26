# Inventário de componentes

Este inventário reúne os padrões visuais identificados em `index.html` e nos arquivos CSS. Ele descreve a interface existente; não significa que todos os itens já sejam componentes isolados ou reutilizáveis no código.

## Navegação e estrutura

- **Cabeçalho e navegação:** área superior de identificação e acesso às seções.
- **Menu mobile:** adaptação da navegação para telas menores.
- **Hero:** seção de apresentação com elementos decorativos, gradientes e brilhos orbitais.
- **Containers de conteúdo:** áreas alinhadas à largura máxima do layout.

## Elementos de ação

- **Botão primary:** ação principal, com destaque visual pela cor de acento.
- **Botão ghost:** ação secundária, com tratamento visual mais discreto.
- **Opções selecionáveis:** escolhas de emoções, humor e respostas de questionários.

## Superfícies e informação

- **Cards informativos:** painéis escuros com bordas sutis e cantos arredondados.
- **Cards wellness:** blocos de conteúdo relacionados ao bem-estar.
- **Cards de estatísticas:** apresentação de indicadores no dashboard.
- **Histórico de check-ins:** registros de atividades anteriores.
- **Grade de equilíbrio:** organização visual de informações e indicadores.

## Formulários e acompanhamento

- **Campos de formulário:** entradas de dados e controles associados.
- **Controle de tempo de tela:** controle deslizante/range e respectiva apresentação do valor.
- **Hábitos:** itens de acompanhamento de hábitos.
- **Barra de progresso:** representação visual de conclusão.
- **Questionário emocional:** opções de resposta, progresso e apresentação de resultado.

## Dashboard

- **Resumo semanal:** visão consolidada de dados.
- **Barras de dados:** comparação visual de valores.
- **Indicadores:** números e estatísticas em destaque.

## Estados que devem ser documentados em futuras implementações

Para cada componente interativo, registrar quando aplicável:

- padrão;
- hover;
- foco por teclado;
- pressionado/ativo;
- selecionado;
- desabilitado;
- carregando;
- erro e sucesso.

## Nota de implementação

Os componentes e estilos estão distribuídos entre `style.css`, `wellness.css`, `dashboard.css` e `screening.css`. Antes de extrair qualquer componente para uma biblioteca de código, conferir HTML, JavaScript e dependências para preservar o comportamento atual.
