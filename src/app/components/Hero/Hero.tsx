"use client"
import {useState, useEffect} from 'react'
import styles from "./Hero.module.css"
import Link from "next/link"

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.scanline}></div>
      
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.close}></span>
            <span className={styles.minimize}></span>
            <span className={styles.maximize}></span>
          </div>
          <div className={styles.terminalTitle}>user@cybersecurity:~</div>
        </div>
        
        <div className={styles.terminalContent}>
          <div className={styles.promptLine}>
            <span className={styles.promptSymbol}>$</span>
            <span className={styles.promptText}>Welcome to my Cybersecurity Terminal</span>
          </div>
          
          <h1 className={styles.headline}>
            Securing the <span className={styles.highlight}>Digital Spaces</span>
          </h1>
          
          <p className={styles.subtitle}>
            Penetration Testing • Vulnerability Research • Security Architecture
          </p>
          
          <div className={styles.ctaContainer}>
            <Link href="writeups">
              <button className={styles.ctaButton}>
              <span className={styles.buttonText}>[ ls writeups/ ]</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
            </Link>
            
            <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>or</span>
              <span className={styles.dividerLine}></span>
            </div>
            
            <Link href="certifications">
               <button className={styles.secondaryButton}>
              [ cat certifications/* ]
            </button>
            </Link>
          </div>
        </div>
        
        <div className={styles.terminalFooter}>
          <div className={styles.statusBar}>
            <span className={styles.statusItem}>CONNECTED</span>
            <span className={styles.statusItem}>ENCRYPTED</span>
            <span className={styles.statusItem}>SECURE</span>
          </div>
        </div>
      </div>
      
      {!isMobile && (
        <div className={styles.scrollingText}>
          <div className={styles.scrollTrack}>
            <span>SECURE • AUDIT • PROTECT • ANALYZE • HARDEN • MONITOR • RESPOND • FORENSICS • THREAT HUNTING • SECURE • AUDIT • PROTECT • ANALYZE • HARDEN • MONITOR • RESPOND • FORENSICS • THREAT HUNTING</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;