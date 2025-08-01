"use client"

import { useState, useEffect } from "react";
import styles from '../Header/Header.module.css'

const Header: React.FC = () => {
  const [activePage, setActivePage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = ['Home', 'Write-ups', 'Certifications', 'Blog', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.prompt}>&gt;</span>
          <span>CyberTerminal</span>
          <span className="blinking-cursor"></span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item}
              className={`${styles.navItem} ${activePage === item ? styles.active : ''}`}
              onClick={() => setActivePage(item)}
            >
              {item}
              {activePage === item && <span className="blinking-cursor"></span>}
            </button>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <button
            key={item}
            className={`${styles.mobileNavItem} ${activePage === item ? styles.active : ''}`}
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
    </header>
  );
};

export default Header;