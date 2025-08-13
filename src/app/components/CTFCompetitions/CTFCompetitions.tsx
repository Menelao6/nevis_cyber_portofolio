import React from 'react';
import styles from './CTFCompetitions.module.css';

// Sample CTF data - replace with your actual data
const ctfCompetitions = [
  { id: 1, name: "World Wide CTF 2025", date: "2025", placement: "9/850, team: THEM?!" },
  { id: 2, name: "ToH CTF 2025", date: "2025", placement: "14/393, team: THEM?!" },
  { id: 3, name: "L3akCTF 2025", date: "2025", placement: "51/1587, team: THEM?!" },
  { id: 4, name: "NahamCon 2025", date: "2025", placement: "109/2941, Individual" },
  { id: 5, name: "Act Now CyberDrill", date: "2025", placement: "2/30, Individual" },
  { id: 6, name: "Cyber Wave Tirana", date: "2025", placement: "6/30, team: B2" },
];

const CTFCompetitions = () => {
  return (
    <section className={styles.ctf}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>CTF Competitions</h2>
        <p className={styles.sectionSubtitle}>
          Capture The Flag events I've participated in
        </p>
      </div>
      
      <div className={styles.ctfGrid}>
        {ctfCompetitions.map((ctf) => (
          <div key={ctf.id} className={styles.ctfCard}>
            <div className={styles.ctfHeader}>
              <h3 className={styles.ctfName}>{ctf.name}</h3>
              <span className={styles.ctfDate}>{ctf.date}</span>
            </div>
            <div className={styles.ctfPlacement}>{ctf.placement}</div>
            <div className={styles.ctfGlow}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTFCompetitions;
