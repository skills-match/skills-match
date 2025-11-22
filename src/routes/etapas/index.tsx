import Button from "@/components/ui/button/Button";
import InputSteps from "@/components/ui/input/Input-steps";
import { Text } from "@/components/ui/textos/Text";
import { steps } from "@/data/steps-form";
import { ICarrer, IFieldFormsData } from "@/interfaces/ICareer";
import { ICareerResult } from "@/interfaces/ICareer-result";
import { createDataForm } from "@/services/steps-service";
import { Forward } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const [messageError, setMessageError] = useState({
    firstStep: false,
    secondStep: false,
    thirdStep: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<IFieldFormsData & ICarrer>({
    finishedSchool: "",
    professionalExperience: "",
    softSkills: "",
    hardSkills: "",
    professionalScore: 0,

    skills: [],
    experience: [],
    education: [],
  });

  const [index, setIndex] = useState<number>(0);

  const step = steps[index];

  const navigate = useNavigate();

  const handleChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleNext = async () => {
    if (index === 0) {
      if (formData.finishedSchool === "" || formData.professionalExperience === "") {
        setMessageError({ ...messageError, firstStep: true });
        return;
      }
  
      setMessageError({ ...messageError, firstStep: false });
  
      setFormData((prev) => ({
        ...prev,
        education: [prev.finishedSchool, prev.professionalExperience],
      }));
    }
  
    if (index === 1) {
      if (formData.softSkills === "" || formData.hardSkills === "") {
        setMessageError({ ...messageError, secondStep: true });
        return;
      }
  
      setMessageError({ ...messageError, secondStep: false });
  
      setFormData((prev) => ({
        ...prev,
        skills: [prev.softSkills, prev.hardSkills],
      }));
    }
  
    if (index === 2) {
      if (formData.professionalScore < 0 || formData.professionalScore > 10) {
        setMessageError({ ...messageError, thirdStep: true });
        return;
      }
    
      setMessageError({ ...messageError, thirdStep: false });
    
      const finalData = {
        education: [
          formData.finishedSchool,
          formData.professionalExperience
        ],
        skills: [
          formData.softSkills,
          formData.hardSkills
        ],
        experience: [
          String(formData.professionalScore)
        ]
      };
      
      try {
        if (finalData) {
         const result = await createDataForm(finalData);
          navigate("/home");

          const returnData: ICareerResult = {
            best_career: result.career_analysis.best_career,
            required_skills: result.career_analysis.required_skills,
            recommendations: result.recommendations,
            user_skills: result.user_skills,
          }

          localStorage.setItem("careerResult", JSON.stringify(returnData));

        } else {
          alert("Erro ao criar, tente novamente.");
        }
       
      } catch (error) {
        throw new Error(`Error create data steps: ${error}`);
      }
    }
    
    setIndex(index + 1);
  };



  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-sm">
        <Text size="md" colors="primary" className="mb-3 font-medium">
          Etapa {step.id} de 3
        </Text>

        <Text colors="foreground" className="text-4xl font-bold mb-2">
          {step.title}
        </Text>

        <Text colors="mutedForeground" size="lg" className="mb-6">
          {step.description}
        </Text>

        <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 text-gray-700 leading-relaxed mb-8">
          {step.info}
        </div>

        {step.fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2 mb-6">
            <label className="text-lg font-semibold text-foreground">
              {field.question}
            </label>

            <InputSteps
              value={(formData as IFieldFormsData | ICarrer)[field.id] || ""}
              type={field.type}
              placeholder={field.placeholder}
              id={field.id}
              name={field.id as keyof (IFieldFormsData | ICarrer)}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          </div>
        ))}

        <Text size="md" colors="foreground" className="font-medium mt-8 mb-2">
          Progresso
        </Text>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-indigo-500 rounded-full transition-all"
            style={{ width: `${((step.id - 1) / 2) * 100}%` }}
          />
        </div>

        <Text size="sm" colors="primary" className="text-right mt-2">
          {step.id} de 3
        </Text>

        <div className="flex gap-4">
          {index == 2 ? (
            <Button onClick={() => {
              handleNext();
              setIsLoading(true);
            }} className="flex gap-2">
              {isLoading == true ? "Finalizando..." : "Finalizar"}
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex gap-2">
              Continuar <Forward />
            </Button>
          )}

          {index > 0 && (
            <Button
              size="md"
              variant="outline"
              onClick={() => setIndex(index - 1)}
            >
              Voltar
            </Button>
          )}
        </div>
        <div className="mt-5 text-destructive text-sm">
          {messageError.firstStep ? <Text size="md"> Preencha as informações sobre escolaridade e experiência profissional. </Text> : ""}
          {messageError.secondStep ? <Text size="md"> Preencha suas Soft Skills e Hard Skills. </Text> : ""}
          {messageError.thirdStep ? <Text size="md"> Informe sua nota profissional de 0 a 10. </Text> : ""}
        </div>
      </div>
    </div>
  );
};

export default Steps;
