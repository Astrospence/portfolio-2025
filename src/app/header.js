import styles from './header.module.css'
import Link from 'next/link'

export default function Header () {
  return (
    <div className={styles.header}>
      {/*<div className={styles.headerLeft}>
        <div className={styles.menu}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>*/}
      <div className={styles.nav}>
        <nav className={styles.links}>
          <Link
            className={styles.indLinks}
            href='/'
          >
            Home
          </Link>
          <div className={styles.linkSeparator}></div>

          <Link 
            className={styles.indLinks} 
            href='/resume.pdf'
            target='_blank'  
          >
            Resume
          </Link>

          <Link 
            className={styles.indLinks} 
            href='/#about'  
          >
            About
          </Link>

          <Link 
            className={styles.indLinks} 
            href='/contact'
          >
            Contact
          </Link>

          {/*
          <a className={styles.indLinks}><button>Desktop Components</button></a>
          <a className={styles.indLinks}><button>Mobile Components</button></a>
          */}
        </nav>
      </div>
    </div>
  )
}