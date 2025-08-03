'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useTheme } from '../ThemeProvider/ThemeProvider';

export default function Header() {
  const [activePage, setActivePage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Write-ups', path: '/writeups' },
    { name: 'Certifications', path: '#certifications' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.prompt}>&gt;</span>
          <span>CyberTerminal</span>
          <span className="blinking-cursor"></span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.navItem} ${activePage === item.name ? styles.active : ''}`}
              onClick={() => setActivePage(item.name)}
            >
              {item.name}
              {activePage === item.name && <span className="blinking-cursor"></span>}
            </Link>
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
          <Link
            key={item.name}
            href={item.path}
            className={`${styles.mobileNavItem} ${activePage === item.name ? styles.active : ''}`}
            onClick={() => {
              setActivePage(item.name);
              setIsMobileMenuOpen(false);
            }}
          >
            {item.name}
            {activePage === item.name && <span className="blinking-cursor"></span>}
          </Link>
        ))}
      </div>
    </header>
  );
}