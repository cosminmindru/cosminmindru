import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img
        className={styles.image}
        src="/images/tumbleweed.gif"
        alt="Next.js Logo"
      />
      <h1 className={styles.heading}>come back later.</h1>
    </main>
  );
}
