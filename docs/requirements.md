# Requisitos do Agent Match AI

## Requisitos funcionais

- Exibir landing page moderna antes do questionario.
- Permitir diagnostico multi-step sem campos de texto livre.
- Usar cards clicaveis para todas as perguntas estruturadas.
- Calcular recomendacoes por score, sem resultado fixo hardcoded.
- Mostrar de 3 a 5 recomendacoes principais.
- Permitir comparar de 2 a 3 ferramentas.
- Iniciar comparacao com as ferramentas mais recomendadas.
- Impedir ferramentas repetidas na comparacao.
- Disponibilizar Guia IA apos as perguntas obrigatorias e como botao flutuante.
- Responder perguntas do Guia IA via endpoint `app/api/assistant/route.ts`.
- Manter `OPENAI_API_KEY` protegida no backend.

## Requisitos nao funcionais

- Next.js com App Router, React, TypeScript e Tailwind CSS.
- Sem banco de dados, autenticacao, Docker ou dependencias complexas.
- Projeto simples para estudantes iniciantes.
- Layout responsivo para desktop, tablet e celular.
- Pronto para deploy na Vercel.
- README didatico e `.env.example`.
- Documentacao SDD na pasta `docs`.

## Requisitos de seguranca

- Nunca expor variaveis de ambiente no frontend.
- Endpoint da IA deve validar entrada e limitar tamanho da pergunta.
- Mensagens do Guia IA devem evitar prometer precos, disponibilidade ou capacidades sem certeza.
- Links de ferramentas devem usar URLs oficiais conhecidas.

## Criterios de aceite

- `npm install` instala dependencias.
- `npm run dev` inicia em `http://localhost:3000`.
- `npm run build` compila sem erros.
- Interface apresenta landing, diagnostico, resultado, comparacao e secao SDD.
- Todas as ferramentas obrigatorias estao em `src/data/agenticTools.ts`.
- Deploy na Vercel pode gerar link publico acessivel em navegador moderno.
