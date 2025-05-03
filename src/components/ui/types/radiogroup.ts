import type { RadioGroupProps } from '@headlessui/react'

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupComponentProps
  extends Omit<RadioGroupProps, "children" | "className"> {
  options?: RadioOption[];
  label?: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  optionClassName?: string;
  radioGroupClassName?: string;
}