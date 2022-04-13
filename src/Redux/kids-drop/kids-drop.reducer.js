import KidActionTypes from "./kids-drop.types";

const INITIAL_STATE = {
    hidden3: true
};

const kidReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KidActionTypes.TOGGLE_KID_HIDDEN:
            return {
                ...state,
                hidden3: !state.hidden3
            }

        default:
            return state;
    }

};

export default kidReducer;