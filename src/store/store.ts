import { combineReducers, createStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";



const rootReducer = combineReducers({
    userData: userReducer

})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>