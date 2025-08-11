"use client";

import styles from './page.module.css';
import Link from 'next/link';

export default function InsightsPage() {
  const insights = [
    {
      slug: 'zero-trust-essentials',
      title: 'Zero Trust: An Essential Guide to Securing Modern Networks',
      date: 'August 11, 2025',
      summary: 'A deep-dive into the practical steps for transitioning your organization to a Zero Trust security model, focusing on the "Never Trust, Always Verify" principle.',
    },
    {
      slug: 'implementing-zero-trust',
      title: 'Implementing Zero Trust in Hybrid Environments',
      date: 'August 10, 2025',
      summary: 'A deep-dive into the practical steps for transitioning your organization to a Zero Trust security model, focusing on the "Never Trust, Always Verify" principle.',
    },
    {
      slug: 'gdpr-compliance-iam',
      title: 'Achieving GDPR Compliance with a Modern IAM Strategy',
      date: 'July 25, 2025',
      summary: 'Explore how a robust Identity and Access Management framework is the foundational pillar for meeting data protection regulations like GDPR.',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Insights & Publications</h1>
      <p className={styles.leadParagraph}>
        This is where you will find my latest articles, whitepapers, and thought leadership on current and emerging trends in cybersecurity, IAM, and data protection.
      </p>

      <div className={styles.insightsList}>
        {insights.map((insight) => (
          <Link href={`/insights/${insight.slug}`} key={insight.slug} className={styles.insightCard}>
            <h3>{insight.title}</h3>
            <p className={styles.date}>{insight.date}</p>
            <p>{insight.summary}</p>
            <span className={styles.readMore}>Read more &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}