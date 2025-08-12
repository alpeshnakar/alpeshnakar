"use client";

import styles from './page.module.css';

export default function ConnectPage() {
  return (
    <div className={styles.container}>
      <h1>Connect with Alpesh</h1>
      <p className={styles.leadParagraph}>
        I'm always open to discussing new projects, speaking opportunities, or mentorship. Please feel free to reach out using the links below.
      </p>

      <div className={styles.connectGrid}>
        <div className={styles.connectCard}>
          <h2>Email</h2>
          <p>
            The best way to get in touch for consulting, advisory services, or speaking requests is via email.
          </p>
          <a href="mailto:contact@alpeshnakar.com" className={styles.connectLink}>
            Send an email &rarr;
          </a>
        </div>

        <div className={styles.connectCard}>
          <h2>LinkedIn</h2>
          <p>
            Connect with me on LinkedIn to follow my professional journey, industry insights, and latest updates.
          </p>
          <a href="https://www.linkedin.com/in/alpeshnakar" target="_blank" rel="noopener noreferrer" className={styles.connectLink}>
            Connect on LinkedIn &rarr;
          </a>
        </div>

        <div className={styles.connectCard}>
          <h2>Bluesky</h2>
          <p>
            Follow my commentary and reposts on cutting-edge cybersecurity topics on Bluesky.
          </p>
          <a href="https://bsky.app/profile/alpeshnakar.com" target="_blank" rel="noopener noreferrer" className={styles.connectLink}>
            Follow on Bluesky &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}