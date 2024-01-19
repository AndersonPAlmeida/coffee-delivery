import { ReactNode, createContext, useState } from 'react'
import { coffees } from '../../data.json'
import { Cart } from '../reducers/cart/reducer'
interface ShoppingCartProps {
  children: ReactNode
}

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface ShoppingCartContextType {
  cart: Cart[]
  cafes: Coffee[]
  addCoffeeCart: (addItem: Cart) => void
  incrementyItemCarty: (idItem: string) => void
  decrementyItemCarty: (idItem: string) => void
  deleteItemCarty: (idItem: string) => void
}

export const CartContext = createContext({} as ShoppingCartContextType)

export function CartContextProvider({ children }: ShoppingCartProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const [cafes, setCafes] = useState<Coffee[]>([])

  if (cafes.length === 0) {
    setCafes([...coffees])
  }

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
      if (item.coffeeId === idItem && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      } else if (item.coffeeId === idItem && item.quantity === 1) {
        alert('Não é possível reduzir mais a quantidade.')
      }
      return { ...item }
    })

    setCart(updateItemCart)
  }

  function deleteItemCarty(idItem: string) {
    const deleteItemCart = cart.filter((item) => item.coffeeId !== idItem)

    if (!confirm('Deseja mesmo retirar o café do carrinho?')) {
      return
    }

    setCart(deleteItemCart)
  }
  return (
    <CartContext.Provider
      value={{
        cafes,
        cart,
        addCoffeeCart,
        incrementyItemCarty,
        decrementyItemCarty,
        deleteItemCarty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
