'use client'
import React, { useRef, useEffect } from 'react'
import styles from '.././page.module.css';
import contactStyles from './contact.module.css'
import Image from 'next/image'
import Network from '../../../public/network2.png'
import Ship from '../../../public/ship.svg'
import Linkedin from '../../../public/linkedin.png'
import GitHub from '../../../public/github.svg'
import Gmail from '../../../public/gmail.png'
import LinkArrow from '../../../public/LinkArrow.png'
import FadeInSection from '../fadeInSection'
import Header from '../header'

export default function Home() {
  const parallaxRef = useRef(0)
  const parallaxRef2 = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      requestAnimationFrame(() => {
        parallaxRef.current.style.top = `${scrollTop * 0.6}px`
        parallaxRef2.current.style.top = `${(scrollTop * 0.4) + 500}px`
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className={styles.page}>
      <Image 
        ref={parallaxRef} 
        priority={true} 
        className={styles.backgroundGlobe} 
        src={Network} 
        alt='vector of globe with dotted arrows orbiting it in varying directions' 
      />

      <Image 
        ref={parallaxRef2} 
        priority={true} 
        className={styles.backgroundShip} 
        src={Ship} 
        alt='vector of globe with dotted arrows orbiting it in varying directions' 
      />

      <main className={styles.main}>
        <Header />

        <h2 className={contactStyles.heading}>Let&apos;s Connect</h2>
        
        <FadeInSection>
          <a 
            className={contactStyles.linkBlock}
            target='_blank'
            href='https://www.linkedin.com/in/spencerwooddev'
            rel='noopener noreferrer'  
          >
            <div className={contactStyles.tile}>
              <Image 
                className={contactStyles.icon} 
                src={Linkedin} 
                alt='Linkedin Icon' 
              />
              <div className={contactStyles.textContainer}>
                <h3>Linkedin <span><Image className={contactStyles.linkArrow} src={LinkArrow} alt='Icon of an arrow leaving a page' /></span></h3>
              </div>
            </div>
          </a>
        </FadeInSection>

        <FadeInSection>
          <a 
            className={contactStyles.linkBlock}
            target='_blank'
            href='https://github.com/Astrospence'
            rel='noopener noreferrer'  
          >
            <div className={contactStyles.tile}>
              <Image 
                className={contactStyles.icon} 
                src={GitHub} 
                alt='GitHub Icon' 
              />
              <div className={contactStyles.textContainer}>
                <h3>GitHub <span><Image className={contactStyles.linkArrow} src={LinkArrow} alt='Icon of an arrow leaving a page' /></span></h3>
              </div>
            </div>
          </a>
        </FadeInSection>

        <FadeInSection>
          <a 
            className={contactStyles.linkBlock}
            target='_blank'
            href='mailto:spencer.wood711@gmail.com?subject=Portfolio%20Contact'
            rel='noopener noreferrer'
          >
            <div className={contactStyles.tile}>
              <Image className={contactStyles.icon} src={Gmail} alt='Email Icon' />
              <div className={contactStyles.textContainer}>
                <h3>Email <span><Image className={contactStyles.linkArrow} src={LinkArrow} alt='Icon of an arrow leaving a page' /></span></h3>
              </div>
            </div>
          </a>

          <p className={contactStyles.emailBackup}>spencer.wood711@gmail.com</p>
        </FadeInSection>

      </main>
    </div>
  );
}