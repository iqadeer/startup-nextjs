"use client";
import { Field, Input, Label, Description } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React, { useId } from "react";
import { TextFieldProps } from "../types/textfield";

const HeadlessTextField: React.FC<TextFieldProps> = ({
  label = "Your Name",
  type = "text",
  name = "input",
  placeholder = " ",
  error,
  helperText,
  floatingLabel = false,
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState(
    rest.value ?? rest.defaultValue ?? "",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    rest.onChange?.(e); // keep the parent's onChange working
  };

  const hasError = Boolean(error);

  // Base input styles
  const inputBaseClass = `
    border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two
    dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden
    dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none
  `;

  // Wrapper class for floating label
  const floatingWrapperClass = "relative";

  // Floating label styling
  const labelFloatingClass = `
    absolute left-6 top-3 text-sm text-gray-500 dark:text-gray-400
    transform
    ${internalValue ? "-translate-y-10 scale-100 -translate-x-6 top-3" : "top-4"}
    peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
    peer-focus:-translate-y-10 peer-focus:scale-75 peer-focus:-translate-x-6
    transition-all duration-300 ease-in-out origin-left pointer-events-none
  `;

  // Default label styling (above the input)
  const labelDefaultClass =
    "text-dark mb-3 block text-sm font-medium dark:text-white";

  const isDisabled = rest.disabled;
  const isReadOnly = rest.readOnly;
  const disabledClass = `cursor-not-allowed opacity-50 bg-gray-100 dark:bg-[#3a3f4b]`;
  const readOnlyClass = `bg-gray-100 dark:bg-[#3a3f4b] text-gray-500 dark:text-gray-400 cursor-default`;
  const hasFloatingLabel = Boolean(floatingLabel) && Boolean(label);

  return (
    <Field className={wrapperClassName}>
      <div className="mb-8">
        {/* Add the wrapper for floating label */}
        <div className={floatingLabel ? floatingWrapperClass : ""}>
          {!hasFloatingLabel && (
            <Label
              className={`${
                floatingLabel ? labelFloatingClass : labelDefaultClass
              } ${labelClassName ?? ""}`}
            >
              {label}
            </Label>
          )}
          <Input
            type={type}
            placeholder={floatingLabel ? " " : placeholder}
            aria-invalid={hasError}
            className={`peer pr-10 ${inputBaseClass} ${inputClassName ?? ""} ${
              hasError
                ? "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500"
                : ""
            } ${isDisabled ? disabledClass : ""} ${isReadOnly ? readOnlyClass : ""}`}
            {...rest}
            onChange={handleChange}
            value={internalValue}
          />
          {/* Label - Floating or Default */}
          {hasFloatingLabel && (
            <Label
              className={`${
                floatingLabel ? labelFloatingClass : labelDefaultClass
              } ${labelClassName ?? ""}`}
            >
              {label}
            </Label>
          )}

          {/* Error Icon */}
          {hasError && (
            <ExclamationCircleIcon
              className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-red-500"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Helper Text / Error Message */}
        {helperText && !hasError && (
          <Description className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </Description>
        )}
        {hasError && (
          <Description className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </Description>
        )}
      </div>
    </Field>
  );
};

export default HeadlessTextField;
