import { NameValues } from "@/interfaces/global";
import { Eye, EyeClosed } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  id: string;
  name: keyof NameValues;
  value?: string;
  passwordExist?: boolean;
  register?: UseFormRegister<NameValues>;
  errors?: FieldErrors<NameValues>;
  rules?: object;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  placeholder,
  icon,
  type,
  id,
  name,
  value,
  passwordExist,
  register,
  rules,
  disabled,
  onChange
}: InputProps, isEditing: boolean) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label
        className="block text-md font-medium text-foreground mb-2"
      >
        {label}
      </label>
      {icon}

      {passwordExist && (
        <button
          onClick={() => handleClick()}
          type="button"
          className="absolute right-3 top-12 text-gray-500 cursor-pointer z-50"
        >
          {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </button>
      )}

      <input
        {...(register ? register(name, rules) : {})}
        disabled={disabled}
        type={passwordExist && !showPassword ? "text" : type}
        id={id}
        name={name}
        className={`w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${!isEditing ? "text-muted-foreground" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      
    </div>
  );
};

export default Input;
