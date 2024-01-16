import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { InputRadioContainer, TypePayment } from './style'

type PropsInput = InputHTMLAttributes<HTMLInputElement>

export const RadioField = forwardRef(function RadioField(
  { children, ...rest }: PropsInput,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputRadioContainer>
      <input type="radio" ref={ref} {...rest} />
      <TypePayment>{children}</TypePayment>
    </InputRadioContainer>
  )
})
