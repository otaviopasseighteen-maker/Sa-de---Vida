# Saúde & Vida — Design System

Sistema de referência visual e de interface do produto **Saúde & Vida**. Esta versão organiza a identidade já presente no site e oferece uma biblioteca visual independente para consulta, validação e evolução consistente.

> **Escopo seguro:** todo o material deste Design System vive em `design-system/` na branch `design-system`. A demonstração não é importada pelo site, não altera os estilos existentes e não substitui os CSS atuais.

## Comece por aqui

- [Preview visual](preview/index.html) — catálogo navegável de cores, tipografia, componentes e padrões.
- [Tokens CSS](tokens.css) — variáveis de design de referência.
- [Fundamentos](foundations/) — cor, tipografia, espaçamento e efeitos.
- [Componentes](components/) — especificações, anatomia, variantes e estados.
- [Padrões de interface](patterns/) — composição de dashboard, wellness e screening.
- [Acessibilidade](accessibility/guidelines.md) — checklist de qualidade e inclusão.
- [Diretrizes gerais](guidelines.md) — regras de consistência e responsividade.

## Princípios

1. **Fidelidade:** documentar primeiro o que existe; não inventar uma nova identidade.
2. **Consistência:** usar tokens para reduzir decisões visuais divergentes.
3. **Clareza:** hierarquia visual, conteúdo legível e ações previsíveis.
4. **Acessibilidade:** foco visível, contraste, semântica e movimento reduzido.
5. **Responsividade:** padrões que funcionem em telas amplas e estreitas.
6. **Evolução segura:** documentação e preview independentes da aplicação principal.

## Identidade observada

- Tema escuro com fundos azulados quase pretos.
- Roxo como acento principal e verde-água como acento complementar.
- DM Sans para texto e Space Grotesk para títulos e números.
- Cards com superfícies escuras, contornos discretos e cantos arredondados.
- Gradientes e brilhos usados como detalhes, não como substitutos de hierarquia.

Os valores de referência estão em [tokens.css](tokens.css). Os arquivos originais analisados foram `index.html`, `style.css`, `wellness.css`, `dashboard.css` e `screening.css`.

## Estrutura

```text
design-system/
├── README.md
├── tokens.css
├── guidelines.md
├── foundations/
├── components/
├── patterns/
├── accessibility/
└── preview/
    └── index.html
```

## Como usar este material

- Consulte os fundamentos antes de criar uma nova tela.
- Prefira os tokens existentes em vez de valores avulsos.
- Escolha componentes e padrões documentados antes de criar variantes.
- Registre novos estados e decisões quando um componente evoluir.
- Valide o resultado no preview e em larguras móveis.
- Não conecte este material à aplicação principal sem uma tarefa específica e revisão.

## Limites conhecidos

Este pacote é uma documentação e uma biblioteca visual de referência. Não é ainda uma biblioteca de componentes de produção, não contém testes automatizados integrados ao site e não altera o comportamento funcional das páginas existentes.
