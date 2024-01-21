import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffees } from '../../data.json'
import {
  Cart,
  OrderComplete,
  OrderInfo,
  orderReducer,
} from '../reducers/cart/reducer'
import {
  addNewItemAction,
  incrementItemCartAction,
  decrementItemCartAction,
  deleteItemCartAction,
  checkoutOrderAction,
} from '../reducers/cart/actions'
import { useNavigate } from 'react-router-dom'

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
  orderComplete: OrderComplete[]
  addCoffeeCart: (addItem: Cart) => void
  incrementyItemCarty: (idItem: string) => void
  decrementyItemCarty: (idItem: string) => void
  deleteItemCarty: (idItem: string) => void
  checkoutOrderInfo: (orderInfo: OrderInfo) => void
}

export const CartContext = createContext({} as ShoppingCartContextType)

export function CartContextProvider({ children }: ShoppingCartProps) {
  const [cartState, dispatch] = useReducer(
    orderReducer,
    {
      cart: [],
      orderComplete: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivey:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const [cafes, setCafes] = useState<Coffee[]>([])

  const { cart, orderComplete } = cartState
  const navigate = useNavigate()

  useEffect(() => {
    const cartStateJson = JSON.stringify(cartState)

    localStorage.setItem(
      '@ignite-coffee-delivey:cart-state-1.0.0',
      cartStateJson,
    )
  }, [cartState])

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
    if (!confirm('Deseja mesmo retirar o café do carrinho?')) {
      return
    }
    dispatch(deleteItemCartAction(idItem))
  }

  function checkoutOrderInfo(data: OrderInfo) {
    dispatch(checkoutOrderAction(data, navigate))
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
        checkoutOrderInfo,
        orderComplete,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
