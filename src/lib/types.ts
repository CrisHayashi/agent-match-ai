export type SkillLevel = "acessivel" | "desafio" | "complexo";
export type ProjectGoal = "colaboracao" | "prototipagem" | "automacao";
export type LicensePreference = "open-source" | "proprietario" | "tanto-faz";
export type ControlPreference = "solucao-pronta" | "flexibilidade-total" | "equilibrio";
export type UsageArea = "desenvolvimento" | "design" | "negocios" | "atendimento" | "pesquisa" | "automacao";
export type ExpectedResult = "codigo" | "prototipos" | "textos" | "automacao" | "integracoes" | "analises";
export type IntegrationLevel = "nenhuma" | "simples" | "apis" | "avancada";
export type UserProfile = "iniciante" | "intermediario" | "tecnico" | "corporativo";

export interface UserAnswers {
  skillLevel: SkillLevel;
  projectGoal: ProjectGoal;
  licensePreference: LicensePreference;
  controlPreference: ControlPreference;
  usageArea: UsageArea;
  expectedResult: ExpectedResult;
  integrationLevel: IntegrationLevel;
  userProfile: UserProfile;
}

export interface AgenticTool {
  id: string;
  name: string;
  company: string;
  category: string;
  shortDescription: string;
  supportedModels: string;
  price: string;
  licenseType: "Open-source" | "Proprietario" | "Freemium" | "Depende do uso";
  recommendedLevel: SkillLevel[];
  mainGoal: ProjectGoal[];
  controlLevel: ControlPreference[];
  competitiveDifferential: string;
  bestUse: string;
  idealProfile: UserProfile[];
  tags: string[];
  baseScore: number;
  note: string;
  link: string;
}

export interface Recommendation extends AgenticTool {
  matchScore: number;
  reasons: string[];
}
