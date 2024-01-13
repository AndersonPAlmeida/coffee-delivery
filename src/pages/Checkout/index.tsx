// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'
import { ItemOrdered } from './components/ItemOrdered'
import {
  AddressAndTypePayment,
  ButtonConfirm,
  CheckoutContainer,
  Information,
  ItemsAndPayments,
  Price,
  Title,
} from './style'

export function Checkout() {
  // const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <Title>Complete seu pedido</Title>
      <Title>Cafés selecionados</Title>
      <AddressAndTypePayment></AddressAndTypePayment>
      <ItemsAndPayments>
        <ItemOrdered />

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

        <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
      </ItemsAndPayments>
    </CheckoutContainer>
  )
}
