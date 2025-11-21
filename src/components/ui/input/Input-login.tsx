import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { FieldErrors, UseFormRegister, Path } from "react-hook-form";

type InputProps<T> = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  id: string;
  name: Path<T>;
  value?: string;
  passwordExist?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  rules?: object;
  disabled?: boolean;
  onChange?: (value: string) => void;
  isEditing?: boolean;
};

function Input<T>({
  label,
  placeholder,
  icon,
  type = "text",
  id,
  name,
  value,
  passwordExist,
  register,
  rules,
  disabled,
  onChange,
  isEditing = true
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <label className="block text-md font-medium text-foreground mb-2">
        {label}
      </label>

      {icon}

      {passwordExist && (
        <button
          onClick={handleClick}
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
        name={String(name)}
        className={`w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
          !isEditing ? "text-muted-foreground" : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
