import { useState } from "react";

export const steps = [
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

const Steps = ({ currentStep }: { currentStep: number }) => {
  const [formData, setFormData] = useState({
    finishedSchool: "",
    professionalExperience: "",
    softSkills: "",
    hardSkills: "",
    professionalScore: "",
  });

  const step = steps[currentStep];

  const handleChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-sm">

        {/* Etapa + Título */}
        <p className="text-sm font-semibold text-indigo-600 mb-1">
          Etapa {step.id} de 3
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {step.title}
        </h1>

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
              value={(formData as any)[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        ))}

        <p className="text-sm font-medium text-gray-700 mt-8 mb-2">
          Progresso
        </p>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-indigo-500 rounded-full transition-all"
            style={{ width: `${((step.id - 1) / 2) * 100}%` }}
          />
        </div>

        <p className="text-right text-sm text-indigo-600 mt-2">
          {step.id} de 3
        </p>
      </div>
    </div>
  );
};

export default Steps;
