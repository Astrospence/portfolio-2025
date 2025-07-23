import styles from "./page.module.css";
import Header from './header'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
