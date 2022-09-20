import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { checkMenu, orderIsReady } from "../../redux/slicers/menu"
import styles from "../../styles/shopcart.module.scss"
import { ResultsCart } from "./resultsCart"
import { ShopCartItem } from "./shopCartItem"
import { emptyCart, successCart } from "./textCartItem"

export const ShopCart: React.FC = () => {
	const { showMenu, readinessOfOrder } = useAppSelector((state) => state.menu)
	const { shopItems, totalPrice } = useAppSelector((state) => state.shop)
	const dispatch = useAppDispatch()
	const [spinner, setSpinner] = useState<boolean>(false)
	const [successOrder, showSucessOrder] = useState<boolean>(false)
	const hideMenu = (): void => {
		dispatch(checkMenu(false))
	}
	const discount = parseInt(((totalPrice / 100) * 5).toFixed(0), 10)
	const makeOrder = (): void => {
		setSpinner(!spinner)
		setTimeout(() => {
			showSucessOrder(!successOrder)
			dispatch(orderIsReady(true))
			window.localStorage.removeItem("totalPrice")
			window.localStorage.removeItem("selectedSneakers")
		}, 3000)
	}

	return (
		<div className={`${styles.cart} ${showMenu ? styles.cart__active : ""} `}>
			<div onClick={hideMenu} className={styles.cart__shadow}></div>
			<div className={styles.cart__inner}>
				<h2 className={styles.cart__title}>Cart</h2>
				<div className={styles.cart__grid}>
					{readinessOfOrder ? (
						<ResultsCart {...successCart} />
					) : shopItems.length === 0 ? (
						<ResultsCart {...emptyCart} />
					) : (
						shopItems.map((item) => <ShopCartItem {...item} key={item.id} />)
					)}
				</div>
				{readinessOfOrder ? (
					""
				) : shopItems.length !== 0 ? (
					<>
						<div className={styles.price}>
							<div className={styles.price__type}>
								<p className={styles.price__name}>Price of all goods</p>
								<div className={styles.price__dash}></div>
								<div className={styles.price__money}>
									<span>${totalPrice} </span>
								</div>
							</div>
							<div className={styles.price__type}>
								<p className={styles.price__name}>Tax 5%:</p>
								<div className={styles.price__dash}></div>
								<div className={styles.price__money}>
									<span>${discount} </span>
								</div>
							</div>
							<div className={styles.price__type}>
								<p className={styles.price__name}>Total: </p>
								<div className={styles.price__dash}></div>
								<div className={styles.price__money}>
									<span>${totalPrice + discount}</span>
								</div>
							</div>
						</div>
						{spinner ? (
							<div className={styles.loader__container}>
								<div className={styles.loader}></div>
							</div>
						) : (
							<button onClick={makeOrder} className={`${styles.price__btn} btn`}>
								<p>Checkout</p>
								<img src="/svg/arrow.svg" />
							</button>
						)}
					</>
				) : (
					""
				)}
			</div>
		</div>
	)
}
