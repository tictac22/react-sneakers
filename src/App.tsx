
import styles from "./styles/app.module.scss";
import { Header } from './components/header';

export const App:React.FC =() =>{
  return (
    <div className={styles.app}>
      <Header/>
    </div>
  );
}

