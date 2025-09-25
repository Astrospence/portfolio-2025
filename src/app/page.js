'use client'
import React, { useRef, useEffect } from 'react'
import styles from './page.module.css';
import Header from './header'
import Banner from './banner'
import Carousel from './carousel';
import About from './about'
import Image from 'next/image'
import Network from '../../public/network2.png'

export default function Home() {
  const parallaxRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      requestAnimationFrame(() => {
        parallaxRef.current.style.top = `${scrollTop * 0.5}px`
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className={styles.page}>
      <Image ref={parallaxRef} priority={true} className={styles.bannerBackgroundNetwork} src={Network} alt='vector of globe with dotted arrows orbiting it in varying directions' />
      <main className={styles.main}>
        <Header />
        <Banner />
        <Carousel />
        <About />
      </main>
    </div>
  );
}
