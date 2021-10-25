

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface State {
    showMenu:boolean,
    showMobileMenu:boolean
}
const initialState: State = {
    showMenu:false,
    showMobileMenu:false
}

export const menuSlicer = createSlice({
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
export const {checkMenu,checkMobileMenu} = menuSlicer.actions
export const menuSlice = menuSlicer.reducer
