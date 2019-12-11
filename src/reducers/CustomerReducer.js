const INITIAL_STATE = {cart:[]};

export const CustomerReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case 'ADD_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'CLEAR_CART':
            return {...state, cart:[]};
        default:
            return state;
    }
}