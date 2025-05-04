"use client";
import { Checkbox, Field, Label, Description } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import { CheckboxComponentProps } from "@/ui/types";

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  label = "Subscribe to newsletter",
  errorMessage,
  disabled,
  wrapperClassName = "mt-12 w-full px-4 md:w-1/2",
  labelClassName = "text-dark flex items-center space-x-3 text-sm font-medium dark:text-white mr-4",
  inputClassName = "border-stroke text-primary focus:ring-primary dark:checked:bg-primary h-8 w-8 rounded bg-[#f8f8f8] focus:ring-2 dark:border-gray-600 dark:bg-[#2C303B]",
  ...rest
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const hasError = Boolean(errorMessage);
  const handleChange = (checked: boolean) => {
    setChecked(checked);
    console.log(checked);
    debugger;
  };

  return (
    <Field className={clsx("mb-8 flex", wrapperClassName)} disabled={disabled}>
      <Label className={labelClassName}>{label}</Label>
      <Checkbox
        aria-invalid={hasError}
        className={clsx(
          "group relative flex items-center justify-center border",
          {
            "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500":
              hasError,
            "cursor-not-allowed bg-gray-100 opacity-50 dark:bg-[#3a3f4b]":
              disabled,
            "border-gray-400": !hasError && !disabled, // Light mode border color
            "dark:border-gray-600": !hasError && !disabled, // Dark mode border color
            "border-blue-500": checked, // Border color when checked
            "focus:ring-primary": !hasError && !disabled, // Focus ring
          },
          inputClassName,
        )}
        {...rest}
        checked={checked}
        onChange={handleChange}
      >
        <svg
          //className={inputClassName}
          className="border-stroke stroke-current opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>

      {hasError && (
        <Description className="mt-2 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </Description>
      )}
    </Field>
  );
};

export default CheckboxComponent;
