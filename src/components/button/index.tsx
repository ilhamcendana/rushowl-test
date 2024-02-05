import React from "react";
import { PropagateLoader } from "react-spinners";
import { IButton } from "./types";

export default function Button({ 
  children, 
  className, 
  isLoading, 
  ...props 
}: IButton) {
  // Define the class names for the button
  const buttonClasses = `bg-primary text-neutral-700 font-semibold text-sm py-2 px-4 min-h-9 rounded-sm cursor-pointer transition-opacity hover:opacity-80 active:scale-[.98] ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <PropagateLoader size={6} /> : children}
    </button>
  );
}