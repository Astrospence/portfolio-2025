import React from 'react'
import styles from './cssFiles/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import headshot from '../../public/SpencerHeadshot.svg'

export default function About () {
  return (
    <div id='about' className={styles.about}>
      <div className={styles.aboutLeft}>
        <Image className={styles.headshot} src={headshot} alt='professional headshot of Spencer Wood' />
      </div>
      <div className={styles.aboutRight}>
        <h3 className={styles.aboutHeading}>About Spencer</h3>
        <p className={styles.aboutBody}>I&apos;m a Front End Web Developer passionate about conquering challenges and continuous growth. My professional history proves that I can learn just about anything and I become proficient very quickly, because it matters to me that I do a great job. With my skills, experience, and passion for excellence, I would make a great fit for any team.</p>

        <p className={styles.aboutBody}>As a graduate from Bloom Institute of Technology (formerly known as Lambda School), and with my years of work experience as a Web Developer, I am confident in delivering quality web solutions. Feel free to check out my <span className={styles.highlighted}><Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</Link></span> or my growing portfolio of <span className={styles.highlighted}><Link href='/marketing-site'>Projects</Link></span> here on this site.</p>
      </div>
    </div>
  )
}