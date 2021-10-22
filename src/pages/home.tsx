import styles from "../styles/home.module.scss";
import { Header } from '../components/header/';
import { Cart } from "../components/cart";

export const Home:React.FC =() =>{
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.main__top}>
            <h1 className={styles.main__title}>
            Все кроссовки
            </h1>
            <div className={styles.search}>
              <img src="/svg/search.svg" alt="search"/>
              <input className={styles.search__input} placeholder="Поиск..."/>
            </div>
          </div>
          <div className={styles.main__grid}>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
          </div>
        </div>
      </main>
    </div>
  );
}