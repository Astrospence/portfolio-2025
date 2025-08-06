import styles from './banner.module.css'
import Image from 'next/image'
import Headshot from '../../public/SpencerHeadshot.jpg'
import Network from '../../public/Network.png'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftContainer}>
          <Image className={styles.headshot} src={Headshot} alt='headshot of Spencer Wood' />
        </div>
        <div className={styles.rightContainer}>
          <Image className={styles.bannerBackgroundNetwork} src={Network} alt='vector of globe with dotted arrows orbiting' />
        </div>
      </div>
    </div>
  )
}