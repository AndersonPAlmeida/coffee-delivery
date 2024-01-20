import { ActionTypes, Actions } from './actions'

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
  items: Cart[]
}

export interface CartState {
  cart: Cart[]
  orderInfo: OrderInfo[] | null
}

export function orderReducer(state: CartState, action: Actions) {
  // console.log('state.cart', state.cart)
  // console.log('action.payload.newItem', action)
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return {
        ...state,
        cart: state.cart.some(
          (item) => item.coffeeId === action.payload.newItem.coffeeId,
        )
          ? state.cart.map((item) => {
              if (item.coffeeId === action.payload.newItem.coffeeId) {
                const newQuantity =
                  item.quantity + action.payload.newItem.quantity
                return { ...item, quantity: newQuantity }
              } else {
                return item
              }
            })
          : [...state.cart, action.payload.newItem],
      }
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
    // break
    // case ActionTypes.DECREMENTY_ITEM_CART:
    // case ActionTypes.DELETE_ITEM_CART:
    // case ActionTypes.CHECKOUT_ORDER:
    default:
      return state
  }
}
