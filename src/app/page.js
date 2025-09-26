'use client'
import React, { useRef, useEffect } from 'react'
import styles from './page.module.css';
import Header from './header'
import Banner from './banner'
import Carousel from './carousel';
import About from './about'
import Image from 'next/image'
import Network from '../../public/network2.png'
import Ship from '../../public/ship.svg'
import FadeInSection from './fadeInSection'

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
        alt='vector of globe in the background with dotted arrows orbiting it in varying directions' 
      />

      <Image 
        ref={parallaxRef2} 
        priority={true} 
        className={styles.backgroundShip} 
        src={Ship} 
        alt='vector of rocket floating in the background' 
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
