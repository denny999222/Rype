export const addCart = (item, restaurantID) => {
    return {
        type:'ADD_CART',
        payload:item,
        restaurantID: restaurantID
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}