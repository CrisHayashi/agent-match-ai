# Regras de recomendacao

## Estrutura do score

Cada ferramenta possui um `baseScore` entre 60 e 92. Esse valor representa maturidade geral, reconhecimento, utilidade e adequacao ampla. O motor adiciona pontos conforme as respostas do usuario combinam com atributos e tags da ferramenta.

## Pesos principais

- Nivel de habilidade compativel: +12 pontos.
- Objetivo principal compativel: +14 pontos.
- Custo/licenca compativel: +12 pontos.
- Nivel de controle compativel: +12 pontos.
- Area de uso compativel por tags: +10 pontos.
- Resultado esperado compativel por tags: +10 pontos.
- Nivel de integracao compativel: +8 pontos.
- Perfil compativel: +10 pontos.

O score final e normalizado para 0 a 100%.

## Criterios de decisao

- Ferramentas low-code e assistentes gerais tendem a combinar melhor com usuarios iniciantes e solucao pronta.
- Frameworks como LangGraph, CrewAI, AutoGen, LlamaIndex, Genkit e OpenAI Agents SDK combinam melhor com usuarios tecnicos, flexibilidade total e integracoes avancadas.
- Ferramentas de codigo como Cursor, Claude Code, Codex, Copilot, Cline, Aider, Continue.dev e Windsurf combinam melhor com desenvolvimento, codigo e prototipagem.
- Plataformas de automacao como Zapier Agents, n8n com IA, Dify e Flowise combinam melhor com negocios, automacao e integracoes.
- App builders como Bolt.new, v0, Replit Agent, Jules e Emergent combinam com prototipos, design e criacao rapida.

## Tratamento de incerteza

O sistema nao usa precos exatos quando eles podem variar. Campos de preco usam termos como Freemium, Plano pago, Open-source, Depende do uso ou Valores podem variar.
