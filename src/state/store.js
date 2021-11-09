import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"  //excute asyncrrous function


export const store = createStore(reducers,{},applyMiddleware(thunk))
