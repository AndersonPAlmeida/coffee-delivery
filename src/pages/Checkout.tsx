import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export function Checkout() {
  const { cart } = useContext(CartContext)
  return <pre>{JSON.stringify(cart)}</pre>
}
