import combineReducers from "./CombineReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
const mystore = createStore(combineReducers, composeWithDevTools())
export default mystore