import { HTMLAttributes, InputHTMLAttributes, useState } from 'react'
import { InputContainer, InputField, InputWrapper } from './style'

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
}
export function InputText({ containerProps, optional, ...rest }: PropsInput) {
  const [isInputFocused, setIsInputFocused] = useState(false)

  function handleFocus() {
    setIsInputFocused(true)
  }

  function handleBlur() {
    setIsInputFocused(false)
  }

  return (
    <InputContainer {...containerProps}>
      <InputWrapper data-state={isInputFocused ? 'focused' : 'blurred'}>
        <InputField onFocus={handleFocus} onBlur={handleBlur} {...rest} />
        {optional ? <span>Opcional</span> : null}
      </InputWrapper>
    </InputContainer>
  )
}
