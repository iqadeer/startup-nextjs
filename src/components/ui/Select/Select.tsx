"use client";

import {
  Description,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import React, { useState } from "react";
import clsx from "clsx";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { OptionType, SelectComponentProps } from "@/ui/types";

const SelectComponent: React.FC<SelectComponentProps> = ({
  label = "Select an option",
  options = [
    {
      label: "Select a value",
      value: "",
      className: "",
      disabled: true,
      id: 1,
    },
    {
      label: "Male",
      value: "male",
      className: "",
      id: 2,
    },
    {
      id: 3,
      label: "Female",
      value: "female",
      className: "",
    },
  ],
  errorMessage,
  disabled = false,
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName = "text-dark mb-3 block text-sm font-medium dark:text-white",
  selectClassName = "border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base font-semibold outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none",
  buttonProps,
  optionsProps,
  ...rest
}) => {
  const [selected, setSelected] = useState<OptionType>(options[0]);

  const hasError = Boolean(errorMessage);

  function handleChange(value: OptionType): void {
    setSelected(value);
  }

  return (
    <Field
      className={clsx("mb-8 w-full", wrapperClassName)}
      disabled={disabled}
    >
      <Label className={labelClassName}>{label}</Label>
      <Listbox value={selected} onChange={handleChange} {...rest}>
        <ListboxButton
          {...buttonProps}
          className={clsx("relative w-full text-left", selectClassName, {
            "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500":
              hasError,
            "cursor-not-allowed opacity-50": disabled,
          })}
        >
          {selected.label}
          <ChevronUpDownIcon
            className="pointer-events-none absolute top-2 right-2 size-8 fill-black/60 transition-transform"
            aria-hidden="true"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          {...optionsProps}
          className={clsx(
            "z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white p-1 text-base shadow-lg dark:bg-[#2C303B]",
            "transition duration-200 ease-in data-leave:data-closed:opacity-0",
          )}
        >
          {options.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              disabled={person.optionDisabled}
              className={({ focus, selected, disabled }) =>
                clsx(
                  "group flex cursor-default rounded-sm px-4 py-2 select-none",
                  {
                    "bg-blue-100 text-blue-900 dark:bg-blue-900/50": focus,
                    "font-semibold text-blue-600": selected,
                    "cursor-not-allowed text-gray-400": disabled,
                    "text-gray-900 dark:text-white": !disabled,
                  },
                  person.className,
                )
              }
            >
              <span>
                <CheckIcon className="invisible mr-2 size-5 fill-blue-600 group-data-selected:visible" />
              </span>
              {person.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {hasError && (
        <Description className="mt-2 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </Description>
      )}
    </Field>
  );
};

export default SelectComponent;
