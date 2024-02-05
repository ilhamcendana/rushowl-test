import React, { ChangeEvent } from "react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  value,
  name,
  onChange,
  className,
  ...props
}) => {
  // Handle input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Render the label if provided */}
      {label && <label className="font-semibold" id={name}>{label}</label>}
      
      {/* Render the input element */}
      <input
        className={`p-2 border border-neutral-400 bg-transparent rounded-sm text-xs focus:outline-primary ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Input;