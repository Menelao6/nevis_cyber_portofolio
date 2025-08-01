import React from 'react'
import styles from "./Hero.module.css"
import Link from "next/link"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.terminalBox}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.close}></span>
            <span className={styles.minimize}></span>
            <span className={styles.maximize}></span>
          </div>
          <div className={styles.terminalTitle}>user@cybersecurity:~</div>
        </div>
        <div className={styles.terminalContent}>
          <h1>Welcome to my Cybersecurity Terminal</h1>
          <p>
            Exploring vulnerabilities,<br />
            securing digital spaces<span className="blinking-cursor"></span>
          </p>
          <Link href="/writeups">
          <button className={styles.ctaButton}>
            [ ls writeups/ ]
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
