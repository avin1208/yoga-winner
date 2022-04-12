import MenActionTypes from "./mendrop.types";

const INITIAL_STATE = {
    hidden: true
};

const menReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenActionTypes.TOGGLE_MEN_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }

};

export default menReducer;