import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import loadingReducer from "./loadingReducer";
export default combineReducers({
    characterReducer,
    loadingReducer
})