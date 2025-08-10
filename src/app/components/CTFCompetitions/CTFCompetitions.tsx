import React from 'react';
import styles from './CTFCompetitions.module.css';

// Sample CTF data - replace with your actual data
const ctfCompetitions = [
  { id: 1, name: "DEF CON CTF", date: "2023", placement: "Top 50" },
  { id: 2, name: "HackTheBox Cyber Apocalypse", date: "2023", placement: "Top 100" },
  { id: 3, name: "PicoCTF", date: "2022", placement: "Top 5%" },
  { id: 4, name: "Google CTF", date: "2022", placement: "Top 200" },
  { id: 5, name: "Facebook CTF", date: "2021", placement: "Top 150" },
  { id: 6, name: "OverTheWire", date: "2021", placement: "Completed all levels" },
];

const CTFCompetitions = () => {
  return (
    <section className={styles.ctf}>
      <div className={styles.sectionHeader}>
        <div className={styles.terminalPrompt}>
          [ cat ctf_history.txt ]
        </div>
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