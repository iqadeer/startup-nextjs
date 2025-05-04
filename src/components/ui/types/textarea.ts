import { TextareaProps } from '@headlessui/react';

export interface TextareaComponentProps extends TextareaProps {
  label?: string;
  helperText?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
}