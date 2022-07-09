let localData = localStorage.getItem("ProductsData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("ProductsData"));

const productsData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            let data = action.data
            return (
                state = data
            )
            break;
        default:
            return state
            break;
    }
}

export default productsData