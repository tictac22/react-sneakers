import { useState } from "react";
import styles from "../../styles/header.module.scss";
import { NavBar } from "./navbar";
export const Header:React.FC = () => {
    const [isMenu,setMenu] = useState<boolean>(false);
    const showMenu = ():void => {
        setMenu(!isMenu);
    }
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
                        <div onClick={showMenu} className={styles.nav__burger}>
                            <span></span>
                        </div>
                        {isMenu ? <NavBar text={{favorite:"любимое",profile:"профиль"}}  mobile={isMenu} /> : <NavBar mobile={isMenu}/>}
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}