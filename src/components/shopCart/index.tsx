
import { useState } from "react";

import { ShopCartItem } from "./shopCartItem";
import { ResultsCart } from "./resultsCart";
import { emptyCart, successCart } from "./textCartItem";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {checkMenu, orderIsReady} from "../../redux/slicers/menu";

import {ICartItem} from "../interfaces/"

import { useGetAllItems } from "../hooks/getItems";

import styles from "../../styles/shopcart.module.scss";

export const ShopCart:React.FC = () => {
    const {isError,isLoading,cartItems} = useGetAllItems();
    const {showMenu,readinessOfOrder} = useAppSelector((state=>state.menu));
    const {shopItems,totalPrice} = useAppSelector(state=>state.shop);
    const dispatch = useAppDispatch()
    const [spinner,setSpinner] = useState<boolean>(false);
    const [successOrder,showSucessOrder] = useState<boolean>(false);
    const hideMenu = ():void => {
        dispatch(checkMenu(false))
    }
    const discount:number = parseInt((totalPrice / 100 * 5).toFixed(0),10);
    const filteredShopItems = ():ICartItem[] => {
        const filteredArray:ICartItem[] = [];
        cartItems.forEach(item=>{
            shopItems.forEach(number=>{
            if(item.id===number) {
              filteredArray.push(item);
            }
          })
        })
        return filteredArray
    }
    const makeOrder = ():void => {
        setSpinner(!spinner);
        setTimeout(()=>{
            showSucessOrder(!successOrder);
            dispatch(orderIsReady(true))
        },3000)
    }
    
    return (
        <div className={`${styles.cart} ${showMenu? styles.cart__active : "" } `} >
            <div onClick={hideMenu} className={styles.cart__shadow}></div>
                <div className={styles.cart__inner}>
                    <h2 className={styles.cart__title}>
                        Корзина
                    </h2>
                    <div className={styles.cart__grid}>
                                {
                                    isLoading ? <p>Loading</p> :
                                    isError ? <p>Error</p> :
                                    readinessOfOrder ? <ResultsCart {...successCart}/> :
                                    filteredShopItems().length === 0 ? <ResultsCart {...emptyCart}/> :
                                    filteredShopItems().map(item=><ShopCartItem
                                    id={item.id} 
                                    key={item.id} 
                                    title={item.title} 
                                    price={item.price} 
                                    imgUrl={item.imgUrl}/>)
                                }           
                    </div>
                    { readinessOfOrder ? "" :  filteredShopItems().length !== 0 ?  (
                        <>
                            <div className={styles.price}>
                                <div className={styles.price__type}>
                                    <p className={styles.price__name}>Цена всех товаров</p>
                                    <div className={styles.price__dash}></div>
                                    <div className={styles.price__money}><span>{totalPrice} </span>руб.</div>
                                </div>
                                <div className={styles.price__type}>
                                    <p className={styles.price__name}>Налог 5%: </p>
                                    <div className={styles.price__dash}></div>
                                    <div className={styles.price__money}><span>{discount} </span>руб.</div>
                                </div>
                                <div className={styles.price__type}>
                                    <p className={styles.price__name}>Итого: </p>
                                    <div className={styles.price__dash}></div>
                                    <div className={styles.price__money}><span>{totalPrice + discount}</span> руб.</div>
                                </div>
                            </div>
                            {spinner ? <div className={styles.loader__container}><div className={styles.loader}></div></div> :
                            <button onClick={makeOrder}  className={`${styles.price__btn} btn`}>
                                <p>Оформить заказ</p>
                                <img src="/svg/arrow.svg"/>
                            </button>
                            }
                        </>
                    ) : ""}
            </div>
        </div>
    )
}