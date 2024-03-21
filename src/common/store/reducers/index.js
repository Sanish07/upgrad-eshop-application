import homeReducer from "./homeReducer";
import {combineReducers} from "redux";
import loginReducer from "./loginReducer";

export default combineReducers({
    users : homeReducer,
    loginStore : loginReducer
})