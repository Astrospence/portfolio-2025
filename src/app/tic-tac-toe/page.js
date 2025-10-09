'use client'
import React, { useRef, useEffect } from 'react'
import styles from '../cssFiles/page.module.css';
import thisPageStyles from '../cssFiles/tic-tac-toe.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Globe from '../../../public/network2.svg'
import Moon from '../../../public/moon.svg'
import Sun from '../../../public/sun.svg'
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
          <div className={thisPageStyles.projectNav}>
            <Link
              className={thisPageStyles.prev}
              href='/marketing-site'
            >
              Prev
            </Link>

            <h2 className={thisPageStyles.heading}>Tic Tac Toe</h2>

            <Link
              className={thisPageStyles.next}
              href=''
              style={{
                opacity: '0',
                pointerEvents: 'none'
              }}
            >
              Next
            </Link>
          </div>

          <div className={thisPageStyles.description}>
            <Link
              className={thisPageStyles.button}
              href='https://tic-tac-toe-react-app-xi.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View The Project
            </Link>
            
            <p>I accepted a small challenge to build a Tic Tac Toe game with React and JavaScript, built with the Next.js framework. It was an entertaining project, and it showcases my ability to work well with complex JavaScript logic and to build visually appealing interactive UI components with React. Here are some features about this game:</p>

            <ul>
              <li>It tracks which player&apos;s turn it is and provides a visual.</li>
              <li>It tracks all selections made by both players.</li>
              <li>When a selection is made, it checks the player&apos;s selections against a list of possible win scenarios and triggers a winning animation when it comes back positive.</li>
            </ul>

          </div>
        </FadeInSection>

      </main>
    </div>
  );
}