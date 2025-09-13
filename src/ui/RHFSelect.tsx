import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

type RHFSelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: Option[];
  isRequired?: boolean;
  errors?: FieldErrors<T>;
};

function RHFSelect<T extends FieldValues>({
  label,
  name,
  register,
  options,
  isRequired,
}: RHFSelectProps<T>) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
