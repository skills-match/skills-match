import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/textos/Title";
import { ArrowBigRight, ArrowRightIcon, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import highlights from "@/data/highlights";
import { steps } from "@/data/steps";
import Subtitle from "@/components/ui/textos/Subtitle";
import { Text } from "@/components/ui/textos/Text";
import Features from "@/components/section/Features";
import Plans from "@/components/section/Plans";

export const Home = () => {
  
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-full bg-background text-gray-900 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 gap-8 ">
      <span className="flex gap-2 bg-accent/20 p-2 px-5 items-center justify-center text-accent font-semibold rounded-full border "> <BrainCircuit size={20} className="text-accent" /> Orientação com AI</span>

        <div className="max-w-xl md:max-w-3xl flex flex-col items-center justify-center gap-3 md:gap-6 flex-wrap">
          <Title>Descubra o caminho certo para sua carreira</Title>
          <Text colors="mutedForeground" className="text-lg md:text-2xl mb-8">
          O Skills Match usa IA para te conectar com a profissão ideal com base nas suas habilidades. Teste agora e descubra seu potencial.
          </Text>
          <div className="flex gap-2 iterms-center justify-center flex-wrap">
             <Button size="lg" className="flex gap-2 items-center justify-center" onClick={() => navigate("/registrar")}>Comece agora <i> <ArrowRightIcon size={20} /> </i></Button>
             <Button size="md" variant="outline" onClick={() => navigate("/sobre")}>Saiba Mais</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <Subtitle>Como funciona</Subtitle>
        <div className="grid md:grid-cols-3 gap-8 mt-12 flex-wrap">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition"
            >
              <span className="text-5xl font-bold text-primary mb-4">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <Text colors="mutedForeground" size="md">{step.text}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <Features />
      <Plans />

      {/* CTA final */}
      <section className="py-20 px-6 text-center">
        <Subtitle>
        Encontre o que te move
        </Subtitle>
        <Text colors="mutedForeground" size="lg" className="mb-8 max-w-2xl mx-auto">
        Teste agora com Skills Match e descubra a carreira perfeita para você.
        </Text>
        <Button onClick={() => navigate("/registrar")}>Testar agora</Button>
      </section>
    </div>
  );
};

export default Home;
