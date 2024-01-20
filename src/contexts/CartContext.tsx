import { ReactNode, createContext, useReducer, useState } from 'react'
import { coffees } from '../../data.json'
import { Cart, orderReducer } from '../reducers/cart/reducer'
import {
  addNewItemAction,
  incrementItemCartAction,
  decrementItemCartAction,
} from '../reducers/cart/actions'
interface ShoppingCartProps {
  children: ReactNode
}

export interface Coffee {
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
  // const [cart, setCart] = useState<Cart[]>([])
  const [cartState, dispatch] = useReducer(orderReducer, {
    cart: [],
    orderInfo: null,
  })

  const [cafes, setCafes] = useState<Coffee[]>([])

  const { cart } = cartState

  if (cafes.length === 0) {
    setCafes([...coffees])
  }

  function addCoffeeCart(newItem: Cart) {
    dispatch(addNewItemAction(newItem))
  }

  function incrementyItemCarty(idItem: Cart['coffeeId']) {
    dispatch(incrementItemCartAction(idItem))
  }

  function decrementyItemCarty(idItem: Cart['coffeeId']) {
    dispatch(decrementItemCartAction(idItem))
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
