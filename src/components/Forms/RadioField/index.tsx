import { InputHTMLAttributes } from 'react'
import { InputRadioContainer, TypePayment } from './style'

type PropsInput = InputHTMLAttributes<HTMLInputElement> /* & {} */

export function RadioField({ children, ...rest }: PropsInput) {
  return (
    <InputRadioContainer>
      <input type="radio" {...rest} />
      <TypePayment>{children}</TypePayment>
    </InputRadioContainer>
  )
}
