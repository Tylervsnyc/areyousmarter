import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src="/images/header.jpg"
          alt="Game Show Header"
          width={1200}
          height={200}
          className={styles.headerImage}
          priority
        />
      </header>
      <div className={styles.hero}>
        <div className={styles.gameShowFrame}>
          <div className={styles.marqueeLight}></div>
          <div className={styles.catGreeting}>
            <Image
              src="/images/mrfb.jpg"
              alt="Mr. Fluffbutt - Your Game Show Host"
              width={300}
              height={300}
              priority
              className={styles.hostImage}
            />
            <h1>Are You Smarter<br />Than Mr. Fluffbutt?</h1>
            <p>The Ultimate Knowledge Showdown!</p>
            <button className={styles.startButton}>
              COME ON DOWN!
            </button>
            <div className={styles.subImages}>
              <Image
                src="/images/lionking.jpg"
                alt="Lion King Reference"
                width={150}
                height={150}
                className={styles.subImage}
              />
              <Image
                src="/images/mrfblap.jpg"
                alt="Mr. Fluffbutt on Laptop"
                width={150}
                height={150}
                className={styles.subImage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
