// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'
import { ItemOrdered } from './components/ItemOrdered'
import {
  AddressAndTypePayment,
  CheckoutContainer,
  ItemsAndPayments,
} from './style'

export function Checkout() {
  // const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <AddressAndTypePayment></AddressAndTypePayment>
      <ItemsAndPayments>
        <ItemOrdered />
      </ItemsAndPayments>
    </CheckoutContainer>
  )
}
