import { CheckboxProps } from '@headlessui/react';

export interface CheckboxComponentProps extends CheckboxProps {
  label?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}