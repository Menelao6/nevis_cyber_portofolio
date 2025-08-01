"use client"

import { useState } from "react";
import styles from '../Header/Header.module.css'

export default function Header() {
    const [activePage, setActivePage] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ["Home", "Write-Ups", "Certifications", "Blog", "Contact"];

    return(
            <header className={styles.header}>
      <div className={styles.navContainer}>
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={styles.mobileMenuIcon}>
            {isMobileMenuOpen ? '✕' : '≡'}
          </span>
          <span className={styles.prompt}>&gt;</span>
        </button>
        
        <div className={`${styles.desktopNav} ${isMobileMenuOpen ? styles.mobileNavVisible : ''}`}>
          {navItems.map((item) => (
            <button
              key={item}
              className={`${styles.navItem} ${activePage === item ? styles.active : ''}`}
              onClick={() => {
                setActivePage(item);
                setIsMobileMenuOpen(false);
              }}
            >
              {item}
              {activePage === item && <span className="blinking-cursor"></span>}
            </button>
          ))}
        </div>
      </div>
    </header>

    )
}

