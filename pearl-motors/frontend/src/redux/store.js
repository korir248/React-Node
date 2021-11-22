import { createStore, applyMiddleware } from "redux";
import {  combineReducers} from 'redux'
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({cart: cartReducer})

export const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))