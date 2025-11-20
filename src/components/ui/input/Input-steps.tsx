import { IStepField } from "@/interfaces/ISteps-form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputStepsProps = {
  label?: string;
  placeholder: string;
  type?: "text" | "number";
  id: string;
  name: keyof IStepField;
  value?: string;
  register?: UseFormRegister<IStepField>;
  errors?: FieldErrors<IStepField>;
  rules?: object;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const InputSteps = ({
  label,
  placeholder,
  type = "text",
  id,
  name,
  value,
  register,
  rules,
  disabled,
  onChange,
}: InputStepsProps) => {
  const registerField = register ? register(name, rules) : {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (registerField.onChange) {
      registerField.onChange(e);
    }

    if (onChange) {
      onChange(e.target.value);
    }
  };

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
        onChange={handleChange}
        onBlur={registerField.onBlur}
        ref={registerField.ref}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
    </div>
  );
};

export default InputSteps;
