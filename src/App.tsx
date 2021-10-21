
import styles from "./styles/app.module.scss";
import { Header } from './components/header/';
import { Cart } from "./components/cart";

export const App:React.FC =() =>{
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.main__top}>
            <h1 className={styles.main__title}>
            Все кроссовки
            </h1>
            <input placeholder="finder"/>
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

