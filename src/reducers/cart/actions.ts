import { Cart, OrderInfo } from './reducer'
import { NavigateFunction } from 'react-router-dom'

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

interface OperationsItemAction {
  type:
    | ActionTypes.INCREMENTY_ITEM_CART
    | ActionTypes.DECREMENTY_ITEM_CART
    | ActionTypes.DELETE_ITEM_CART
  payload: {
    coffeeId: Cart['coffeeId']
  }
}

interface CheckoutAction {
  type: ActionTypes.CHECKOUT_ORDER
  payload: {
    orderInfo: OrderInfo
    callback: NavigateFunction
  }
}

export type Actions = AddNewItemAction | OperationsItemAction | CheckoutAction

export function addNewItemAction(newItem: Cart) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      newItem,
    },
  } satisfies Actions
}

export function incrementItemCartAction(coffeeId: Cart['coffeeId']) {
  return {
    type: ActionTypes.INCREMENTY_ITEM_CART,
    payload: {
      coffeeId,
    },
  } satisfies Actions
}

export function decrementItemCartAction(coffeeId: Cart['coffeeId']) {
  return {
    type: ActionTypes.DECREMENTY_ITEM_CART,
    payload: {
      coffeeId,
    },
  } satisfies Actions
}

export function deleteItemCartAction(coffeeId: Cart['coffeeId']) {
  return {
    type: ActionTypes.DELETE_ITEM_CART,
    payload: {
      coffeeId,
    },
  } satisfies Actions
}

export function checkoutOrderAction(
  orderInfo: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_ORDER,
    payload: {
      orderInfo,
      callback,
    },
  } satisfies Actions
}
