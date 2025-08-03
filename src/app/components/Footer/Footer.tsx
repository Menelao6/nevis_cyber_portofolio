import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.terminalPrompt}>
              user@cybersecurity:~$ cd contact/
            </div>
            <h3 className={styles.brandName}>Cybersecurity Terminal</h3>
            <p className={styles.brandTagline}>
              Exploring vulnerabilities, securing digital spaces
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#writeups">Write-ups</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="mailto:contact@cybersecurityterminal.com">Email</a></li>
              <li><a href="https://linkedin.com/in/cybersecurity-expert" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/cybersecurity-expert" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/cybersec_expert" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Cybersecurity Terminal. All rights reserved.
          </div>
          <div className={styles.terminalPrompt}>
            user@cybersecurity:~/contact$<span className="blinking-cursor"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;