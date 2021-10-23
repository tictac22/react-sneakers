

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface State {
    showMenu:boolean
}
const initialState: State = {
    showMenu:false
}

export const menuSlicer = createSlice({
    name:"menu",
    initialState,
    reducers: {
        checkMenu:(state,{payload}:PayloadAction<boolean>) => {
            state.showMenu = payload;
        }
    }
})
export const {checkMenu} = menuSlicer.actions
export const menuSlice = menuSlicer.reducer
