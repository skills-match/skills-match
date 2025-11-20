import { StepsArray } from "@/interfaces/ISteps-form";

export const steps: StepsArray = [
  {
    id: 1,
    title: "Responda o Questionário",
    description: "Para a IA entender seu perfil",
    info: "Responda perguntas inteligentes sobre seus interesses, comportamentos, habilidades e preferências profissionais. Isso leva apenas 5–10 minutos e é fundamental para gerar recomendações precisas.",
    fields: [
      {
        id: "finishedSchool",
        question: "Já terminou a escola? Se não, está em qual ano?",
        type: "text",
        placeholder: "Ex: Sim / Não, estou no 3º ano",
      },
      {
        id: "professionalExperience",
        question: "Já tem alguma experiência profissional?",
        type: "text",
        placeholder: "Ex: Sim, trabalhei como atendente / Não",
      },
    ],
  },
  {
    id: 2,
    title: "Fale Sobre Suas Habilidades",
    description: "Para analisarmos seu perfil profissional",
    info: "Liste suas melhores Soft e Hard Skills para entendermos sua compatibilidade com carreiras.",
    fields: [
      {
        id: "softSkills",
        question: "Quais são as suas 5 principais Soft Skills?",
        type: "text",
        placeholder: "Ex: Comunicação, Liderança, Organização...",
      },
      {
        id: "hardSkills",
        question: "Quais são as suas 5 principais Hard Skills?",
        type: "text",
        placeholder: "Ex: Programação, Excel, Design...",
      },
    ],
  },
  {
    id: 3,
    title: "Avaliação Final",
    description: "Para concluir sua análise profissional",
    info: "Para finalizar, avalie sua performance profissional de forma sincera.",
    fields: [
      {
        id: "professionalScore",
        question: "De 0 a 10, o quão bom você é profissionalmente?",
        type: "number",
        placeholder: "Ex: 7",
      },
    ],
  },
];