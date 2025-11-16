import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Title from "@/components/ui/textos/Title";
import { Text } from "@/components/ui/textos/Text";

export default function SkillsMatchAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const items = [
    {
      question: "Como funciona a orientação do Skills Match?",
      answer:
        "Usamos IA para analisar seu perfil, suas habilidades e seus interesses. Com isso, sugerimos caminhos profissionais que realmente combinam com você.",
    },
    {
      question: "As recomendações são confiáveis?",
      answer:
        "Sim! Todas as sugestões são geradas com base em modelos de IA atualizados e revisadas com métodos usados por especialistas em carreira.",
    },
    {
      question: "O que está incluído no plano gratuito?",
      answer:
        "Você recebe o teste vocacional completo, uma análise inicial do seu perfil e as primeiras recomendações de carreira para começar sua jornada.",
    },
    {
      question: "O plano Premium vale a pena?",
      answer:
        "O Premium desbloqueia análises profundas, relatórios detalhados, comparações de carreira, acompanhamento mensal e sugestões mais precisas para o seu perfil.",
    },
    {
      question: "Preciso ter experiência profissional?",
      answer:
        "Não! O Skills Match foi criado para ajudar tanto iniciantes quanto pessoas que querem mudar de área.",
    },
    {
      question: "Quanto tempo demora para receber minhas recomendações?",
      answer:
        "O processo é imediato. Assim que você finaliza a análise, a IA gera suas sugestões automaticamente.",
    },
    {
      question: "Posso refazer o teste vocacional?",
      answer:
        "Sim, você pode refazer quando quiser. Sua jornada evolui, e suas recomendações também podem evoluir com você.",
    }
  ];
  

  return (
    <div className="w-full flex justify-center px-4 py-20">

      <div className="w-full max-w-5xl">

        {/* TÍTULO */}
        <div className="text-start mb-8">
          <Title>
           FAQ
          </Title>
           <Text
               size="lg"
                    colors="mutedForeground"
                    className="text-lg md:text-2xl mb-20"
                  >
              Encontre respostas rápidas sobre como usar a plataforma e aproveitar ao máximo seus recursos.
                  </Text>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-xl transition-all duration-300 
              hover:border-primary/40 hover:shadow-sm bg-background"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-base font-medium text-foreground">
                  {item.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    open === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-40 opacity-100 px-5 pb-5"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
