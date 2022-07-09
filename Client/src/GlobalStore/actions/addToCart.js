const addToCartData = (data) => {
    return {
        type: "ADD_TO_CART",
        data: data
    }
}

const removeFromCartData = (data) => {
    return {
        type: "REMOVE_FROM_CART",
        data: data
    }
}

export { addToCartData, removeFromCartData };