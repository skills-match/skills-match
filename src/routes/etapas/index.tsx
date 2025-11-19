import Button from "@/components/ui/button/Button";
import InputSteps from "@/components/ui/input/Input-steps";
import { steps } from "@/data/steps-form";
import { ICarrer, IFieldFormsData } from "@/interfaces/ICareer";
import { Forward } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const [formData, setFormData] = useState<IFieldFormsData & ICarrer>({
    finishedSchool: "",
    professionalExperience: "",
    softSkills: "",
    hardSkills: "",
    professionalScore: "",

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
      setFormData((prev) => ({
        ...prev,
        education: [prev.finishedSchool, prev.professionalExperience],
      }));
    }

    if (index === 1) {
      setFormData((prev) => ({
        ...prev,
        skills: [prev.softSkills, prev.hardSkills],
      }));
    }

    if (index === 2) {
      const finalData = {
        ...formData,
        experience: [formData.professionalScore],
      };

      await fetch("http://localhost:3000/steps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      navigate("/perfil");
      return;
    }

    setIndex(index + 1);
  };

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-sm">
        <p className="text-sm font-semibold text-indigo-600 mb-1">
          Etapa {step.id} de 3
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{step.title}</h1>

        <p className="text-lg text-gray-600 mb-6">{step.description}</p>

        <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 text-gray-700 leading-relaxed mb-8">
          {step.info}
        </div>

        {step.fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2 mb-6">
            <label className="text-lg font-semibold text-gray-800">
              {field.question}
            </label>

            <InputSteps
              value={(formData as any)[field.id] || ""}
              onChange={(value: string) => handleChange(field.id, value)}
              type={field.type}
              placeholder={field.placeholder}
            />
          </div>
        ))}

        <p className="text-sm font-medium text-gray-700 mt-8 mb-2">Progresso</p>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-indigo-500 rounded-full transition-all"
            style={{ width: `${((step.id - 1) / 2) * 100}%` }}
          />
        </div>

        <p className="text-right text-sm text-indigo-600 mt-2">
          {step.id} de 3
        </p>

        <div className="flex gap-4">
          {index == 2 ? (
            <Button onClick={handleNext} className="flex gap-2">
              Finalizar
            </Button>
          ) : (
            <Button onClick={(handleNext)} className="flex gap-2">
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
      </div>
    </div>
  );
};

export default Steps;
