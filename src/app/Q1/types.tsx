export interface IForm {
  email: string;  
  password: string;
}

export interface IField {
  type: "text" | "password",
  name: keyof IForm;
  label: string;
  placeholder: string
}