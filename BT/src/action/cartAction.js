import { ADD_CART, QTTU, QTTD, PRD } from "../constrain/actionType"

export const cartActionAdd = (e) => {
    return {
        type: ADD_CART,
        payload: e
    }
}
export const cartUpQuantity = (e) => {
    return {
        type: QTTU,
        payload: e
    }
}
export const cartDownQuantity = (e) => {
    return {
        type: QTTD,
        payload: e
    }
}
export const cartDeletePr = (e) => {
    return {
        type: PRD,
        payload: e
    }
}
