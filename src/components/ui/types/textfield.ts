export interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
  helperText?: string
  wrapperClassName?: string
  labelClassName?: string
  inputClassName?: string
  floatingLabel?: boolean
}
