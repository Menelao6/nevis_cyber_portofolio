import styles from "./Certifications.module.css"
import React from 'react'
import Link from "next/link"

import {certificates, Certificate} from "../../json-datas/certifications-data"

export default function Certifications() {
  return (
    <section className={styles.certifications} id="certifications">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            <span className={styles.promptSymbol}>[</span>
            <span className={styles.promptCommand}>cat certifications/*</span>
            <span className={styles.promptSymbol}>]</span>
          </div>
          <h2 className={styles.sectionTitle}>Certifications &amp; Credentials</h2>
          <p className={styles.sectionSubtitle}>
            Validated expertise in cybersecurity domains
          </p>
        </div>
        
        <div className={styles.certGrid}>
          {certificates.map((cert: Certificate) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={styles.certIcon}>{cert.icon}</div>
              <div className={styles.certContent}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <div className={styles.certDetails}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
              </div>
              <div className={styles.certBadge}>
                <div className={styles.badgeInner}>
                  <span className="blinking-cursor"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAll}>
          <Link href="/certifications">
          <button className={styles.viewAllButton}>
            [ ls all_Certifications ]
          </button></Link>
        </div>
      </div>
    </section>
  )
}