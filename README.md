# Agent Match AI

Sistema recomendador de ferramentas de IA agenticas desenvolvido com **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **OpenAI GPT-5.5**, **Responses API** e **SDD - Specification Driven Development**.

O objetivo do projeto e ajudar estudantes, profissionais e equipes a escolher ferramentas de IA agenticas com menos complexidade. O usuario responde um diagnostico guiado e recebe recomendacoes personalizadas com score de compatibilidade, cards explicativos, comparacao e um Guia IA integrado.

## Tecnologias usadas

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- API Routes do Next.js
- OpenAI Responses API
- Modelo `gpt-5.5`
- Sem banco de dados
- Sem autenticacao
- Sem Docker

## Como rodar no notebook/computador

1. Instale o Node.js LTS.
2. Abra a pasta do projeto no terminal.
3. Instale as dependencias:

```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto:

```bash
OPENAI_API_KEY=sua_chave_da_openai
```

5. Rode o servidor local:

```bash
npm run dev
```

6. Acesse no navegador:

```text
http://localhost:3000
```

O sistema local funciona mesmo sem a chave da OpenAI para o diagnostico e recomendacoes. A chave e necessaria para ativar as respostas do **Guia IA**.

## Como configurar a OpenAI API

Copie o arquivo `.env.example` para `.env.local` e substitua o valor:

```bash
OPENAI_API_KEY=coloque_sua_chave_aqui
```

A chave fica protegida no backend. Ela nunca e enviada para o frontend. O endpoint responsavel pelo Guia IA fica em:

```text
src/app/api/assistant/route.ts
```

## Como testar

Use os comandos:

```bash
npm run type-check
npm run build
```

Fluxo recomendado de teste manual:

1. Acesse `http://localhost:3000`.
2. Clique em **Comecar diagnostico**.
3. Responda todas as perguntas.
4. Abra o **Guia IA** apos as perguntas obrigatorias.
5. Gere recomendacoes.
6. Compare 2 ou 3 ferramentas.
7. Teste em largura mobile pelo navegador.

## Como publicar na Vercel

1. Crie um repositorio no GitHub, por exemplo:

```text
https://github.com/CrisHayashi/agent-match-ai
```

2. Envie o projeto para o GitHub.
3. Entre em [https://vercel.com](https://vercel.com).
4. Clique em **Add New Project**.
5. Importe o repositorio `agent-match-ai`.
6. Em **Environment Variables**, adicione:

```text
OPENAI_API_KEY=sua_chave_da_openai
```

7. Clique em **Deploy**.

Depois do deploy, a Vercel gera um link publico. O sistema podera ser usado em qualquer navegador moderno, inclusive no celular, acessando esse link.

## Como testar no celular

Depois de publicar na Vercel:

1. Copie o link publico gerado pela Vercel.
2. Abra o link no navegador do celular.
3. Teste a landing page, o diagnostico, as recomendacoes, a comparacao e o Guia IA.

## Conceito SDD

SDD significa **Specification Driven Development**. Neste projeto, a especificacao vem antes da interface final. A pasta `/docs` descreve comportamento, entradas, processamento, saidas, regras de recomendacao, fluxo do usuario, IA assistente e arquitetura.

Arquivos criados:

- `docs/specification.md`
- `docs/requirements.md`
- `docs/recommendation-rules.md`
- `docs/user-flow.md`

## Estrutura de pastas

```text
agent-match-ai/
  docs/
    specification.md
    requirements.md
    recommendation-rules.md
    user-flow.md
  src/
    app/
      api/
        assistant/
          route.ts
      globals.css
      layout.tsx
      page.tsx
    components/
      AssistantChat.tsx
      CompareTable.tsx
      FloatingHelpButton.tsx
      Footer.tsx
      Header.tsx
      Hero.tsx
      Icon.tsx
      OptionCard.tsx
      ProgressBar.tsx
      RecommendationCard.tsx
      SDDInfoSection.tsx
      Sections.tsx
      Wizard.tsx
    data/
      agenticTools.ts
    lib/
      questions.ts
      recommendation.ts
      types.ts
  .env.example
  .gitignore
  package.json
  tailwind.config.ts
  tsconfig.json
```

## Base de ferramentas

A base local fica em:

```text
src/data/agenticTools.ts
```

Ela pode ser editada sem banco de dados. Cada ferramenta possui nome, empresa, categoria, modelos suportados, preco, licenca, nivel recomendado, objetivo, controle, diferencial, melhor uso, perfil ideal, tags, score base, observacao e link.

## Recomendacao por score

O sistema nao usa resultado fixo. O motor compara respostas do usuario com atributos das ferramentas e calcula compatibilidade percentual. As melhores recomendacoes sao ordenadas e exibidas em cards.

## Comandos Git sugeridos

Nao executei publicacao automaticamente. Para versionar e publicar manualmente:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

Exemplo de URL:

```text
https://github.com/CrisHayashi/agent-match-ai.git
```

## Observacoes de seguranca

- Nao coloque `OPENAI_API_KEY` no frontend.
- Nao publique `.env.local`.
- Configure variaveis sensiveis apenas no ambiente local ou na Vercel.
- Precos, planos e disponibilidade de ferramentas podem variar; confirme sempre nas fontes oficiais.
