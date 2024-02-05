"use client";

import React, { useState, useCallback, useMemo, FormEvent } from "react";
import { IField, IForm } from "./types";
import Input from "@src/components/form/input";
import { useFetcher } from "@src/utils/fetcher";
import Button from "@src/components/button";
import Image from "next/image";

/** Assets */
import BgLogin from "@src/assets/bg-login.jpeg";
import { toast } from "react-toastify";

const LoginForm = () => {
  /**
   * Fetcher for handling API requests
   */
  const { fetch: onSubmitLogin, isLoading: isLoadingSubmit } = useFetcher();

  /**
   * State to manage the form data
   */
  const [form, formSet] = useState<IForm>({
    email: "",
    password: "",
  });

  /**
   * Method to update the form state
   */
  const setForm = useCallback(
    (key: string, value: string) => {
      formSet((prev) => ({ ...prev, [key]: value }));
    },
    [form]
  );

  /**
   * Memoized value to check if the email is valid
   */
  const isEmailValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  }, [form.email]);

  /**
   * Method to handle the form submission
   */
  const HANDLE_LOGIN = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isEmailValid) return toast.warn("Please enter a valid email address.");
      if (!form.password) return toast.warn("Password is required. Please enter your password.");

      const { error } = await onSubmitLogin({
        method: "POST",
        path: "/login",
        data: {
          email: form.email,
          password: form.password,
        },
      });

      if (error) {
        toast.error(error?.message);
      }
    },
    [isEmailValid, form]
  );

  return (
    <main>
      {/* Grid layout for login page */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-7 h-screen">
        {/* Image section on the left */}
        <div className="xl:col-span-5 relative">
          <Image
            alt="rushowl"
            src={BgLogin}
            className="object-cover w-full h-full"
            priority
          />
          {/* Overlay with opacity */}
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50" />
        </div>
        {/* Login form section on the right */}
        <div className="xl:col-span-2 p-8 flex flex-col justify-center gap-8">
          {/* Title and description */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">RushOwl Test Q1</h1>
            <p className="text-sm text-neutral-500">For Sr Frontend Developer</p>
          </div>
          {/* Form with input fields and submit button */}
          <form onSubmit={HANDLE_LOGIN} className="flex flex-col gap-4">
            {/* Mapping through the fields to render Input components */}
            {fields.map((item, i) => {
              if (item.type === "text" || item.type === "password")
                return (
                  <Input
                    key={`${item?.name}_${i}`}
                    label={item?.label}
                    name={item?.name}
                    value={form[item?.name]}
                    onChange={(e) => setForm(item?.name, e.target.value)}
                    type={item?.type}
                    placeholder={item?.placeholder}
                  />
                );
            })}
            {/* Submit button */}
            <Button className="mt-4" type="submit" isLoading={isLoadingSubmit}>
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;

/**
 * List Fields
 * Define the structure of input fields with their types, names, labels, and placeholders.
 */
const fields: IField[] = [
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];
