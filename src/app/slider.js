import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from './slider.module.css'

const slides = [
  {id: Math.random(), title: 'Tic Tac Toe', description: 'A playable Tic Tac Toe game, built with JavaScript, React, and Next.js'},
  {id: Math.random(), title: 'Marketing Site', description: 'A content-heavy marketing site, built with Webflow, as well as JavaScript, React, Gatsby, Contentful, and more.'},
]

export default function Slider () {
  const [current, setCurrent] = useState(0)
  const slideInterval = useRef(null)
  const delay = 5000

  const goToSlide = (index) => {
    setCurrent(index)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  const startAutoPlay = () => {
    slideInterval.current = setInterval(nextSlide, delay)
  }

  const stopAutoPlay = () => {
    if (slideInterval.current) clearInterval(slideInterval.current)
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
      <div className={styles.slidesContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={slide.id}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
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
