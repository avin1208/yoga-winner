import { combineReducers } from "redux";

import ladReducer from "./laddrop/laddrop.reducer";

import menReducer from "./mendrop/mendrop.reducer";

export default combineReducers({
    men: menReducer,
    lad: ladReducer
});