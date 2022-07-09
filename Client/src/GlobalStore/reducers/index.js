import { combineReducers } from "redux"

import productsData from "./ProductsData"
import userData from "./UserData"
import cartData from "./CartData"


const allReducer = combineReducers({
    productsData,
    userData,
    cartData
})

export default allReducer;