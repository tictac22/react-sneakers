

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface State {
    showMenu:boolean,
    showMobileMenu:boolean
}
const initialState: State = {
    showMenu:false,
    showMobileMenu:false
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
        }
    }
})
export const {checkMenu,checkMobileMenu} = slicer.actions
export const menuSlicer = slicer.reducer
