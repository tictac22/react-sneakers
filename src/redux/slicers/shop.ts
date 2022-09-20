import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, State } from "./type"

const { selectedSneakers, favoriteSneakers, totalPrice } = getFromLocalStorage()

const initialState: State = {
	//@ts-ignore
	shopItems: selectedSneakers,
	//@ts-ignore
	favoritesItems: favoriteSneakers,
	//@ts-ignore
	totalPrice: totalPrice,
}

const slicer = createSlice({
	name: "shopCart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<CartItem>) => {
			state.shopItems.push({ ...payload })
			state.totalPrice += payload.price

			window.localStorage.setItem("selectedSneakers", JSON.stringify(state.shopItems))
			window.localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice))
		},
		removeFromCart: (state, { payload }: PayloadAction<CartItem>) => {
			state.shopItems = state.shopItems.filter((item) => item.id !== payload.id)
			state.totalPrice -= payload.price

			window.localStorage.setItem("selectedSneakers", JSON.stringify(state.shopItems))
			window.localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice))
		},
		toFavorite: (state, { payload }: PayloadAction<CartItem & { type: string }>) => {
			const { title, img, price, id } = payload
			if (payload.type === "add") {
				state.favoritesItems.push({ title, img, price, id })
			} else {
				state.favoritesItems = state.favoritesItems.filter((item) => item.id !== id)
			}
			window.localStorage.setItem("favoriteSneakers", JSON.stringify(state.favoritesItems))
		},
	},
})
export const { addToCart, removeFromCart, toFavorite } = slicer.actions
export const shopSlicer = slicer.reducer

function getFromLocalStorage() {
	//@ts-ignore
	const favoriteSneakers = JSON.parse(window.localStorage.getItem("favoriteSneakers")) || []
	//@ts-ignore
	const selectedSneakers = JSON.parse(window.localStorage.getItem("selectedSneakers")) || []
	//@ts-ignore
	let totalPrice = parseInt(window.localStorage.getItem("totalPrice"), 10) ?? 0
	isNaN(totalPrice) ? (totalPrice = 0) : totalPrice
	return {
		favoriteSneakers,
		selectedSneakers,
		totalPrice,
	}
}
