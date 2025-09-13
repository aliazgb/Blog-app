import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isRequired?: boolean;
  className?: string;
  type?: string;
  inputSize?: "small" | "medium";
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  validationSchema?: Parameters<UseFormRegister<T>>[1];
};

export default function RHFTextField<T extends FieldValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}: RHFTextFieldProps<T>) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input  ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {/* {errors[name]?.message} */}
          {String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
}
