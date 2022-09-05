import styles from "../../styles/cart.module.scss"
import { ICartItem } from "../interfaces"
import { AddTo } from "./addTo"
import { Favorite } from "./favorite"

export const Cart: React.FC<ICartItem> = (props) => {
	return (
		<div className={styles.cart}>
			<div className={styles.cart__inner}>
				<Favorite {...props} />
				<div className={styles.cart__img}>
					<img alt="shoes" src={`/images/shoes/${props.img}.jpg`} />
				</div>
				<h3 className={styles.cart__title}>{props.title}</h3>
				<div className={styles.cart__bottom}>
					<div className={styles.price}>
						<div className={styles.price__text}>Cost</div>
						<div className={styles.price__money}>
							<span>${props.price}</span>
						</div>
					</div>
					<AddTo {...props} />
				</div>
			</div>
		</div>
	)
}
