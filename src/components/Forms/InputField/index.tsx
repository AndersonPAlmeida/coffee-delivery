import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { ErrorMessage, InputContainer, InputField, InputWrapper } from './style'
import { FieldError } from 'react-hook-form'

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
  error?: FieldError
}
export const FieldInput = forwardRef(function FieldInput(
  { containerProps, optional, onFocus, onBlur, error, ...rest }: PropsInput,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isInputFocused, setIsInputFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsInputFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsInputFocused(false)
    onBlur?.(event)
  }

  return (
    <InputContainer {...containerProps}>
      <InputWrapper data-state={isInputFocused ? 'focused' : 'blurred'}>
        <InputField
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
})
