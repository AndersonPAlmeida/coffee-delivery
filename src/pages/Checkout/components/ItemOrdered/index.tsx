import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/Forms/QuantityInput'
import {
  ButtonRemove,
  Operations,
  Description,
  Item,
  ItemOrderedContainer,
  Separator,
} from './style'

export function ItemOrdered() {
  return (
    <ItemOrderedContainer>
      <Item>
        <Description>
          <img src="/products/arabe.png" alt="" />
          <div>
            Expresso Tradicional
            <Operations>
              <QuantityInput quantity={1} />
              <ButtonRemove>
                <Trash size={16} />
                Remover
              </ButtonRemove>
            </Operations>
          </div>
        </Description>
        <span>R$ 9,90</span>
      </Item>

      <Separator />
    </ItemOrderedContainer>
  )
}
