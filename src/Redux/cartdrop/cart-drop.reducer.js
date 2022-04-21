import CartActionTypes from "./cart-drop.types";

import { addItemToCart, removeItemFromCart } from "./cart-drop.utils";

const INITIAL_STATE = {
    hidden4: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden4: !state.hidden4
            }
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                };
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload )
                };
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id 
                )
            };
            case CartActionTypes.CLEAR_CART:
                return {
                    ...state,
                    cartItems: []
                };
        default:
            return state;
    }

};

export default cartReducer;