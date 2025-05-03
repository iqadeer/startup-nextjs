"use client";
import {
  RadioGroup,
  Radio,
  Label,
  Description,
  Field,
} from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { RadioGroupComponentProps } from "@/ui/types";

const HeadlessRadioGroup: React.FC<RadioGroupComponentProps> = ({
  options = [
    { value: "basic", label: "Basic" },
    { value: "premium", label: "Premium" },
  ],
  label = "Choose Plan",
  error,
  helperText,
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName = "text-dark mb-3 block text-sm font-medium dark:text-white",
  optionClassName = "text-dark text-sm dark:text-white",
  radioGroupClassName = "",
  ...radioGroupProps
}) => {
  const hasError = Boolean(error);
  const hasHelperText = Boolean(helperText);

  const describedBy = hasError
    ? `${radioGroupProps.name}-error`
    : hasHelperText
      ? `${radioGroupProps.name}-helper`
      : undefined;

  return (
    <Field className={wrapperClassName}>
      <div className="mb-8">
        <RadioGroup
          className={radioGroupClassName}
          aria-describedby={describedBy}
          {...radioGroupProps}
        >
          <Label className={labelClassName}>{label}</Label>

          <div className="mt-2 flex items-center space-x-6">
            {options.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                disabled={option.disabled || radioGroupProps.disabled}
                className="group flex items-center focus:outline-none"
              >
                {({ checked, disabled: radioDisabled }) => (
                  <>
                    <div
                      className={`h-6 w-6 rounded-full border transition-colors ${
                        checked
                          ? "border-primary bg-primary"
                          : "border-stroke dark:border-gray-600 dark:bg-[#2C303B]"
                      } ${error ? "border-red-500" : ""} ${
                        radioDisabled
                          ? "cursor-not-allowed opacity-50"
                          : "group-focus:ring-primary/50 group-focus:ring-2"
                      }`}
                    >
                      {checked && (
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-white" />
                        </div>
                      )}
                    </div>
                    <Label
                      className={`ml-2 ${optionClassName} ${
                        radioDisabled ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      {option.label}
                    </Label>
                  </>
                )}
              </Radio>
            ))}
          </div>
        </RadioGroup>

        {helperText && !error && (
          <Description
            id={`${radioGroupProps.name}-helper`}
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </Description>
        )}

        {error && (
          <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
            <ExclamationCircleIcon className="mr-1 h-5 w-5" />
            <Description id={`${radioGroupProps.name}-error`}>
              {error}
            </Description>
          </div>
        )}
      </div>
    </Field>
  );
};

export default HeadlessRadioGroup;
