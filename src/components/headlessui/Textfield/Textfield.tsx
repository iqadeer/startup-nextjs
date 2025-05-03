import { Field, Input, Label, Description } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { TextFieldProps } from "../types/textfield";

const HeadlessTextField: React.FC<TextFieldProps> = ({
  id = "textfield",
  label = "Your Name",
  type = "text",
  placeholder = " ",
  error,
  helperText,
  floatingLabel = false,
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const hasError = Boolean(error);

  const inputBaseClass = `
      border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two
      dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden
      dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none
    `;

  const floatingWrapperClass = "relative";

  const labelFloatingClass = `
  absolute left-6 top-3 text-sm text-gray-500 dark:text-gray-400
  transform 
  peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
  peer-focus:-translate-y-10 peer-focus:scale-100 peer-focus:translate-x-[-24px]
  transition-all duration-300 ease-in-out origin-left pointer-events-none
`;

  const labelDefaultClass =
    "text-dark mb-3 block text-sm font-medium dark:text-white";

  const showLableAtBottom = label && floatingLabel;

  return (
    <div className={wrapperClassName}>
      <Field>
        <div className="mb-8">
          <div className={floatingLabel ? floatingWrapperClass : ""}>
            {!showLableAtBottom && (
              <Label
                htmlFor={id}
                className={`${floatingLabel ? labelFloatingClass : labelDefaultClass} ${labelClassName ?? ""}`}
              >
                {label}
              </Label>
            )}
            <Input
              id={id}
              type={type}
              placeholder={floatingLabel ? " " : placeholder}
              aria-invalid={hasError}
              className={`peer pr-10 ${inputBaseClass} ${inputClassName ?? ""} ${
                hasError
                  ? "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
              {...rest}
            />
            {showLableAtBottom && (
              <Label
                htmlFor={id}
                className={`${floatingLabel ? labelFloatingClass : labelDefaultClass} ${labelClassName ?? ""}`}
              >
                {label}
              </Label>
            )}
            {hasError && (
              <ExclamationCircleIcon
                className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-red-500"
                aria-hidden="true"
              />
            )}
          </div>

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
    </div>
  );
};

export default HeadlessTextField;
