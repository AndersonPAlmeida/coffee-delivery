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
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.coffeeId === action.payload.coffeeId) {
            const newQuantity = item.quantity + 1
            return { ...item, quantity: newQuantity }
          } else {
            return item
          }
        }),
      }
    case ActionTypes.DECREMENTY_ITEM_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.coffeeId === action.payload.coffeeId && item.quantity > 1) {
            const newQuantity = item.quantity - 1
            return { ...item, quantity: newQuantity }
          } else {
            return item
          }
        }),
      }
    case ActionTypes.DELETE_ITEM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.coffeeId !== action.payload.coffeeId,
        ),
      }
    case ActionTypes.CHECKOUT_ORDER:
      action.payload.callback(`/order/${action.payload.orderInfo.id}/success`)

      return {
        ...state,
        orderComplete: [
          ...state.orderComplete,
          {
            ...action.payload.orderInfo,
            items: state.cart,
          },
        ],
        cart: [],
      }
    default:
      return state
  }
}
