import CartActionTypes from "./cart-drop.types";

const INITIAL_STATE = {
    hidden4: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden4: !state.hidden4
            }
        default:
            return state;
    }

};

export default cartReducer;