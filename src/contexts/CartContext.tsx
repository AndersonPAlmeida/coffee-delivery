import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartProps {
  children: ReactNode
}

export interface Cart {
  coffeeId: string
  name: string
  img: string
  quantity: number
  price: number
}

interface ShoppingCartContextType {
  orderId?: string
  cart: Cart[]
  addCoffeeCart: (addItem: Cart) => void
  incrementyItemCarty: (idItem: string) => void
  decrementyItemCarty: (idItem: string) => void
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

  function incrementyItemCarty(idItem: string) {
    const updateItemCart = cart.map((item) => {
      if (item.coffeeId === idItem) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return { ...item }
    })

    setCart(updateItemCart)
  }

  function decrementyItemCarty(idItem: string) {
    const updateItemCart = cart.map((item) => {
      if (item.coffeeId === idItem) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return { ...item }
    })

    setCart(updateItemCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeCart,
        incrementyItemCarty,
        decrementyItemCarty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
