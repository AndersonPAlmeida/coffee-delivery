import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonOperator, QuantityContainer } from './style'

export function QuantityInput() {
  return (
    <QuantityContainer>
      <ButtonOperator>
        <Minus size={14} weight="bold" />
      </ButtonOperator>
      <span>1</span>
      <ButtonOperator>
        <Plus size={14} weight="bold" />
      </ButtonOperator>
    </QuantityContainer>
  )
}
