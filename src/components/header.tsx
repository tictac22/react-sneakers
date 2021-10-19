import styles from "../styles/header.module.scss";
export const Header:React.FC = () => {
    return(
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__container}>
                    <div className={styles.logo}>
                        <div className={styles.logo__img}>
                            <img src="/images/logo.jpg" alt="logo"/>
                        </div>
                        <div className={styles.logo__text}>
                            <h2 className={styles.logo__title}>
                                REACT SNEAKERS
                            </h2>
                            <p className={styles.subtitle}>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                    <nav className={styles.nav}>
                        <div className={styles.nav__cart}>
                            <img src="/svg/cart.svg" alt="cart"/>
                            <p className={styles.nav__price}><span>1205</span>руб.</p>
                        </div>
                        <div className={styles.nav__favorites}>
                            <img src="/svg/favorite.svg" alt="favorite"/>
                        </div>
                        <div className={styles.nav__profile}>
                            <img src="/svg/profile.svg" alt="profile"/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}