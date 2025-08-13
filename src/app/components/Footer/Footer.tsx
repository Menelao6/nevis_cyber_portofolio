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
              root@home:~$ cd contact/
            </div>
            <h3 className={styles.brandName}> Terminal</h3>
            <p className={styles.brandTagline}>
              Making Everything Work by Yelling at It
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/writeups">Write-ups</a></li>
              <li><a href="/about">About Me</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="mailto:hysenajnevis002@gmail.com">Email</a></li>
              <li><a href="https://https://linkedin.com/in/nevis-hysenaj/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://ctftime.org/user/204664" target="_blank" rel="noopener noreferrer">CTFtime</a></li>
              <li><a href="https://app.hackthebox.com/profile/256179" target="_blank" rel="noopener noreferrer">HackTheBox</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Terminal. All rights reserved.
          </div>
          <div className={styles.terminalPrompt}>
            root@home:~/contact$<span className="blinking-cursor"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
