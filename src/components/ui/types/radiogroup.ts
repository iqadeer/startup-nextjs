export interface Option {
  label: string;
  value: string;
}

export interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options?: Option[];
  wrapperClassName?: string;
  groupClassName?: string;
  labelClassName?: string;
  radioClassName?: string;
}