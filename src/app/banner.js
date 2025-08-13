import styles from './banner.module.css'
import Image from 'next/image'
import Network from '../../public/network2.png'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftContainer}>
          <h1>Your Next Web Developer is Right Here</h1>
          <h2>Spencer Wood</h2>
          <p>Delivering modern, scalable, and user-friendly web solutions.</p>
        </div>
        <div className={styles.rightContainer}>
          <h2>Highlighted Skills:</h2>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsLeft}>
              <h3>Front End Development</h3>
              <ul className={styles.skillsList}>
                <li className={styles.skillsListItem}>Webflow</li>
                <li className={styles.skillsListItem}>React</li>
                <li className={styles.skillsListItem}>Next.js</li>
                <li className={styles.skillsListItem}>Gatsby</li>
                <li className={styles.skillsListItem}>JavaScript</li>
                <li className={styles.skillsListItem}>HTML</li>
                <li className={styles.skillsListItem}>CSS</li>
                <li className={styles.skillsListItem}>RESTful APIs</li>
                
              </ul>
            </div>
            <div className={styles.skillsRight}>
              <h3>Back End Development</h3>
              <ul className={styles.skillsList}>
                <li className={styles.skillsListItem}>Node.js</li>
                <li className={styles.skillsListItem}>PostgreSQL</li>
                <li className={styles.skillsListItem}>SQL</li>
                <li className={styles.skillsListItem}>Contentful</li>
              </ul>
            </div>
          </div>
          
          <Image className={styles.bannerBackgroundNetwork} src={Network} alt='vector of globe with dotted arrows orbiting' />
        </div>
      </div>
    </div>
  )
}