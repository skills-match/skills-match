import { IStepField } from "@/interfaces/ISteps-form";
import { Eye, EyeClosed } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputStepsProps = {
  label: string;
  placeholder: string;
  type?: "text" | "number";
  id: string;
  name: keyof IStepField;
  value?: string;
  register?: UseFormRegister<IStepField>;
  errors?: FieldErrors<IStepField>;
  rules?: object;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSteps = ({
  label,
  placeholder,
  type,
  id,
  name,
  value,
  register,
  rules,
  disabled,
  onChange
}: InputStepsProps, isEditing: boolean) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...(register ? register(name, rules) : {})}
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        className={`w-full px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${!isEditing ? "text-gray-500" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      
    </div>
  );
};

export default InputSteps;
