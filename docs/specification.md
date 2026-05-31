# Agent Match AI - Especificacao SDD

## Visao geral

O Agent Match AI e um sistema web recomendador de ferramentas de IA agenticas. O usuario responde perguntas guiadas sobre perfil, objetivo, custo, controle, area de uso, resultado esperado, integracao e contexto. O sistema calcula compatibilidade entre as respostas e uma base local de ferramentas reais, exibindo recomendacoes personalizadas com score percentual.

## Comportamento do sistema

1. A home apresenta o projeto, beneficios, ferramentas em destaque e convite para iniciar o diagnostico.
2. O diagnostico usa um wizard multi-step com opcoes visiveis em cards clicaveis.
3. O motor de recomendacao compara respostas do usuario com atributos das ferramentas.
4. O resultado apresenta de 3 a 5 recomendacoes principais, resumo do perfil e score.
5. A comparacao permite analisar de 2 a 3 ferramentas, iniciando com as mais recomendadas.
6. O Guia IA fica disponivel apos as perguntas obrigatorias e tambem como botao flutuante.

## Entradas do usuario

- Nivel de habilidade: Acessivel, Desafio ou Complexo.
- Objetivo do projeto: Colaboracao, Prototipagem ou Automacao.
- Custo/licenca: Open-source, Proprietario ou Tanto faz.
- Controle: Solucao pronta, Flexibilidade total ou Equilibrio.
- Area de uso: Desenvolvimento, Design, Negocios, Atendimento, Pesquisa ou Automacao.
- Resultado esperado: Codigo, Prototipos, Textos, Automacao, Integracoes ou Analises.
- Nivel de integracao: Nenhuma, Simples, APIs ou Avancada.
- Perfil: Iniciante, Intermediario, Tecnico ou Corporativo.
- Perguntas livres no Guia IA.

## Processamento

O sistema usa um motor local de score. Cada ferramenta possui atributos normalizados como nivel recomendado, objetivo principal, nivel de controle, tipo de licenca, tags, perfil ideal e score base. As respostas do usuario somam pontos quando combinam com esses atributos. O valor final e convertido em percentual e ordenado em ordem decrescente.

## Saidas esperadas

- Lista com 3 a 5 ferramentas recomendadas.
- Percentual de compatibilidade.
- Explicacao curta de melhor uso, diferencial competitivo, preco/licenca, modelos suportados e tags.
- Comparacao entre ferramentas selecionadas.
- Respostas didaticas do Guia IA usando a OpenAI Responses API no backend.

## IA assistente

O Guia IA responde perguntas abertas sobre conceitos, criterios do questionario e interpretacao das recomendacoes. Ele deve responder de forma curta, clara, didatica e prudente. Quando informacoes como precos, planos ou disponibilidade puderem variar, a resposta deve explicitar essa variacao.

## Arquitetura

- `src/app`: App Router, pagina principal e API Routes.
- `src/components`: componentes reutilizaveis da interface.
- `src/data`: base local editavel de ferramentas.
- `src/lib`: tipos, perguntas e motor de recomendacao.
- `docs`: especificacoes SDD.

Nao ha banco de dados, autenticacao ou Docker. A chave da OpenAI fica apenas em `OPENAI_API_KEY` no backend.
