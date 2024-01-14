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
import { Cart } from '../../../../contexts/CartContext'

interface Props {
  cartIten: Cart
}

export function ItemOrdered({
  cartIten: { img, name, quantity, price },
}: Props) {
  return (
    <ItemOrderedContainer>
      <Item>
        <Description>
          <img src={img} alt={name} />
          <div>
            {name}
            <Operations>
              <QuantityInput quantity={quantity} />
              <ButtonRemove>
                <Trash size={16} />
                Remover
              </ButtonRemove>
            </Operations>
          </div>
        </Description>
        <span>R$ {(price * quantity).toFixed(2)}</span>
      </Item>

      <Separator />
    </ItemOrderedContainer>
  )
}
