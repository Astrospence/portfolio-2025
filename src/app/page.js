import styles from "./page.module.css";
import Header from './header'
import Banner from './banner'
import Carousel from "./carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Banner />
        <Carousel />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
