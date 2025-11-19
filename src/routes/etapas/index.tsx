import Button from "@/components/ui/button/Button";
import { steps } from "@/data/steps-form";
import { Forward } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const [formData, setFormData] = useState({
    finishedSchool: "",
    professionalExperience: "",
    softSkills: "",
    hardSkills: "",
    professionalScore: "",
  });

  const [index, setIndex] = useState<number>(0);

  const step = steps[index];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-sm">
        {/* Etapa + Título */}
        <p className="text-sm font-semibold text-indigo-600 mb-1">
          Etapa {step.id} de 3
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{step.title}</h1>

        <p className="text-lg text-gray-600 mb-6">{step.description}</p>

        {/* Caixa de informação */}
        <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 text-gray-700 leading-relaxed mb-8">
          {step.info}
        </div>

        {/* Form */}
        {step.fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2 mb-6">
            <label className="text-lg font-semibold text-gray-800">
              {field.question}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}

              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
          <Button onClick={() =>  {
            if(index >= steps.length - 1) {
              navigate('/perfil');
            }

            setIndex(index + 1)

          }} className="flex gap-2">
            Continuar <Forward />
          </Button>
          {index > 0 && (
           <Button size="md" variant="outline" onClick={() => setIndex(index - 1)}>Voltar</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Steps;
