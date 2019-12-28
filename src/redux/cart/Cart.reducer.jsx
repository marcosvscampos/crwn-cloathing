import { CartActionTypes } from './Cart.types';
import { addItemToCart } from './Cart.utils';

const initialState = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)    
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