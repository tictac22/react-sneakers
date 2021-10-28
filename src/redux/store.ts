import { menuSlicer } from './slicers/menu';
import { configureStore } from '@reduxjs/toolkit'
import { shopSlicer } from './slicers/shop';

export const store = configureStore({
    reducer: {
        menu:menuSlicer,
        shop:shopSlicer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch