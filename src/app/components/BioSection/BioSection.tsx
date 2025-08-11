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
  Cybersecurity enthusiast, penetration tester in training, and CTF competitor.
</p>
</div>

<div className={styles.content}>
  <p>
    I'm Nevis Hysenaj — a cybersecurity enthusiast, penetration tester in training, and CTF competitor. 
    I love exploring system weaknesses, building exploits, and then figuring out how to defend against them.

  </p>
  <p>
    My toolkit includes Nmap, Burp Suite, Wireshark, and Python scripting, 
    and I regularly practice on platforms like HackTheBox and TryHackMe. 
    I'm passionate about bridging Red and Blue team skills, aiming to grow as a purple teamer who understands both attack and defense.
  </p>
  <p>
    Cybersecurity isn't just my career path — it's my obsession. 
    Whether I'm solving a CTF challenge or digging into new vulnerabilities, I'm always chasing the next “flag.”
  </p>
</div>
    </section>
  );
};

export default BioSection;
