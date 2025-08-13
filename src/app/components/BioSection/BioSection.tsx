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
</div>

<div className={styles.content}>
  <p>
    Greetingssssssss! 
    I'm Nevis, a Tech Support Engineer and CTF player.
    Everyone calls themselves a Cybersecurity Enthusiast but I just call myself a professional Google searcher.
    I'm so passionate about cybersecurity that I've convinced myself that finding a flag in a CTF is a legitimate form of exercise. 
    I am right noo??!!
    
  </p>
  <p>
    Anyways... If you're still not convinced I'm a professional Googler, scroll down for a list of my courses, certs, and the tools I probably found on Stack Overflow.
  </p>
</div>
    </section>
  );
};

export default BioSection;

