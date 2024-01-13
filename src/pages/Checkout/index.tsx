// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'
import { ItemOrdered } from './components/ItemOrdered'
import {
  AddressAndTypePayment,
  CheckoutContainer,
  ItemsAndPayments,
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
      </ItemsAndPayments>
    </CheckoutContainer>
  )
}
