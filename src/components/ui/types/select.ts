import { ListboxOptionProps, ListboxProps, ListboxButtonProps, ListboxOptionsProps } from '@headlessui/react';

export interface OptionType extends ListboxOptionProps<any> {
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
}

export interface SelectComponentProps extends ListboxProps<any> {
  errorMessage?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  buttonProps?: ListboxButtonProps<"button">;
  optionsProps?: ListboxOptionsProps<"ul">;
}