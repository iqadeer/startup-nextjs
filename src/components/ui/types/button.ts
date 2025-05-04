import { ButtonProps } from '@headlessui/react';

export interface ButtonComponentProps extends ButtonProps<"button"> {
  wrapperClass?: string;
  buttonClass?: string;
}
