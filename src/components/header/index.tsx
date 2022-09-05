import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { checkMobileMenu } from "../../redux/slicers/menu"
import styles from "../../styles/header.module.scss"
import { NavBar } from "./navbar"

export const Header: React.FC = () => {
	const { showMobileMenu } = useAppSelector((state) => state.menu)
	const dispatch = useAppDispatch()
	const toShowMobileMenu = (): void => {
		dispatch(checkMobileMenu(true))
	}
	const hideMobileMenu = (): void => {
		dispatch(checkMobileMenu(false))
	}
	return (
		<header className={styles.header}>
			<div
				onClick={hideMobileMenu}
				className={`${styles.header__shadow} ${showMobileMenu ? styles.header__shadow__active : ""}`}
			></div>
			<div className="container">
				<div className={styles.header__container}>
					<Link to="/" className={styles.logo}>
						<div className={styles.logo__img}>
							<img src="/images/logo.jpg" alt="logo" />
						</div>
						<div className={styles.logo__text}>
							<h2 className={styles.logo__title}>REACT SNEAKERS</h2>
							<p className={styles.logo__subtitle}>Shop the best sneakers</p>
						</div>
					</Link>
					<nav className={styles.nav}>
						<div onClick={toShowMobileMenu} className={styles.nav__burger}>
							<span></span>
						</div>
						<NavBar mobile={showMobileMenu} />
					</nav>
				</div>
			</div>
		</header>
	)
}
