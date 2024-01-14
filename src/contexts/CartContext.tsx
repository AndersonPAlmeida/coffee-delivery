import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartProps {
  children: ReactNode
}

export interface Cart {
  coffeeId: string
  quantity: number
  price: number
}

interface ShoppingCartContextType {
  orderId?: string
  cart: Cart[]
  addCoffeeCart: (addItem: Cart) => void
}

export const CartContext = createContext({} as ShoppingCartContextType)

export function CartContextProvider({ children }: ShoppingCartProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function addCoffeeCart(addItem: Cart) {
    const coffeAlreadyExistInCart = cart.findIndex(
      (cartCoffee) => cartCoffee.coffeeId === addItem.coffeeId,
    )

    if (coffeAlreadyExistInCart < 0) {
      setCart([...cart, addItem])
    } else {
      const updateCart = cart.map((coffee) => {
        if (coffee.coffeeId === addItem.coffeeId) {
          return { ...coffee, quantity: addItem.quantity + coffee.quantity }
        }
        return { ...coffee }
      })
      setCart(updateCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
