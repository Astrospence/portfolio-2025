'use client'
import styles from './cssFiles/banner.module.css'
import Slider from './slider'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftContainer}>
          <h1>Your Next Web Developer is Right Here</h1>
          <div className={styles.namePlate}>
            <h2>Spencer Wood</h2>
            <p>Delivering modern, scalable, and user-friendly web solutions.</p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Slider />
        </div>
      </div>
    </div>
  )
}