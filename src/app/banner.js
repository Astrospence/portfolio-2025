import styles from './banner.module.css'
import Image from 'next/image'
import Headshot from '../../public/SpencerHeadshot.jpg'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.headshotContainer}>
          <Image className={styles.headshot} src={Headshot} alt='headshot of Spencer Wood' />
        </div>
        <h1>SPENCER WOOD</h1>
        <p>
          Welcome to my Portfolio Site. I&apos;m eager to showcase a collection of some of my skills, as well as my resume, info about myself, and way to contact me if you&apos;d like to connect. Keep scrolling and we&apos;ll get started!
        </p>
      </div>
    </div>
  )
}