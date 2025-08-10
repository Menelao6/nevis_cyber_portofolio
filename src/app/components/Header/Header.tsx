'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Add this import
import { useTheme } from '../ThemeProvider/ThemeProvider';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname(); // Get current path
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Write-ups', path: '/writeups' },
    { name: 'About', path: '/about' },
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
        
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
            >
              {item.name}
              {pathname === item.path && <span className="blinking-cursor"></span>}
            </Link>
          ))}
        </nav>
        
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
      
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`${styles.mobileNavItem} ${pathname === item.path ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
            {pathname === item.path && <span className="blinking-cursor"></span>}
          </Link>
        ))}
      </div>
    </header>
  );
}