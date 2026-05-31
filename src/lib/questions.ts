import {
  ControlPreference,
  ExpectedResult,
  IntegrationLevel,
  LicensePreference,
  ProjectGoal,
  SkillLevel,
  UsageArea,
  UserAnswers,
  UserProfile
} from "./types";

export type QuestionKey = keyof UserAnswers;

export interface Option<T extends string = string> {
  value: T;
  title: string;
  description: string;
  icon: string;
}

export interface Question<T extends string = string> {
  key: QuestionKey;
  title: string;
  description: string;
  requiredCore?: boolean;
  options: Option<T>[];
}

export const questions: Question[] = [
  {
    key: "skillLevel",
    title: "Qual e seu nivel de habilidade?",
    description: "Escolha o grau de complexidade que voce aceita enfrentar.",
    requiredCore: true,
    options: [
      { value: "acessivel" satisfies SkillLevel, title: "Acessivel", description: "Quero algo simples e guiado.", icon: "Sparkles" },
      { value: "desafio" satisfies SkillLevel, title: "Desafio", description: "Aceito aprender e configurar.", icon: "Gauge" },
      { value: "complexo" satisfies SkillLevel, title: "Complexo", description: "Tenho perfil tecnico e quero controle.", icon: "BrainCircuit" }
    ]
  },
  {
    key: "projectGoal",
    title: "Qual e o objetivo do projeto?",
    description: "Isso ajuda a separar assistentes, builders, agentes e frameworks.",
    requiredCore: true,
    options: [
      { value: "colaboracao" satisfies ProjectGoal, title: "Colaboracao", description: "Apoio em ideias, escrita, estudo ou equipe.", icon: "Users" },
      { value: "prototipagem" satisfies ProjectGoal, title: "Prototipagem", description: "Criar telas, apps ou codigo rapidamente.", icon: "Blocks" },
      { value: "automacao" satisfies ProjectGoal, title: "Automacao", description: "Executar fluxos, tarefas e integracoes.", icon: "Workflow" }
    ]
  },
  {
    key: "licensePreference",
    title: "Qual sua preferencia de custo/licenca?",
    description: "Nao usamos precos exatos quando eles podem variar.",
    requiredCore: true,
    options: [
      { value: "open-source" satisfies LicensePreference, title: "Open-source", description: "Prefiro codigo aberto ou hospedagem propria.", icon: "Unlock" },
      { value: "proprietario" satisfies LicensePreference, title: "Proprietario", description: "Aceito produto comercial pronto.", icon: "ShieldCheck" },
      { value: "tanto-faz" satisfies LicensePreference, title: "Tanto faz", description: "Quero a melhor combinacao geral.", icon: "Shuffle" }
    ]
  },
  {
    key: "controlPreference",
    title: "Quanto controle voce precisa?",
    description: "Controle define o quanto voce quer configurar, adaptar ou manter.",
    requiredCore: true,
    options: [
      { value: "solucao-pronta" satisfies ControlPreference, title: "Solucao pronta", description: "Quero usar com pouca configuracao.", icon: "Rocket" },
      { value: "flexibilidade-total" satisfies ControlPreference, title: "Flexibilidade total", description: "Quero construir e adaptar profundamente.", icon: "SlidersHorizontal" },
      { value: "equilibrio" satisfies ControlPreference, title: "Equilibrio", description: "Quero potencia sem complexidade excessiva.", icon: "Scale" }
    ]
  },
  {
    key: "usageArea",
    title: "Qual e a principal area de uso?",
    description: "Selecione o contexto mais importante para sua escolha.",
    options: [
      { value: "desenvolvimento" satisfies UsageArea, title: "Desenvolvimento", description: "Codigo, engenharia e revisao.", icon: "Code2" },
      { value: "design" satisfies UsageArea, title: "Design", description: "Interfaces, prototipos e UI.", icon: "Palette" },
      { value: "negocios" satisfies UsageArea, title: "Negocios", description: "Operacoes, vendas e produtividade.", icon: "BriefcaseBusiness" },
      { value: "atendimento" satisfies UsageArea, title: "Atendimento", description: "Suporte, chatbots e processos.", icon: "MessagesSquare" },
      { value: "pesquisa" satisfies UsageArea, title: "Pesquisa", description: "Analise, documentos e conhecimento.", icon: "Search" },
      { value: "automacao" satisfies UsageArea, title: "Automacao", description: "Fluxos, APIs e tarefas recorrentes.", icon: "GitBranch" }
    ]
  },
  {
    key: "expectedResult",
    title: "Que resultado voce espera gerar?",
    description: "O formato de saida muda muito a ferramenta ideal.",
    options: [
      { value: "codigo" satisfies ExpectedResult, title: "Codigo", description: "Arquivos, scripts ou apps.", icon: "FileCode2" },
      { value: "prototipos" satisfies ExpectedResult, title: "Prototipos", description: "Telas e MVPs navegaveis.", icon: "PanelTop" },
      { value: "textos" satisfies ExpectedResult, title: "Textos", description: "Conteudo, ideias e explicacoes.", icon: "TextCursorInput" },
      { value: "automacao" satisfies ExpectedResult, title: "Automacao", description: "Acoes executadas por agentes.", icon: "Bot" },
      { value: "integracoes" satisfies ExpectedResult, title: "Integracoes", description: "Conectar sistemas e APIs.", icon: "Cable" },
      { value: "analises" satisfies ExpectedResult, title: "Analises", description: "Sinteses, documentos e dados.", icon: "ChartNoAxesCombined" }
    ]
  },
  {
    key: "integrationLevel",
    title: "Qual nivel de integracao voce precisa?",
    description: "Pense em conexoes com ferramentas, APIs e sistemas externos.",
    options: [
      { value: "nenhuma" satisfies IntegrationLevel, title: "Nenhuma", description: "Uso direto no navegador ou editor.", icon: "MousePointerClick" },
      { value: "simples" satisfies IntegrationLevel, title: "Simples", description: "Algumas conexoes prontas.", icon: "Plug" },
      { value: "apis" satisfies IntegrationLevel, title: "APIs", description: "Preciso integrar com backend ou servicos.", icon: "Braces" },
      { value: "avancada" satisfies IntegrationLevel, title: "Avancada", description: "Fluxos robustos e customizados.", icon: "Network" }
    ]
  },
  {
    key: "userProfile",
    title: "Qual perfil descreve melhor voce ou sua equipe?",
    description: "Isso ajuda a equilibrar facilidade, controle e robustez.",
    options: [
      { value: "iniciante" satisfies UserProfile, title: "Iniciante", description: "Estou comecando agora.", icon: "GraduationCap" },
      { value: "intermediario" satisfies UserProfile, title: "Intermediario", description: "Ja uso IA e quero evoluir.", icon: "Compass" },
      { value: "tecnico" satisfies UserProfile, title: "Tecnico", description: "Tenho familiaridade com codigo.", icon: "TerminalSquare" },
      { value: "corporativo" satisfies UserProfile, title: "Corporativo", description: "Preciso de confiabilidade e escala.", icon: "Building2" }
    ]
  }
];
