import { HomeWrapper } from "../components/pagesComponents/homeWrapper"
import { ShopCart } from "../components/shopCart"
import { Slider } from "../components/slider.jsx"
import styles from "../styles/home.module.scss"

export const Home: React.FC = () => {
	return (
		<div className={styles.app}>
			<main className={styles.main}>
				<div className="container">
					<Slider />
					<HomeWrapper />
				</div>
			</main>
			<ShopCart />
		</div>
	)
}
