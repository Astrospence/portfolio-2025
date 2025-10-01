'use client'
import React, { useRef, useEffect } from 'react'
import styles from './page.module.css';
import Header from './header'
import Banner from './banner'
import Carousel from './carousel';
import About from './about'
import Image from 'next/image'
import Globe from '../../public/network2.svg'
import Moon from '../../public/moon.svg'
import Sun from '../../public/sun.svg'
import FadeInSection from './fadeInSection'

export default function Home() {
  const parallaxRef = useRef(0)
  const parallaxRef2 = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      requestAnimationFrame(() => {
        parallaxRef.current.style.top = `${scrollTop * 0.6}px`
        parallaxRef2.current.style.top = `${(scrollTop * 0.4) + 520}px`
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
        src={Globe} 
        alt='vector outline of globe in the background with dotted arrows orbiting it in varying directions' 
      />

      <Image 
        ref={parallaxRef2} 
        priority={true} 
        className={styles.backgroundMoon} 
        src={Moon} 
        alt='vector outline of moon floating in the background' 
      />

      <Image  
        priority={true} 
        className={styles.backgroundSun} 
        src={Sun} 
        alt='vector outline of sun fixed in the top left corner background' 
      />

      <main className={styles.main}>
        <Header />
        
        <FadeInSection>
          <Banner />
        </FadeInSection>

        <FadeInSection>
          <Carousel />
        </FadeInSection>
        
        <FadeInSection>
          <About />
        </FadeInSection>
        
      </main>
    </div>
  );
}
