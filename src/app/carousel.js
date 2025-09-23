import { React } from 'react'
import styles from './carousel.module.css'

const skills = [
  'Webflow',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Gatsby',
  'Node',
  'Express',
  'C#',
  '.NET',
  'Git',
  'GitHub',
  'SQL',
  'PostgreSQL',
  'RESTful APIs',
  'Contentful',
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