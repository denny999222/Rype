const INITIAL_STATE = {cart:[], restaurantID:''};

export const CustomerReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case 'ADD_CART':
            return { ...state, cart: [...state.cart, action.payload], restaurantID: action.restaurantID };
        case 'CLEAR_CART':
            return {...state, cart:[]};
        default:
            return state;
    }
}