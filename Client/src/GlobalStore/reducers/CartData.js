// let localData = localStorage.getItem("cartData")
// var initialState = localData == null ? null : JSON.parse(localStorage.getItem("cartData"));

var initialState = []

const cartData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let data = action.data
            let productId = data._id
            let findProduct = state.find(val => val._id == productId)
            if (findProduct) {
                return (
                    state.map((item) => item._id == productId ? { ...item, qty: item.qty + 1 } : item)
                )
            } else {
                return (
                    state = [...state, { ...data, qty: 1 }]
                )
            }
            break;
        case "REMOVE_FROM_CART":
            let data1 = action.data
            let productId1 = data1._id
            let findProduct1 = state.find(val => val._id == productId1)
            if (findProduct1) {
                let countQty = state.filter(val => val._id == productId1)
                if (countQty[0].qty <= 1) {
                    return (
                        state = state.filter(val => val._id != productId1)
                    )
                } else {
                    return (
                        state.map((item) => item._id == productId1 ? { ...item, qty: item.qty - 1 } : item)
                    )
                }

            }
            break;
        default:
            return state
            break;
    }
}

export default cartData