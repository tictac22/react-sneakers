
import { useAppDispatch } from "../../redux/hooks";
import { checkMenu, checkMobileMenu } from "../../redux/menu";
import styles from "../../styles/header.module.scss";
interface Props {
    mobile:boolean,
}
export const NavBar:React.FC<Props> = ({mobile}) => {
    const dispatch = useAppDispatch()
    const showCart = ():void => {
        dispatch(checkMenu(true))
        dispatch(checkMobileMenu(false))
    }
    const closeMobileMenu = ():void => {
        dispatch(checkMobileMenu(false))
    }
    return (
        <div className={`${styles.nav__menu} ${mobile ? `${styles.nav__active}` : `${styles.nav__unactive}`}`}>
                            <div onClick={closeMobileMenu} className={styles.nav__close}>
                                <img src="/svg/close.svg"/>
                                <p>Cкрыть</p> 
                            </div>
                            <div onClick={showCart} className={styles.nav__money}>
                                <img src="/svg/cart.svg" alt="cart"/>
                                <p className={styles.nav__price}><span>1205</span> руб.</p>
                            </div>
                            <div className={styles.nav__favorites}>
                                <img src="/svg/favorite.svg" alt="favorite"/>
                                <p>Избраное</p>
                            </div>
                            <div className={styles.nav__profile}>
                                <img src="/svg/profile.svg" alt="profile"/>
                                <p>Профиль</p>
                            </div>
                        </div>
    )
}