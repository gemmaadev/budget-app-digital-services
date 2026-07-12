interface FormFieldProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  error: string;
  showError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export function FormField({
  id,
  type,
  placeholder,
  label,
  value,
  error,
  showError,
  onChange,
  onBlur,
}: FormFieldProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="border border-gray-200 rounded-lg p-3 focus-within:ring-2 focus-within:ring-brand-green">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full focus:outline-none"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <p
        className={`text-sm ${showError ? "text-red-500" : "text-transparent"}`}
      >
        {error}
      </p>
    </div>
  );
}
