import styles from './page.module.css';

export default function HomePage() {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>alpesh nakar</h1>
          <h2 className={styles.heroSubtitle}>Identity and Access Management & Data Protection Subject Matter Expert</h2>
          <p className={styles.heroDescription}>Securing Digital Futures. Expert Insights in Identity, Access, and Data Protection.</p>
          <button className={styles.heroButton}>Explore My Expertise</button>
        </div>
      </div>
    </div>
  );
}