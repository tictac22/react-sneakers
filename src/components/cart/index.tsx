
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart, toFavorite } from "../../redux/slicers/shop";

import { ICartItem } from "../interfaces";

import styles from "../../styles/cart.module.scss";

export const Cart:React.FC<ICartItem> = ({title,price,imgUrl,id}) => {
    const {shopItems,favoritesItems} = useAppSelector(state =>state.shop);
    const isInCart = shopItems.find(item => item == id) ?? false
    const isInFavoties = favoritesItems.find(item => item == id) ?? false
    const dispatch = useAppDispatch();
    
    const addTo = ():void => {isInCart ? dispatch(removeFromCart({id,price})) : dispatch(addToCart({id,price}))}
    const favorite = ():void => {isInFavoties ? dispatch(toFavorite({id,type:"remove"})): dispatch(toFavorite({id,type:"add"})) }
    return (
        <div className={styles.cart}>
            <div className={styles.cart__inner}>
                <div onClick={favorite} className={styles.cart__favorite}>
                    {isInFavoties ? 
                        <img alt="favorite" src="/images/favorite.jpg"/> :
                        <img alt="unfavorite" src="/images/unfavorite.jpg"/>
                    }
                </div>
                <div className={styles.cart__img}>
                    <img alt="shoes" src={`/images/shoes/${imgUrl}.jpg`}/>
                </div>
                <h3 className={styles.cart__title}>
                {title}
                </h3>
                <div className={styles.cart__bottom}>
                    <div className={styles.price}>
                        <div className={styles.price__text}>Цена:</div>
                        <div className={styles.price__money}><span>{price}</span> руб.</div>
                    </div>
                    <div onClick={addTo} className={styles.price__add}>
                    {isInCart ? 
                        <img alt="added" src="/images/added.jpg"/> :
                        <img alt="plus" src="/svg/plus.svg"/>
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}