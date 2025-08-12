import styles from './page.module.css';

export default function ExpertisePage() {
  const expertiseAreas = [
    {
      title: 'IAM Strategy & Governance',
      description: 'Developing comprehensive IAM roadmaps, policy frameworks, and deployment oversight. Specializing in Zero Trust, Principle of Least Privilege, and Privileged Access Management (PAM).',
      keywords: ['Zero Trust', 'Least Privilege', 'RBAC/ABAC', 'IAM Program Maturity' , 'Active Directory Security Assessment'],
    },
    {
      title: 'Cloud Security Architecture',
      description: 'Securing identities and data across multi-cloud environments, including Azure, AWS, and GCP. Expertise in specific platforms like Microsoft Entra, AWS IAM, and Amazon Cognito.',
      keywords: ['Microsoft Entra', 'Cloud Access Control', 'Secure Deployments'],
    },
    {
      title: 'Data Protection & Compliance',
      description: 'Implementing robust data protection strategies to meet regulatory frameworks like GDPR and HIPAA. Focused on High-Value Asset identification, Data Loss Prevention (DLP), and privacy-by-design principles.',
      keywords: ['IRAP', 'ISM', 'ACSC - Essential Eight', 'Data Protection', 'Data Loss Prevention'],
    },
    {
      title: 'Authentication & Access Control',
      description: 'Designing and deploying modern authentication methods including Multi-Factor Authentication (MFA), passwordless solutions, SSO, and risk-based adaptive access controls.',
      keywords: ['MFA', 'Passwordless', 'SSO', 'FIDO2 Passkeys'],
    },
    {
      title: 'Security Training & Mentorship',
      description: 'Providing customized training and mentorship programs for individuals and teams. Focused on nurturing the next generation of security professionals through work-integrated learning.',
      keywords: ['Mentorship', 'Career Development', 'Cybersecurity Training'],
    },
  ];

  return (
    <div className={styles.container}>
      <h1>My Expertise & Services</h1>
      <p className={styles.leadParagraph}>
        I offer strategic and technical guidance to organizations seeking to build secure and resilient digital infrastructures. My services are focused on delivering tangible business value and aligning security with your core objectives.
      </p>

      <div className={styles.expertiseGrid}>
        {expertiseAreas.map((area) => (
          <div key={area.title} className={styles.expertiseCard}>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
            <div className={styles.keywords}>
              {area.keywords.map((keyword) => (
                <span key={keyword} className={styles.keywordTag}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}