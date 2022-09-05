export interface State {
	shopItems: CartItem[]
	favoritesItems: CartItem[]
	totalPrice: number
}

export type CartItem = {
	title: string
	img: string
	price: number
	id: string
}
