import { useState } from "react";



import { Header } from '../components/header/';
import { Cart } from "../components/cart/";
import { ShopCart } from "../components/shopCart";
import { Slider } from "../components/slider.jsx";
import { CartLoader } from "../components/cart/cartLoader";

import { useGetAllItems } from "../components/hooks/getItems";

import styles from "../styles/home.module.scss";

export const Home:React.FC =() =>{
  const [searchByname,setSearchByname] = useState<string>("");
  const {isError,isLoading,cartItems} = useGetAllItems();
  const filteredCartItem = cartItems.filter(item=>item.title.toLowerCase().includes(searchByname.toLowerCase().trim()));
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <div className="container">
        <Slider/>
          <div className={styles.main__top}>
            <h1 className={styles.main__title}>
              {searchByname.trim()  === "" ? "Все кроссовки" : `Результат по запросу: '${searchByname}'`}
            </h1>
            <div className={styles.search}>
              <img src="/svg/search.svg" alt="search"/>
              <input 
              value={searchByname} 
              maxLength={30} 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearchByname(e.target.value)}} 
              className={`${styles.search__input}`}
              disabled={isError} 
              placeholder="Поиск..."/>
            </div>
          </div>
          <div className="grid">
            {
              isLoading ? <CartLoader/> :
              isError ? <p>Error</p> :
              filteredCartItem.map(item=><Cart id={item.id} key={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl}/>)
            }
          </div>
        </div>
      </main>
      <ShopCart/>
    </div>
  );
}