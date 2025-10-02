'use client'
import React, { useRef, useEffect } from 'react'
import styles from '.././page.module.css';
import thisPageStyles from './marketing-site.module.css'
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
              href=''
              style={{
                opacity: '0',
                pointerEvents: 'none'
              }}
            >
              Prev
            </Link>

            <h2 className={thisPageStyles.heading}>Marketing Site</h2>

            <Link
              className={thisPageStyles.next}
              href='/tic-tac-toe'
            >
              Next
            </Link>
          </div>

          <div className={thisPageStyles.description}>
            <Link
              className={thisPageStyles.button}
              href='https://entrata.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              View The Site
            </Link>
            
            <p>As a former Full Stack Web Developer for Entrata, I was one of the founding architects for their modern Marketing Site that launched in early 2023. It was built to be highly scalable and flexible, allowing marketing users to create and maintain any number of customized web pages with a quick turn-around. It was also large and content-heavy. This was a massive undertaking which involved a wide variety of tasks. Some of my key contributions are listed as follows:</p>

            <ul>
              <li>I designed the back end system in Contentful, providing an access point for non-technical marketing users to enter and update content for every page on the site, and providing the front end with an API for automatic page generation.</li>
              <li>I trained non-technical staff on the proper use of Contentful to create content.</li>
              <li>I managed git version control with GitHub, and provided training for my team on proper steps to avoid/handle merge conflicts.</li>
              <li>I helped develop the front end, built with Gatsby, React, JavaScript, and CSS. The front end communicated with the Contentful API to read content according to design and automatically generate wep pages built from our library of custom React components.</li>
              <li>I created new React components or custom pages for the site according to Figma designs received from the design team.</li>
              <li>Using Node.js, I developed a script to communicate with the legacy CMS API and Contentful API to automatically retrieve, modify, and import hundreds of records of legacy site data, all with no data loss.</li>
              <li>Using GitHub actions, I created and managed webhooks and deployment commands to maintain a Continuous Deployment strategy, which offered content creators a testing environment and deployed production updates during safe times.</li>
              <li>I developed custom web applications to fulfill the needs of internal teams.</li>
              <li>I developed integrations as needed for the site.</li>
              <li>I provided continuous support, troubleshooting, and debugging for the site.</li>
            </ul>

            <p>Roughly 1 year after a successful launch, our team was directed to migrate the site to Webflow in an effort to reduce CMS costs. My key contributions to the Webflow project are listed as follows:</p>

            <ul>
              <li>I quickly became proficient in developing with Webflow, including but not limited to bulk CMS page creation, custom page creation, animation, custom code, and integrations.</li>
              <li>I ran dignostics on page speed and other metrics, and took steps to improve them.</li>
              <li>I provided continuous support, troubleshooting, and debugging for the site.</li>
            </ul>

            <p>Unfortunately, I was laid off due to department restructuring in early 2025 and am no longer a part of the project. Changes may have been made since my departure, but feel free to take a look at <span><Link className={thisPageStyles.link} href='https://entrata.com' target='_blank' rel='noopener noreferrer'>entrata.com</Link></span>. I learned so much from my work at Entrata and look forward to applying it to my next endeavors.</p>

          </div>
        </FadeInSection>

      </main>
    </div>
  );
}