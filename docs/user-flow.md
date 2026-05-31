# Fluxo do usuario

## Jornada principal

1. Usuario acessa a landing page.
2. Usuario entende proposta, beneficios e ferramentas cobertas.
3. Usuario clica em "Comecar diagnostico".
4. Sistema rola suavemente para o wizard.
5. Usuario responde quatro perguntas obrigatorias.
6. Sistema exibe acesso estrategico ao Guia IA.
7. Usuario pode tirar duvidas ou continuar.
8. Usuario responde perguntas complementares.
9. Sistema calcula recomendacoes.
10. Usuario visualiza resultados, score e resumo do perfil.
11. Usuario compara ferramentas recomendadas.
12. Usuario pode refazer o diagnostico.

## Fluxo do Guia IA

1. Usuario clica em "Guia IA".
2. Painel lateral estilo chat e aberto.
3. Usuario digita uma pergunta livre.
4. Frontend envia a pergunta para `/api/assistant`.
5. Backend chama a OpenAI Responses API com `gpt-5.5`.
6. Sistema retorna resposta curta e didatica.

## Fluxo de comparacao

1. Comparacao inicia com as 2 ou 3 melhores recomendacoes.
2. Usuario pode trocar ferramentas por uma lista buscavel.
3. Sistema bloqueia repeticoes.
4. Desktop exibe tabela horizontal.
5. Mobile exibe cards empilhados.

## Navegacao

- Header fixo com ancora para Home, Funcionamento, Diagnostico, Comparacao e SDD.
- CTA principal inicia diagnostico.
- Footer apresenta tecnologias, creditos e link placeholder para GitHub.
