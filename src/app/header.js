import styles from './header.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>

      </div>
      <div className={styles.nav}>
        <nav className={styles.links}>
          <a href=''>Resume</a>
          <a href=''>About</a>
          <a href=''>Contact</a>
          <a><button>Desktop Components</button></a>
          <a><button>Mobile Components</button></a>
        </nav>
      </div>
    </div>
  )
}