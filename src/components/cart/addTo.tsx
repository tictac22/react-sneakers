import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addToCart, removeFromCart } from "../../redux/slicers/shop"
import { CartItem } from "../../redux/slicers/type"
import styles from "../../styles/cart.module.scss"

export const AddTo = ({ id, title, price, img }: CartItem) => {
	const shopItems = useAppSelector((state) => state.shop.shopItems)
	const isInCart = shopItems.find((item) => item.id == id) ?? false
	const dispatch = useAppDispatch()

	const addTo = (): void => {
		isInCart ? dispatch(removeFromCart({ title, price, img, id })) : dispatch(addToCart({ title, price, img, id }))
	}
	return (
		<div onClick={addTo} className={styles.price__add}>
			{isInCart ? <img alt="added" src="/images/added.jpg" /> : <img alt="plus" src="/svg/plus.svg" />}
		</div>
	)
}
