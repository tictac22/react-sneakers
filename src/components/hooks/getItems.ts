import { useEffect, useState } from "react"
import { ICartItem } from "./../interfaces/index"

export const useGetAllItems = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [isError, setError] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState<ICartItem[]>([])
	useEffect(() => {
		const request = async (): Promise<void> => {
			try {
				setLoading(true)
				const response = await fetch("https://631527a95b85ba9b11dcd427.mockapi.io/sneakers")
				const json = await response.json()
				setCartItems(json)
			} catch (e) {
				console.log(e)
				setError(true)
			} finally {
				setLoading(false)
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
