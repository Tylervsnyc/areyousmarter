import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gameSign}>
        <div className={styles.lightBorder}></div>
        <h1 className={styles.title}>Are You Smarter<br />Than Mr. Fluffbutt?</h1>
        <p className={styles.subtitle}>The Ultimate Knowledge Showdown!</p>
      </div>
    </main>
  )
}
