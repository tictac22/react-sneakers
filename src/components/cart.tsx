import { useState } from "react";
import styles from "../styles/cart.module.scss";
export const Cart:React.FC = () => {
    const [isFavorite,setFavorite] = useState<boolean>(false);
    const favorite = ():void => {
        setFavorite(!isFavorite)
    }
    const [isAdded,setAdded] = useState<boolean>(false);
    const addTo = ():void => {
        setAdded(!isAdded)
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cart__inner}>
                <div onClick={favorite} className={styles.cart__favorite}>
                    {isFavorite ? 
                        <img alt="favorite" src="/images/favorite.jpg"/> :
                        <img alt="unfavorite" src="/images/unfavorite.jpg"/>
                    }
                </div>
                <div className={styles.cart__img}>
                    <img alt="shoes" src="/images/shoes/img1.jpg"/>
                </div>
                <h3 className={styles.cart__title}>
                Мужские Кроссовки Nike Blazer Mid Suede
                </h3>
                <div className={styles.cart__bottom}>
                    <div className={styles.price}>
                        <div className={styles.price__text}>Цена:</div>
                        <div className={styles.price__money}><span>8 499</span>руб.</div>
                    </div>
                    <div onClick={addTo} className={styles.price__add}>
                    {isAdded ? 
                        <img alt="added" src="/images/added.jpg"/> :
                        <img alt="plus" src="/svg/plus.svg"/>
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}