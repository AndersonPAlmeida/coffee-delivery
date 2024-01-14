import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { InputContainer, InputField, InputWrapper } from './style'

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
}
export const FieldInput = forwardRef(function FieldInput(
  { containerProps, optional, onFocus, onBlur, ...rest }: PropsInput,
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
    </InputContainer>
  )
})
