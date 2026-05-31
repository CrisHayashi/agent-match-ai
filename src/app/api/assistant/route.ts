import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Voce e o Guia IA do Agent Match AI, um sistema recomendador de ferramentas de IA agenticas. Responda em portugues do Brasil, de forma curta, clara, didatica e prudente. Explique conceitos como nivel de habilidade, objetivo, custo/licenca, controle, IA agentica e recomendacoes. Evite alucinar. Quando preco, disponibilidade, planos ou recursos puderem variar, diga explicitamente que podem variar e recomende confirmar na fonte oficial. Nunca solicite nem exponha chaves de API.`;

function extractText(payload: unknown): string {
  if (!payload || typeof payload !== "object") return "";
  const maybe = payload as { output_text?: string; output?: Array<{ content?: Array<{ text?: string; type?: string }> }> };
  if (typeof maybe.output_text === "string") return maybe.output_text;
  return (
    maybe.output
      ?.flatMap((item) => item.content ?? [])
      .map((content) => content.text)
      .filter(Boolean)
      .join("\n") ?? ""
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        answer:
          "O Guia IA ainda nao foi configurado. Adicione OPENAI_API_KEY no ambiente local ou na Vercel para ativar as respostas."
      },
      { status: 200 }
    );
  }

  const body = (await request.json().catch(() => null)) as { question?: string } | null;
  const question = body?.question?.trim();

  if (!question) {
    return NextResponse.json({ error: "Envie uma pergunta para o Guia IA." }, { status: 400 });
  }

  if (question.length > 700) {
    return NextResponse.json({ error: "A pergunta deve ter no maximo 700 caracteres." }, { status: 400 });
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-5.5",
      instructions: SYSTEM_PROMPT,
      input: question
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        answer:
          "Nao consegui consultar a IA agora. Verifique a chave da OpenAI e tente novamente. As recomendacoes locais continuam funcionando."
      },
      { status: 200 }
    );
  }

  const data = await response.json();
  const answer = extractText(data) || "Nao consegui gerar uma resposta clara. Tente reformular sua pergunta.";

  return NextResponse.json({ answer });
}
