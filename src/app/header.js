import styles from './header.module.css'
import Image from 'next/image'
import WoodCrest from '../../public/woodCrest.png'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.crestContainer}>
          <Image className={styles.crest} src={WoodCrest} alt='wood family crest' />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>
      <div className={styles.nav}>
        <nav className={styles.links}>
          <a className={styles.indLinks} href=''>Resume</a>
          <a className={styles.indLinks} href=''>About</a>
          <a className={styles.indLinks} href=''>Contact</a>
          <div className={styles.linkSeparator}></div>
          <a className={styles.indLinks}><button>Desktop Components</button></a>
          <a className={styles.indLinks}><button>Mobile Components</button></a>
        </nav>
      </div>
    </div>
  )
}