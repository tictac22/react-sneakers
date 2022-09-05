import { useState } from "react"
import styles from "../../styles/home.module.scss"
import { Cart } from "../cart"
import { CartLoader } from "../cart/cartLoader"
import { useGetAllItems } from "../hooks/getItems"

export const HomeWrapper = () => {
	const [searchByname, setSearchByname] = useState<string>("")
	const { isError, isLoading, cartItems } = useGetAllItems()
	const filteredCartItem = cartItems.filter((item) =>
		item.title.toLowerCase().includes(searchByname.toLowerCase().trim())
	)
	return (
		<>
			<div className={styles.main__top}>
				<h1 className={styles.main__title}>
					{searchByname.trim() === "" ? "All sneakers" : `Result on request: '${searchByname}'`}
				</h1>
				<div className={styles.search}>
					<img src="/svg/search.svg" alt="search" />
					<input
						value={searchByname}
						maxLength={30}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setSearchByname(e.target.value)
						}}
						className={`${styles.search__input}`}
						disabled={isError}
						placeholder="Searching..."
					/>
				</div>
			</div>
			<div className="grid">
				{isLoading ? (
					<CartLoader />
				) : isError ? (
					<p>Error</p>
				) : (
					filteredCartItem.map((item) => <Cart key={item.id} {...item} />)
				)}
			</div>{" "}
		</>
	)
}
