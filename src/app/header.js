import styles from './header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.menu}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>
      <div className={styles.nav}>
        <nav className={styles.links}>
          <a className={styles.indLinks} href='/resume.pdf'>Resume</a>
          <a className={styles.indLinks} href='#about'>About</a>
          <a className={styles.indLinks} href='/contact'>Contact</a>
          {/*<div className={styles.linkSeparator}></div>
          <a className={styles.indLinks}><button>Desktop Components</button></a>
          <a className={styles.indLinks}><button>Mobile Components</button></a>*/}
        </nav>
      </div>
    </div>
  )
}