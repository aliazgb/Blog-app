function RHFSelectComment({ label, name, register, options, isRequired }) {
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
