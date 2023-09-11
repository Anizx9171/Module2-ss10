import { notification } from "antd";
import { ADD_CART, PRD, QTTD, QTTU } from "../constrain/actionType";
const findIndexById = (id, arr) => arr.findIndex(e => e.product_id == id);


const initialState = JSON.parse(localStorage.getItem("carts")) || []
export const listcart = (state = initialState, action) => {
    const carts = [...state]
    switch (action.type) {
        case ADD_CART:
            const index = findIndexById(action.payload.product_id, carts)
            if (index == -1) {
                action.payload.quantity = 1
                localStorage.setItem("carts", JSON.stringify([action.payload, ...carts]))
                return [action.payload, ...carts]
            } else {
                carts[index].quantity += 1
                localStorage.setItem("carts", JSON.stringify(carts))
                return carts
            }
        case QTTU:
            const idU = findIndexById(action.payload.product_id, carts)
            if (idU != -1) {
                carts[idU].quantity += 1
                localStorage.setItem("carts", JSON.stringify(carts))
                return carts
            }
        case QTTD:
            const idD = findIndexById(action.payload.product_id, carts)
            if (idD != -1) {
                carts[idD].quantity -= 1
                if (carts[idD].quantity < 1) {
                    notification.error({
                        message: "Xóa sản phẩm thành công",
                        description: `sản phẩm ${carts[idD].product_name} đã được xóa`,
                        duration: 1.5,
                    });
                    carts.splice(idD, 1);
                }
                localStorage.setItem("carts", JSON.stringify(carts))
                return carts
            }
        case PRD:
            const newCart = carts.filter(e => e.product_id != action.payload.product_id)
            localStorage.setItem("carts", JSON.stringify(newCart))
            return newCart
        default:
            return carts
    }
}
