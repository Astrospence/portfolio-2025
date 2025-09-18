'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import Network from '../../public/network2.png'
import Slider from './slider'

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
          <Slider />
          <Image className={styles.bannerBackgroundNetwork} src={Network} alt='vector of globe with dotted arrows orbiting' />
        </div>
      </div>
    </div>
  )
}