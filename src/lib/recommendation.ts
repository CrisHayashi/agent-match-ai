import { agenticTools } from "@/data/agenticTools";
import { AgenticTool, Recommendation, UserAnswers } from "./types";

const tagMap: Record<keyof UserAnswers, string> = {
  skillLevel: "",
  projectGoal: "",
  licensePreference: "",
  controlPreference: "",
  usageArea: "",
  expectedResult: "",
  integrationLevel: "",
  userProfile: ""
};

const integrationTags: Record<UserAnswers["integrationLevel"], string[]> = {
  nenhuma: ["chat", "editor", "low-code", "app-builder"],
  simples: ["low-code", "automacao", "integracoes", "workspace"],
  apis: ["api", "framework", "integracoes", "rag"],
  avancada: ["framework", "api", "multi-agent", "self-hosted", "automacao"]
};

const licenseMatches = (tool: AgenticTool, preference: UserAnswers["licensePreference"]) => {
  if (preference === "tanto-faz") return true;
  if (preference === "open-source") return tool.licenseType === "Open-source";
  return tool.licenseType === "Proprietario" || tool.licenseType === "Freemium" || tool.licenseType === "Depende do uso";
};

const hasAnyTag = (tool: AgenticTool, values: string[]) => values.some((value) => tool.tags.includes(value));

export function getRecommendations(answers: UserAnswers, limit = 5): Recommendation[] {
  return agenticTools
    .map((tool) => {
      let points = tool.baseScore;
      const reasons: string[] = [];

      if (tool.recommendedLevel.includes(answers.skillLevel)) {
        points += 12;
        reasons.push("nivel de habilidade compativel");
      }

      if (tool.mainGoal.includes(answers.projectGoal)) {
        points += 14;
        reasons.push("objetivo alinhado");
      }

      if (licenseMatches(tool, answers.licensePreference)) {
        points += 12;
        reasons.push("custo/licenca adequado");
      }

      if (tool.controlLevel.includes(answers.controlPreference)) {
        points += 12;
        reasons.push("nivel de controle alinhado");
      }

      if (tool.tags.includes(answers.usageArea)) {
        points += 10;
        reasons.push("area de uso correspondente");
      }

      if (tool.tags.includes(answers.expectedResult)) {
        points += 10;
        reasons.push("resultado esperado compativel");
      }

      if (hasAnyTag(tool, integrationTags[answers.integrationLevel])) {
        points += 8;
        reasons.push("integracao coerente");
      }

      if (tool.idealProfile.includes(answers.userProfile)) {
        points += 10;
        reasons.push("perfil ideal semelhante");
      }

      const matchScore = Math.min(100, Math.round((points / 170) * 100));

      return {
        ...tool,
        matchScore,
        reasons: reasons.slice(0, 4)
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore || b.baseScore - a.baseScore)
    .slice(0, limit);
}

export function getToolById(id: string) {
  return agenticTools.find((tool) => tool.id === id);
}

export { tagMap };
