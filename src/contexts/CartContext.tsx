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
  cart: Cart[]
  addItemCart: (addItem: Cart) => void
}

export const CartContext = createContext({} as ShoppingCartContextType)

export function CartContextProvider({ children }: ShoppingCartProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function addItemCart(addItem: Cart) {
    setCart((state) => [...state, addItem])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
