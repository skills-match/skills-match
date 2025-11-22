import { IPlan } from "@/interfaces/IPlan";

const plans: IPlan[] = [
    {
      id: "free",
      title: "Gratuito",
      subtitle: "Perfeito para começar sua jornada",
      price: "R$ 0",
      features: [
        "Teste Vocacional básico",
        "Resultados iniciais",
        "Acesso a recursos essenciais",
      ],
      buttonLabel: "Começar Grátis",
      borderColor: "border-transparent",
      highlight: false,
    },
    {
      id: "premium",
      title: "Work Match Premium",
      subtitle: "Para quem busca orientação profunda",
      price: "R$ 19,90",
      features: [
        "Tudo do plano gratuito",
        "Relatório Work Match completo",
        "Recomendações ilimitadas",
        "Acompanhamento contínuo",
        "Suporte prioritário",
      ],
      buttonLabel: "Upgrade",
      borderColor:
        "border-2 border-transparent bg-gradient-to-r from-primary to-secondary p-[2px]",
      highlight: true,
    },
  ];

  export default plans;