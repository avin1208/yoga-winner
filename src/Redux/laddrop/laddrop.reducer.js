import LadActionTypes from "./laddrop.types";

const INITIAL_STATE = {
    hidden2: true
};

const ladReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LadActionTypes.TOGGLE_LAD_HIDDEN:
            return {
                ...state,
                hidden2: !state.hidden2
            }

        default:
            return state;
    }

};

export default ladReducer;