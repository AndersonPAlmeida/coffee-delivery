import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ButtonConfirm,
  ButtonRemove,
  Operations,
  Description,
  Information,
  Item,
  ItemOrderedContainer,
  Price,
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
                REMOVER
              </ButtonRemove>
            </Operations>
          </div>
        </Description>
        <span>R$ 9,90</span>
      </Item>

      <Separator />

      <Price>
        <Information>
          <p>Total de itens</p>
          <p>Entrega</p>
          <h3>Total</h3>
        </Information>
        <Information>
          <p>R$ 29,70</p>
          <p>R$ 3,50</p>
          <h3>R$ 33,20</h3>
        </Information>
      </Price>

      <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
    </ItemOrderedContainer>
  )
}
