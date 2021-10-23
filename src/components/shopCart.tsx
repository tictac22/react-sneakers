import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styles from "../styles/shopcart.module.scss";
import {checkMenu} from "../redux/menu";
export const ShopCart:React.FC = () => {
    const {showMenu} = useAppSelector((state=>state.menu));
    const dispatch = useAppDispatch()
    
    const hideMenu = ():void => {
        dispatch(checkMenu(false))
    }
    return (
        <div className={`${styles.cart} ${showMenu? styles.cart__active : "" } `} >
            <div onClick={hideMenu} className={styles.cart__shadow}></div>
            <div className={styles.cart__inner}>
                <h2 className={styles.cart__title}>
                    Корзина
                </h2>
                <div className={styles.cart__grid}>
                    <div className={styles.cartItem}>
                        <div className={styles.cartItem__img}>
                            <img src="/images/shoes/img1.jpg" alt="shoes"/>
                        </div>
                        <div className={styles.cartItem__text}>
                            <h3 className={styles.cartItem__title}>
                                Мужские Кроссовки Nike Air Max 270
                            </h3>
                            <p className={styles.cartItem__subtitle}>
                                12 999 руб.
                            </p>
                        </div>
                        <div className={styles.cartItem__delete}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                            <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className={styles.price}>
                    <div className={styles.price__type}>
                        <p className={styles.price__name}>Цена всех товаров</p>
                        <div className={styles.price__dash}></div>
                        <div className={styles.price__money}><span>21 498 </span>руб.</div>
                    </div>
                    <div className={styles.price__type}>
                        <p className={styles.price__name}>Налог 5%: </p>
                        <div className={styles.price__dash}></div>
                        <div className={styles.price__money}><span>21 498 </span>руб.</div>
                    </div>
                    <div className={styles.price__type}>
                        <p className={styles.price__name}>Итого: </p>
                        <div className={styles.price__dash}></div>
                        <div className={styles.price__money}><span>21 498 </span>руб.</div>
                    </div>
                </div>
                <a href="*" className={styles.btn}>Оформить заказ <img src="/svg/arrow.svg"/></a>
            </div>
        </div>
    )
}