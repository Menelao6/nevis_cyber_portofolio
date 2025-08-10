import React from "react";
import styles from "./FeaturedWriteups.module.css"
import Link from "next/link"

import { writeups, Writeup} from "../../json-datas/FeaturedWriteups-data"

const FeaturedWriteups: React.FC = () => {
    return (
    <section className={styles.writeups}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            user@cybersecurity:~/featured_write-ups$ ls
          </div>
          <h2 className={styles.sectionTitle}>Featured Security Write-ups</h2>
          <p className={styles.sectionSubtitle}>
            In-depth analysis of vulnerabilities and defense strategies
          </p>
        </div>
        
        <div className={styles.cards}>
          {writeups.map((writeup) => (
            <div key={writeup.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{writeup.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p>{writeup.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.meta}>
                  <span className={styles.date}>{writeup.date}</span>
                  <span className={styles.category}>{writeup.category}</span>
                </div>
                <Link href="writeups">
                <button className={styles.readMore}>
                  [ read more ]<span className="blinking-cursor"></span>
                </button>
                </Link>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriteups
