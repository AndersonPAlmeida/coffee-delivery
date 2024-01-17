import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonOperator, QuantityContainer } from './style'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
  ...rest
}: Props) {
  return (
    <QuantityContainer>
      <ButtonOperator type="button" onClick={decrementQuantity} {...rest}>
        <Minus size={14} weight="bold" />
      </ButtonOperator>
      <span>{String(quantity).padStart(2, '0')}</span>
      <ButtonOperator type="button" onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </ButtonOperator>
    </QuantityContainer>
  )
}
