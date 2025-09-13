import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface RHFSelectCommentProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: Option[];
  isRequired?: boolean;
}

function RHFSelectComment<T extends FieldValues>({
  label,
  name,
  register,
  options,
  isRequired,
}: RHFSelectCommentProps<T>) {
  return (
    <div>
      <label htmlFor={String(name)} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={String(name)}
        className="textField__input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelectComment;
