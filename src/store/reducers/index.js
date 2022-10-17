import {combineReducers} from "redux";
import { reducerR } from "./counter";


export const reducers = combineReducers({
    counter: reducerR
})