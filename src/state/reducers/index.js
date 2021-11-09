import {combineReducers} from "redux";
import amountReducer  from './amoutreducer'


const reducers = combineReducers( {    //one reducer,when many use comma
    amount : amountReducer

})

export default reducers;
