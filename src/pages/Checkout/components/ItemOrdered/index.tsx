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
import { Cart, CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface Props {
  cartIten: Cart
}

export function ItemOrdered({
  cartIten: { coffeeId, img, name, quantity, price },
}: Props) {
  const { incrementyItemCarty, decrementyItemCarty, deleteItemCarty } =
    useContext(CartContext)
  return (
    <ItemOrderedContainer>
      <Item>
        <Description>
          <img src={img} alt={name} />
          <div>
            {name}
            <Operations>
              <QuantityInput
                quantity={quantity}
                incrementQuantity={() => incrementyItemCarty(coffeeId)}
                decrementQuantity={() => decrementyItemCarty(coffeeId)}
              />
              <ButtonRemove onClick={() => deleteItemCarty(coffeeId)}>
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
