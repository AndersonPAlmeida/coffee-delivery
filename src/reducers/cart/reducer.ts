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
}

export interface CartState {
  cart: Cart[]
  orderInfo?: OrderInfo[]
}

export function orderReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return {
        cart:
          state.cart.length > 0
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
    // case ActionTypes.INCREMENTY_ITEM_CART:
    // case ActionTypes.DECREMENTY_ITEM_CART:
    // case ActionTypes.DELETE_ITEM_CART:
    // case ActionTypes.CHECKOUT_ORDER:
    default:
      return state
  }
}
