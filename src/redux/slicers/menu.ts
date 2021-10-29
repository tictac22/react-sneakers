

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface State {
    showMenu:boolean,
    showMobileMenu:boolean,
    readinessOfOrder:boolean
}
const initialState: State = {
    showMenu:false,
    showMobileMenu:false,
    readinessOfOrder:false
}

const slicer = createSlice({
    name:"menu",
    initialState,
    reducers: {
        checkMenu:(state,{payload}:PayloadAction<boolean>) => {
            state.showMenu = payload;
        },
        checkMobileMenu:(state,{payload}:PayloadAction<boolean>) => {
            state.showMobileMenu = payload;
        },
        orderIsReady:(state,{payload}:PayloadAction<boolean>) => {
            state.readinessOfOrder = payload
        }
    }
})
export const {checkMenu,checkMobileMenu,orderIsReady} = slicer.actions
export const menuSlicer = slicer.reducer
