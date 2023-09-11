import { combineReducers } from "redux";
import { listproduct } from "./listproduct";
import { listcart } from "./listcart"
export const reducer = combineReducers({ listproduct, listcart })
