export interface SelectOption {
  label: string;
  value: string;
  className?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  label?: string;
  options?: SelectOption[];
  wrapperClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
}
