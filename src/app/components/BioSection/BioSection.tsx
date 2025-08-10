import React from 'react';
import styles from './BioSection.module.css';

const BioSection = () => {
  return (
    <section className={styles.bio}>
      <div className={styles.sectionHeader}>
        <div className={styles.terminalPrompt}>
          [ cat bio.txt ]
        </div>
        <h2 className={styles.sectionTitle}>About Me</h2>
<p className={styles.sectionSubtitle}>
  Cybersecurity professional with a focus on ethical hacking, penetration testing, and CTF competitions.
</p>
</div>

<div className={styles.content}>
  <p>
    I'm Nevis Hysenaj, a dedicated cybersecurity specialist passionate about uncovering and mitigating 
    security vulnerabilities. My expertise spans penetration testing, vulnerability research, and secure 
    application development. Over the years, I've actively participated in Capture The Flag (CTF) competitions 
    and engaged with global security communities.
  </p>
  <p>
    My work blends deep technical knowledge with strategic, creative problem-solving — allowing me to tackle 
    complex security challenges and deliver practical, effective solutions. I also enjoy creating writeups 
    to share my findings and help others learn from real-world security scenarios.
  </p>
  <p>
    When I'm not testing systems or analyzing exploits, you'll often find me contributing to open-source 
    security tools, mentoring aspiring ethical hackers, or exploring new cybersecurity certifications 
    to sharpen my skills.
  </p>
</div>
    </section>
  );
};

export default BioSection;