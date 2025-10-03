'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './fadeInSection.module.css'

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1,
      }
    )
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [])

  return (
    <div ref={ref} className={isVisible ? styles.fadeInVisible : styles.fadeIn}>
      {children}
    </div>
  );
}
