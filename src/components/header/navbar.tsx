import styles from "../../styles/header.module.scss";
interface Props {
    mobile:boolean,
    text?: {
        favorite:string,
        profile:string
    }
}
export const NavBar:React.FC<Props> = ({mobile,text}) => {
    console.log(text);
    return (
        <div className={`${styles.nav__menu} ${mobile ? `${styles.nav__active}` : `${styles.nav__unactive}`}`}>
                            <div className={styles.nav__cart}>
                                <img src="/svg/cart.svg" alt="cart"/>
                                <p className={styles.nav__price}><span>1205</span>руб.</p>
                            </div>
                            <div className={styles.nav__favorites}>
                                <img src="/svg/favorite.svg" alt="favorite"/>
                                {text && <p>{text.favorite}</p>}
                            </div>
                            <div className={styles.nav__profile}>
                                <img src="/svg/profile.svg" alt="profile"/>
                                {text && <p>{text.profile}</p>}
                            </div>
                        </div>
    )
}