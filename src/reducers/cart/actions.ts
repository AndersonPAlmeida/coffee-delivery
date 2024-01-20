import { Cart } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
  INCREMENTY_ITEM_CART = 'INCREMENTY_ITEM_CART',
  DECREMENTY_ITEM_CART = 'DECREMENTY_ITEM_CART',
  DELETE_ITEM_CART = 'DELETE_ITEM_CART',
  CHECKOUT_ORDER = 'CHECKOUT_ORDER',
}

interface AddNewItemAction {
  type: ActionTypes.ADD_COFFEE_CART
  payload: {
    newItem: Cart
  }
}

export type Actions = AddNewItemAction

export function addNewItemAction(newItem: Cart) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      newItem,
    },
  } satisfies Actions
}
