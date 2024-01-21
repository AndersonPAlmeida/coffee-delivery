import { ActionTypes, Actions } from './actions'
import { produce } from 'immer'

export interface Cart {
  coffeeId: string
  quantity: number
}

export interface OrderInfo {
  id: string
  cep: number
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export interface OrderComplete extends OrderInfo {
  items: Cart[]
}
export interface CartState {
  cart: Cart[]
  orderComplete: OrderComplete[]
}

export function orderReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return produce(state, (draft) => {
        const hasCoffeeCarty = state.cart.findIndex(
          (item) => item.coffeeId === action.payload.newItem.coffeeId,
        )

        if (hasCoffeeCarty >= 0) {
          draft.cart[hasCoffeeCarty].quantity += action.payload.newItem.quantity
        } else {
          draft.cart.push(action.payload.newItem)
        }
      })
    case ActionTypes.INCREMENTY_ITEM_CART:
      return produce(state, (draft) => {
        const coffeeCartyIndex = state.cart.findIndex(
          (item) => item.coffeeId === action.payload.coffeeId,
        )

        if (coffeeCartyIndex < 0) {
          return state
        } else {
          draft.cart[coffeeCartyIndex].quantity += 1
        }
      })
    case ActionTypes.DECREMENTY_ITEM_CART:
      return produce(state, (draft) => {
        const isItem = draft.cart.find(
          (item) => item.coffeeId === action.payload.coffeeId,
        )

        if (isItem && isItem.quantity > 1) {
          isItem.quantity -= 1
        } else {
          return state
        }
      })
    case ActionTypes.DELETE_ITEM_CART:
      return produce(state, (draft) => {
        const coffeeCartyIndex = state.cart.findIndex(
          (item) => item.coffeeId === action.payload.coffeeId,
        )

        if (coffeeCartyIndex < 0) {
          return state
        } else {
          draft.cart.splice(coffeeCartyIndex, 1)
        }
      })
    case ActionTypes.CHECKOUT_ORDER:
      return produce(state, (draft) => {
        const newOrder = {
          ...action.payload.orderInfo,
          items: state.cart,
        }

        draft.orderComplete.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    default:
      return state
  }
}
