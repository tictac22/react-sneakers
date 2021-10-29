import { useGetAllItems } from "../components/hooks/getItems";
import { useAppSelector } from "../redux/hooks";

import { ICartItem } from "../components/interfaces";

import {Link} from "react-router-dom"

import { Header } from "../components/header"
import { Cart } from "../components/cart";
import { ShopCart } from "../components/shopCart";
import { CartLoader } from "../components/cart/cartLoader";

import s from "../styles/favorite.module.scss";

export const Favorites:React.FC = () => {
    const {isError,isLoading,cartItems} = useGetAllItems();
    const {favoritesItems} = useAppSelector(state =>state.shop);
    const filteredShopItems = ():ICartItem[] => {
        const filteredArray:ICartItem[] = [];
        cartItems.forEach(item=>{
            favoritesItems.forEach(number=>{
            if(item.id===number) {
              filteredArray.push(item);
            }
          })
        })
        return filteredArray
    }
    return (
        <>
            <Header/>
            <div className="grid">
            {
                isLoading ? <CartLoader/> :
                isError ? <p>Ошибка на стороне сервера, попробуйте ещё раз</p> :
                filteredShopItems().length === 0 ? <EmptyFavorites/> :
                filteredShopItems().map(item=><Cart 
                id={item.id} 
                key={item.id} 
                title={item.title} 
                price={item.price} 
                imgUrl={item.imgUrl}/>)
            }
            </div>
            <ShopCart/>
        </>
    )
}

const EmptyFavorites = () => (
    <div className={s.empty}>
        <div className={s.empty__smile}>
            <img src="/images/smile.png" alt="smile"/>
        </div>
        <h2 className={s.empty__title}>Закладок нет :(</h2>
        <p className={s.empty__text}>Вы ничего не добавляли в закладки</p>
        <Link to="/" className={`${s.empty__btn} btn`}><img src="/svg/arrow.svg"/><p>Вернуться назад</p></Link>
    </div>
)