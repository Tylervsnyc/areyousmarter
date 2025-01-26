import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="https://substack.com/@tylervschwartz" className={styles.substackLink} target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/substack.jpg"
          alt="Follow on Substack"
          width={50}
          height={50}
          className={styles.substackIcon}
        />
      </a>
      
      <div className={styles.gameTitle}>
        <div className={styles.blinkingLights}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={styles.light}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            />
          ))}
        </div>
        <h1>Are You Smarter<br />Than Mr. Fluffbutt?</h1>
        <button className={styles.startButton}>
          Start The Challenge!
        </button>
      </div>
    </main>
  )
}
