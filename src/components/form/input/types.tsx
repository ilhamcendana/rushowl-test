import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}