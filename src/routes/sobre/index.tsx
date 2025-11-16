import Title from "@/components/ui/textos/Title";
import Subtitle from "@/components/ui/textos/Subtitle";
import { Text } from "@/components/ui/textos/Text";
import { CheckCircle2, Target, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground py-20 px-6 text-start">
      {/* Header */}
      <section className="max-w-5xl mx-auto flex flex-col gap-4 mb-16">
        <Title>Sobre o Skills Match</Title>
        <Text
          size="lg"
          colors="mutedForeground"
          className="text-lg md:text-2xl mb-8"
        >
          Conectando autoconhecimento, educação e empregabilidade em um só
          lugar.
        </Text>
      </section>

      {/* Problema */}
      <section className="max-w-5xl mx-auto mb-20 bg-white rounded-2xl shadow-md p-10 ">
        <Subtitle position="left">O Problema</Subtitle>

        <ul className="mt-6 space-y-4">
          {[
            "Milhares de jovens e profissionais enfrentam dúvidas sobre qual profissão seguir.",
            "A maioria dos testes vocacionais é genérica e não reflete soft e hard skills reais.",
            "O mercado busca perfis híbridos e personalizados, mas não há ferramenta confiável que conecte tudo isso.",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 ">
              <div
                className="w-2 h-2 bg-primary rounded-full relative
                before:content-[''] before:absolute before:inset-0 
              before:bg-purple-400 before:rounded-full before:opacity-30 
                before:scale-[2.2] before:animate-pulse"
              ></div>

              <Text className="max-w-64 md:max-w-none" colors="mutedForeground">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </section>

      {/* Solução */}
      <section className="max-w-5xl mx-auto mb-20">
        <Subtitle>Nossa Solução</Subtitle>

        <Text colors="mutedForeground" className="mt-8">
          O Skills Match é uma plataforma digital de autodescoberta profissional
          com IA que cruza dados de habilidades comportamentais e técnicas para
          recomendar carreiras, cursos e oportunidades alinhadas ao perfil do
          usuário.
        </Text>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: <Target className="text-primary" size={28} />,
              title: "Teste Personalizado",
              text: "IA que analisa seu comportamento, interesses e aptidões.",
            },
            {
              icon: <Sparkles className="text-primary" size={28} />,
              title: "Insights Profundos",
              text: "Mapa completo de competências e recomendações.",
            },
            {
              icon: <Users className="text-primary" size={28} />,
              title: "Impacto Social",
              text: "Reduz escolhas equivocadas e evasão escolar.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-3 border"
            >
              <div className="bg-primary/10 p-3 rounded-xl w-fit">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <Text colors="mutedForeground">{item.text}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Missão + Diferencial */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        <div className="bg-primary/5 border border-transparent hover:border-primary/50 transform transition-all 
        duration-500 p-8 rounded-2xl shadow-sm  hover:shadow-lg hover:shadow-primary/20">
          <Subtitle>Nossa Missão</Subtitle>
          <Text colors="mutedForeground" className="mt-4">
            Empoderar jovens e profissionais a fazer escolhas de carreira mais
            conscientes e alinhadas ao seu potencial, democratizando o acesso à
            orientação vocacional com IA.
          </Text>
        </div>

        <div className="bg-primary/5 border border-transparent hover:border-primary/50 transform transition-all 
        duration-500 p-8 rounded-2xl shadow-sm  hover:shadow-lg hover:shadow-primary/20">
          <Subtitle>Nosso Diferencial</Subtitle>

          <ul className="mt-4 space-y-3 text-sm">
            {[
              "IA personalizada que entende o perfil humano individualmente.",
              "Interface acessível e linguagem acolhedora.",
              "Precisão que cresce conforme mais usuários utilizam a plataforma.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 size={18} className="text-primary mt-1" />
                <Text className="max-w-64 md:max-w-none" colors="foreground">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="max-w-5xl mx-auto mb-20 bg-white rounded-2xl shadow-md p-10">
        <Subtitle position="left">Modelo de Negócio</Subtitle>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="font-bold text-xl mb-2">Gratuito</h3>
            <Text colors="mutedForeground">
              Teste básico e resultados iniciais para democratizar o acesso.
            </Text>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 text-primary">Premium</h3>
            <Text colors="mutedForeground">
              Relatório completo, mapa de competências e acompanhamento
              contínuo.
            </Text>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">B2B</h3>
            <Text colors="mutedForeground">
              Soluções para escolas, empresas e hubs de talentos.
            </Text>
          </div>
        </div>
      </section>
    </div>
  );
}
