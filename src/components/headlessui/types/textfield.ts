export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  label?: string
  error?: string
  helperText?: string
  wrapperClassName?: string
  labelClassName?: string
  inputClassName?: string
  floatingLabel?: boolean
  validate?: (value: string) => string | null
}
