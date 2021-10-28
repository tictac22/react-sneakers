import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, removeFromCart } from "../redux/slicers/shop";
import styles from "../styles/cart.module.scss";
import { ICartItem } from "./interfaces";


export const Cart:React.FC<ICartItem> = ({title,price,imgUrl,id}) => {
    const [isAdded,setAdded] = useState<boolean>(false);
    const [isFavorite,setFavorite] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const addTo = ():void => {
      if(!isAdded) {
        setAdded(!isAdded);
        dispatch(addToCart({id,price}))
      } else {
        setAdded(!isAdded);
        dispatch(removeFromCart({id,price}))
      }
    }
    const favorite = ():void => {
        setFavorite(!isFavorite);
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

/*
[
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imgUrl": "img1",
    "id": "3YuQN5SNO0ioX6adbAk3eQ"
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 15600,
    "imgUrl": "img2",
    "id": "jRFlfF6IukWair2Jl_z"
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "imgUrl": "img3",
    "id": "Mh5jEbyxKUm80h_z8iVE3Q"
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "imgUrl": "img4",
    "id": "HxiOc8XOBEWVSDZ7JIaeIA"
  },
  {
    "title": "Кроссовки Future Rider",
    "price": 16999,
    "imgUrl": "img5",
    "id": "dfMWbmPS90Ctp45m9Zslxw"
  },
  {
    "title": "Кроссовки Black Edition",
    "price": 16999,
    "imgUrl": "img6",
    "id": "aj1eFTpaLUCrC5tAJHjOKA"
  },
  {
    "title": "Кроссовки Orange Boomb Edition",
    "price": 7499,
    "imgUrl": "img7",
    "id": "EOEn6hRxC0KGud1Ml1hOhA"
  }
]*/ 