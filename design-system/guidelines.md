# Diretrizes de uso

## Identidade e hierarquia

A interface usa tema escuro, superfícies azuladas quase pretas, texto claro e acentos roxo e verde-água. Preserve a hierarquia: título principal, contexto, conteúdo e ação. Use gradientes, brilhos e elementos orbitais com moderação.

## Tokens

Consulte [tokens.css](tokens.css) para cores, tipografia, escala de espaçamento, raios, sombras, layout e movimento. Os tokens são referência para novas implementações; não substituem automaticamente os valores dos estilos atuais.

## Tipografia

- **DM Sans:** texto corrido, rótulos, descrições e conteúdo.
- **Space Grotesk:** títulos, marca e números em destaque.
- Mantenha linhas confortáveis e evite parágrafos longos em cards estreitos.

## Superfícies e composição

- Cards usam superfícies escuras e contornos sutis.
- Agrupe informações relacionadas.
- Reserve o roxo para a ação principal e destaques; use o verde-água como apoio.
- Diferencie ações primárias e secundárias.
- Evite sombras ou gradientes que prejudiquem o contraste.

## Responsividade

Os estilos existentes incluem adaptações próximas de 850px e 520px. Esses valores são referências observadas, não uma exigência rígida para toda nova tela.

- Reorganize grades em uma coluna quando necessário.
- Evite rolagem horizontal acidental.
- Preserve áreas de toque confortáveis.
- Verifique textos longos, formulários e navegação em viewport estreita.

## Estados

Para componentes interativos, especifique padrão, hover, foco visível, pressionado, selecionado, desabilitado, carregando, erro e sucesso quando aplicável. Não dependa apenas de cor para comunicar estado.

## Acessibilidade

Siga [accessibility/guidelines.md](accessibility/guidelines.md): semântica, teclado, rótulos, contraste e movimento reduzido.

## Regra de preservação

Este material não deve ser importado pelo site atual sem uma tarefa específica. Não altere HTML, CSS, JavaScript, imagens ou configurações da aplicação principal apenas para alinhar a implementação à documentação.
