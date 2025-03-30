import { InputHTMLAttributes } from "react";

interface InputProps {
  id: string;
  name: string;
  labelText?: string;
  errors?: string[];
}

export default function Input({
  id,
  name,
  labelText,
  errors,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full flex flex-col gap-1">
      {labelText && (
        <label htmlFor={id} className="font-medium ml-1">
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          name={name}
          className="w-full h-10 bg-transparent border-none transition-all 
          ring-2 ring-neutral-100 rounded-2xl px-3
          focus:outline-none focus:bg-neutral-100
          placeholder:text-neutral-800 dark:placeholder:text-neutral-400 placeholder:text-sm 
          aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500 
          disabled:bg-neutral-100 dark:disabled:bg-neutral-800"
          aria-invalid={Boolean(errors)}
          id={id}
          {...rest}
        />
      </div>
      {/* error messages */}
      {errors?.map((error, i) => (
        <p key={error + i} className="text-sm text-red-500 ml-1 break-words">
          {error}
        </p>
      ))}
    </div>
  );
}
