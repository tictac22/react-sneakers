import { menuSlice } from './menu';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        menu:menuSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch