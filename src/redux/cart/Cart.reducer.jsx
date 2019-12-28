import { CartActionTypes } from './Cart.types';

const initialState = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]    
            }
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        default : 
            return state;
    }
}

export default cartReducer;