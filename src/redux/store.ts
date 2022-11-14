import { configureStore } from "@reduxjs/toolkit"
import { menuSlicer } from "./slicers/menu"
import { shopSlicer } from "./slicers/shop"

export const createStore = (preloadedState: {}) =>
	configureStore({
		reducer: {
			menu: menuSlicer,
			shop: shopSlicer,
		},
		preloadedState,
	})

export const store = createStore({})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
