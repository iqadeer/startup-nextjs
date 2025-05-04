"use client";

import { Field, Label, Description, Textarea } from "@headlessui/react";
import React, { useId } from "react";
import clsx from "clsx";
import { TextareaComponentProps } from "@/ui/types";

const TextareaComponent: React.FC<TextareaComponentProps> = ({
  id: passedId,
  name = "message",
  label = "Your Message",
  placeholder = "Enter your message",
  rows = 3,
  disabled,
  readOnly,
  error,
  helperText,
  wrapperClassName = "w-full px-4",
  labelClassName,
  textareaClassName,
  ...rest
}) => {
  const id = passedId ?? useId();
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;
  const hasError = Boolean(error);

  return (
    <Field className={clsx(wrapperClassName, "mb-8")}>
      {label && (
        <Label
          htmlFor={id}
          className={clsx(
            "text-dark mb-3 block text-sm font-medium dark:text-white",
            labelClassName,
          )}
        >
          {label}
        </Label>
      )}

      <Textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={
          hasError ? errorId : helperText ? helperId : undefined
        }
        className={clsx(
          `border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none`,
          {
            "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500":
              hasError,
            "cursor-not-allowed bg-gray-100 opacity-50 dark:bg-[#3a3f4b]":
              disabled,
            "cursor-default bg-gray-100 text-gray-500 dark:bg-[#3a3f4b] dark:text-gray-400":
              readOnly && !disabled,
          },
          textareaClassName,
        )}
        {...rest}
      />

      {helperText && !hasError && (
        <Description
          id={helperId}
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {helperText}
        </Description>
      )}

      {hasError && (
        <Description
          id={errorId}
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </Description>
      )}
    </Field>
  );
};

export default TextareaComponent;
