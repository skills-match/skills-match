import { ICarrer, IFieldFormsData } from "@/interfaces/ICareer";
import { IStepField } from "@/interfaces/ISteps-form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputStepsProps = {
  label?: string;
  placeholder: string;
  type?: string;
  id: string;
  name: keyof (IFieldFormsData | ICarrer);
  value?: string;
  rules?: object;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSteps = ({
  label,
  placeholder,
  type = "text",
  id,
  name,
  value,
  rules,
  disabled,
  onChange,
}: InputStepsProps) => {
  
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-lg font-semibold text-gray-800">
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
    </div>
  );
};

export default InputSteps;
