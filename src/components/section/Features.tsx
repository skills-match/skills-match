import { Brain, CheckCircle, UserCheck, Zap } from "lucide-react";

import FeaturesCard from "./Features-card";
import Subtitle from "../ui/textos/Subtitle";

const Features = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <Subtitle>Recursos Principais</Subtitle>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <FeaturesCard
          text="Teste inteligente que analisa comportamento, interesses e aptidões em poucos segundos."
          icon={<Brain className="w-6 h-6 text-primary" />}
        >
          {" "}
          Teste Vocacional com IA{" "}
        </FeaturesCard>
        <FeaturesCard
          text="Mapa completo de soft e hard skills com recomendações personalizadas."
          icon={<UserCheck className="w-6 h-6 text-primary" />}
        >
          {" "}
          Análise de Skills{" "}
        </FeaturesCard>
        <FeaturesCard
          text="Carreiras, cursos e oportunidades recomendados baseados no seu perfil único."
          icon={<Zap className="w-6 h-6 text-primary" />}
        >
          {" "}
          Recomendações em Tempo Real{" "}
        </FeaturesCard>
        <FeaturesCard
          text="Painel de evolução de habilidades e progresso na sua jornada profissional."
          icon={<CheckCircle className="w-6 h-6 text-primary" />}
        >
          {" "}
          Acompanhamento Contínuo{" "}
        </FeaturesCard>
      </div>
    </section>
  );
};

export default Features;
