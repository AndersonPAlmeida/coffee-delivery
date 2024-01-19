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
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CartItem {
  quantity: number
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface Props {
  cartItem: CartItem
}

export function ItemOrdered({
  cartItem: { id, image, name, quantity, price },
}: Props) {
  const { incrementyItemCarty, decrementyItemCarty, deleteItemCarty } =
    useContext(CartContext)
  return (
    <ItemOrderedContainer>
      <Item>
        <Description>
          <img src={image} alt={name} />
          <div>
            {name}
            <Operations>
              <QuantityInput
                quantity={quantity}
                incrementQuantity={() => incrementyItemCarty(id)}
                decrementQuantity={() => decrementyItemCarty(id)}
              />
              <ButtonRemove onClick={() => deleteItemCarty(id)}>
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
