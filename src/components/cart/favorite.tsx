import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toFavorite } from "../../redux/slicers/shop"
import { CartItem } from "../../redux/slicers/type"
import styles from "../../styles/cart.module.scss"

export const Favorite = ({ title, price, img, id }: CartItem) => {
	const dispatch = useAppDispatch()

	const favoritesItems = useAppSelector((state) => state.shop.favoritesItems)
	const isInFavoties = favoritesItems.find((item) => item.title == title) ?? false

	const favorite = (): void => {
		isInFavoties
			? dispatch(toFavorite({ title, price, img, type: "remove", id }))
			: dispatch(toFavorite({ title, price, img, type: "add", id }))
	}
	return (
		<div onClick={favorite} className={styles.cart__favorite}>
			{isInFavoties ? (
				<img alt="favorite" src="/images/favorite.jpg" />
			) : (
				<img alt="unfavorite" src="/images/unfavorite.jpg" />
			)}
		</div>
	)
}
