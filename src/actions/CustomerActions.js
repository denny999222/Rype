export const addCart = (item) => {
    return {
        type:'ADD_CART',
        payload:item
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}