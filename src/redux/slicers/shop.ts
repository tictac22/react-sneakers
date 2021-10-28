

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface State {
    shopItems:string[],
    totalPrice:number
}
const initialState: State = {
    shopItems:[],
    totalPrice:0
}

const slicer = createSlice({
    name:"shopCart",
    initialState,
    reducers: {
        addToCart:(state,{payload}:PayloadAction<{id:string,price:number}>) => {
            state.shopItems.push(payload.id);
            state.totalPrice += payload.price
        },
        removeFromCart:(state,{payload}:PayloadAction<{id:string,price:number}>) => {
            state.shopItems = state.shopItems.filter(item => item !== payload.id)
            state.totalPrice -= payload.price
        }
    }
})
export const {addToCart,removeFromCart} = slicer.actions
export const shopSlicer = slicer.reducer
