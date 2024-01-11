import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export function Checkout() {
  const { order } = useContext(CartContext)
  return <pre>{JSON.stringify(order)}</pre>
}
