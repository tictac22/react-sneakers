

import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { stringify } from "querystring";

interface State {
    shopItems:string[],
    favoritesItems:string[],
    totalPrice:number,
}
const initialState: State = {
    shopItems:[],
    favoritesItems:[],
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
        },
        toFavorite:(state,{payload}:PayloadAction<{id:string,type:string}>) => {
            if(payload.type === "add" ) {
                state.favoritesItems.push(payload.id)
            } else {
                state.favoritesItems = state.favoritesItems.filter(item => item !== payload.id)
            }
        }
    }
})
export const {addToCart,removeFromCart,toFavorite} = slicer.actions
export const shopSlicer = slicer.reducer
