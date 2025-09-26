import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from './slider.module.css'
import Image from 'next/image'
import Link from 'next/link'
import grayRocket from '../../public/grayRocket.svg'

const slides = [
  {
    id: Math.random(), 
    title: 'Marketing Site', 
    description: 'A content-heavy marketing site, built with Webflow, as well as JavaScript, React, Gatsby, Contentful, and more.',
    target: '',
    href: '',
    rel: '',
  },
  {
    id: Math.random(), 
    title: 'Tic Tac Toe', 
    description: 'A playable Tic Tac Toe game, built with JavaScript, React, and Next.js.',
    target: '_blank',
    href: 'https://tic-tac-toe-react-ez58fa1g5-spencerwooddevs-projects.vercel.app/',
    rel: 'noopener noreferrer',
  },
]

export default function Slider () {
  const [current, setCurrent] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const animationRef = useRef()
  const slideInterval = useRef(null)
  const delay = 7000

  const goToSlide = (index) => {
    setCurrent(index)
    triggerAnimation()
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const triggerAnimation = () => {
    setShouldAnimate(true)
    setTimeout(() => {
     setShouldAnimate(false)
    }, 1000)
  }

  useEffect(() => {
    startAutoPlay()
    triggerAnimation()
    return () => stopAutoPlay()
  }, [])

  const startAutoPlay = () => {
    slideInterval.current = setInterval(nextSlide, delay)
    animationRef.current = setInterval(triggerAnimation, delay)
  }

  const stopAutoPlay = () => {
    if (slideInterval.current) clearInterval(slideInterval.current)
    if (animationRef.current) clearInterval(animationRef.current)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      stopAutoPlay();
      nextSlide();
    },
    onSwipedRight: () => {
      stopAutoPlay();
      prevSlide();
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className={styles.slider}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      {... handlers}
    >

      <h3 className={styles.projectsHeading}>PROJECTS</h3>

      <div className={styles.slidesContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <Link 
            className={styles.linkBlock} 
            key={slide.id}
            href={slide.href} 
            target={slide.target}
            rel={slide.rel} 
          >
              <div className={styles.slide}>
                <Image ref={animationRef} className={shouldAnimate ? styles.animate1 : styles.rocket1} src={grayRocket} alt='rocket blasting off' />
                <Image ref={animationRef} className={shouldAnimate ? styles.animate2 : styles.rocket2} src={grayRocket} alt='rocket blasting off' />
                <Image ref={animationRef} className={shouldAnimate ? styles.animate3 : styles.rocket3} src={grayRocket} alt='rocket blasting off' />
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <p>Click to Explore!</p>
              </div>
          </Link>
        ))}
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={current === index? styles.dotActive : styles.dot}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
