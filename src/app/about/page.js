import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>About Alpesh Nakar</h1>
      <p className={styles.leadParagraph}>
        Alpesh Nakar is a multifaceted leader, educator, and innovator in the fields of Identity and Access Management (IAM) and Data Protection. His unique professional brand is built on a foundation of teaching, practical application, and pioneering thought leadership, making him a go-to expert for securing digital futures.
      </p>

      <div className={styles.section}>
        <h2>Professional Journey & Expertise</h2>
        <p>
          As the CEO and CTO of Educ4te, a recognized Microsoft Learning Partner in Australia, Alpesh leverages his entrepreneurial drive and deep connections within the technology and education ecosystems. His expertise, honed during his significant tenure as a Security Consultant at Avanade Australia, is particularly profound in cybersecurity. This hands-on experience in implementing security solutions is complemented by a strategic and educational approach to problem-solving.
        </p>
        <p>
          He has been nominated as "Best Security Mentor" in the 2022 Australia Women in Security Awards, a testament to his dedication to fostering new talent and his belief that effective security is about both technology and people.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Mentorship & Publications</h2>
        <p>
          A passionate educator, Alpesh is a published author whose audiobook, "Microsoft Certifications and Career Success," offers invaluable insights into cybersecurity career transitions. His innovative work-integrated learning pathways for graduates and career-transitioning individuals highlight a practical, impact-driven approach to education within the cybersecurity domain.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Philosophy & Vision</h2>
        <p>
          Alpesh's professional philosophy is rooted in the Zero Trust Security Model, a principle he actively champions with the mantra "Never Trust. Always Verify." He believes that successful security initiatives depend on aligning technical solutions with business goals and fostering a security-aware culture. His work extends beyond technical deep-dives to address the tangible business benefits of robust security, such as risk reduction, improved operational efficiency, and regulatory compliance.
        </p>
      </div>
    </div>
  );
}