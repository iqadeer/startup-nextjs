export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  label?: string
  name?: string
  value?: ''
  error?: string
  helperText?: string
  wrapperClassName?: string
  labelClassName?: string
  inputClassName?: string
  floatingLabel?: boolean
}
