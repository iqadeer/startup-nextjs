"use client";
import {
  RadioGroup,
  Radio,
  Label,
  Description,
  Field,
  Fieldset,
  Legend,
} from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { RadioGroupComponentProps } from "@/ui/types";

const RadioGroupComponent: React.FC<RadioGroupComponentProps> = ({
  options = [
    { value: "basic", label: "Basic" },
    { value: "premium", label: "Premium" },
  ],
  label = "Choose Plan",
  errorMessage,
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName = "text-dark mb-3 block text-sm font-medium dark:text-white",
  optionClassName = "text-dark text-sm dark:text-white",
  radioGroupClassName = "",
  value,
  ...rest
}) => {
  const hasError = Boolean(errorMessage);

  const [selected, setSelected] = useState(value);

  const handleChange = (val: string) => {
    setSelected(val);
    rest?.onChange(val);
  };

  return (
    <Fieldset className={wrapperClassName}>
      <Legend className={`${labelClassName} mb-5`}>{label}</Legend>
      <RadioGroup
        className={radioGroupClassName}
        value={selected}
        onChange={handleChange}
        {...rest}
      >
        <div className="mt-2 flex items-center space-x-6">
          {options.map((option) => (
            <Field key={option.value} disabled={option?.disabled}>
              <Radio
                key={option.value}
                value={option.value}
                disabled={option.disabled || rest.disabled}
                className="group items-center focus:outline-none"
              >
                {({ checked, disabled: radioDisabled }) => (
                  <>
                    <div className="flex">
                      <div
                        className={`h-6 w-6 rounded-full border transition-colors ${
                          checked
                            ? "border-primary bg-primary"
                            : "border-stroke dark:border-gray-600 dark:bg-[#2C303B]"
                        } ${errorMessage ? "border-red-500" : ""} ${
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
                    </div>
                    {hasError && (
                      <Description className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
                        <ExclamationCircleIcon className="mr-1 h-5 w-5" />
                        {errorMessage}
                      </Description>
                    )}
                  </>
                )}
              </Radio>
            </Field>
          ))}
        </div>
      </RadioGroup>
    </Fieldset>
  );
};

export default RadioGroupComponent;
