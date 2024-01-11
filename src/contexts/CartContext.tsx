import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartProps {
  children: ReactNode
}

interface Cart {
  coffeeId: string
  quantity: number
  price: number
}

interface ShoppingCartContextType {
  order: Cart[]
  addOrder: (newOrder: Cart) => void
}

export const CartContext = createContext({} as ShoppingCartContextType)

export function CartContextProvider({ children }: ShoppingCartProps) {
  const [order, setOrder] = useState<Cart[]>([])

  function addOrder(newOrder: Cart) {
    setOrder((state) => [...state, newOrder])
  }

  return (
    <CartContext.Provider
      value={{
        order,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
