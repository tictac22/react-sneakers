import { useEffect, useState } from "react"
import { ICartItem } from "./../interfaces/index"

export const useGetAllItems = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [isError, setError] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState<ICartItem[]>([])
	useEffect(() => {
		const request = async (): Promise<void> => {
			setLoading(true)
			try {
				const response = await fetch("https://631527a95b85ba9b11dcd427.mockapi.io/sneakers")
				const json = await response.json()
				setCartItems(json)
				setLoading(false)
			} catch (e) {
				console.log(e)
				setLoading(false)
				setError(true)
			}
		}
		request()
	}, [])
	return {
		isLoading,
		isError,
		cartItems,
	}
}
