import { combineReducers } from "redux";

import kidReducer from "./kids-drop/kids-drop.reducer";

import ladReducer from "./laddrop/laddrop.reducer";

import menReducer from "./mendrop/mendrop.reducer";

export default combineReducers({
    men: menReducer,
    lad: ladReducer,
    kid: kidReducer
});