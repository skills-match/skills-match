import { useEffect, useState } from "react";
import { Text } from "../ui/textos/Text";
import { ICareerResult } from "@/interfaces/ICareer-result";
import { BrainCircuit, CheckCircle, Delete, Forward, MessageSquareX, TrendingUp } from "lucide-react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const CareerResult = () => {

  const navigate = useNavigate();

  const [careerData, setCareerData] = useState<ICareerResult | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("careerResult");
    if (data) {
      setCareerData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="bg-surface lg:w-[500px] h-[600px] overflow-scroll no-scrollbar overflow-x-clip rounded-xl p-8 shadow-md border border-border w-full ">
      <div className="flex justify-between items-center">
      <Text size="lg" colors="primary" className="text-2xl font-bold mb-3">
        Resultados da Análise
      </Text>
      {careerData && ( 
        <button onClick={() => {
            localStorage.removeItem("careerResult");
            window.location.reload();
          }}>
             <Delete className="text-destructive" />
          </button>
      )}
      </div>

      {!careerData ? (
        <div className="flex flex-col justify-center gap-5 ">
          <Text size="md" colors="mutedForeground">
            Você ainda não possui nenhum resultado salvo.
          </Text>
          <Button onClick={() => navigate("/etapas")} variant="outline" size="md" className="w-44 flex gap-2 items-center justify-center"> Criar agora <Forward /> </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 ">
          <div>
            <Text size="lg" colors="foreground" className="font-semibold" >
              Melhor carreira
            </Text>
            <Text colors="mutedForeground" className="flex gap-2 items-center"><TrendingUp size={20} className="text-primary"/> {careerData.best_career}</Text>
          </div>
          <div>
          <Text size="lg" colors="foreground" className="font-semibold" >
              Skills necessárias
            </Text>
            <ul className="list-disc list-inside text-muted-foreground">
              {careerData.required_skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Skills do usuário */}
          <div>
          <Text size="lg" colors="foreground" className="font-semibold" >
              Suas skills
            </Text>
            <ul className="list-disc list-inside text-muted-foreground">
              {careerData.user_skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Recomendações */}
          <div>
          <Text size="lg" colors="foreground" className="font-semibold" >
              Compatibilidade
            </Text>
            <div className="flex flex-col gap-3 mt-3">
              {careerData.recommendations.map((item, i) => (
                <div key={i} className="rounded-lg flex items-center">
                  <CheckCircle size={20} className="text-primary" />
                  <div className="flex flex-col gap-1 ml-3 max-w-64">
                    <Text size="md" colors="foreground" className="font-semibold">{item.career}</Text>
                    <Text size="sm" colors="mutedForeground" className="text-mutedForeground text-sm">
                      Compatibilidade: {item.compatibility.toFixed(2)}%
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerResult;
