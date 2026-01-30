import React from 'react'
import styles from './cssFiles/carousel.module.css'

const skills = [
  'Webflow',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Python',
  'React',
  'Next.js',
  'Gatsby',
  'RESTful APIs',
  'Node',
  'Express',
  'Git',
  'GitHub',
  'SQL',
  'Databases',
  'CI/CD',
]

export default function Carousel () {
  const allSkills = [...skills, ...skills]

  return (
    <div className={styles.carouselContainer}>
      <h3>Acquired Skills</h3>
      <div className={styles.carouselOverlay}></div>
      <div className={styles.carouselTrack}>
        {
          allSkills.map((skill) => (
            <p className={styles.skill} key={Math.random()}>{skill}</p>
          ))
        }
      </div>
    </div>
  )
}