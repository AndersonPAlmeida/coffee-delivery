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

export interface OrderComplete extends OrderInfo {
  items: Cart[]
}
export interface CartState {
  cart: Cart[]
  orderComplete: OrderComplete[]
}

export function orderReducer(state: CartState, action: Actions) {
  // console.log('state.cart', state.cart)
  // console.log('action.payload', action.payload)
  let newOrder: OrderInfo
  let newOrderComplete: OrderComplete
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
      newOrder = action.payload.orderInfo
      newOrderComplete = {
        ...newOrder,
        items: state.cart,
      }

      action.payload.callback(`/order/${newOrder.id}/success`)
      return {
        ...state,
        orderComplete: [...state.orderComplete, newOrderComplete],
        cart: [],
      }
    default:
      return state
  }
}
