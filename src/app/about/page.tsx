import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BioSection from '../components/BioSection/BioSection';
import CTFCompetitions from '../components/CTFCompetitions/CTFCompetitions';
import SkillsSection from '../components/SkillsAndTools/SkillsAndTools';
import CertificationsSection from '../components/AboutCertifications/Certifications';
import styles from './aboutPage.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Nevis Hysenaj',
  description: 'Learn more about Nevis Hysenaj, a cybersecurity professional passionate about ethical hacking and CTF competitions.',
  openGraph: {
    title: 'About | Nevis Hysenaj',
    description: 'Discover the background, skills, and cybersecurity journey of Nevis Hysenaj, from CTF competitions to penetration testing.',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.terminalHeader}>
          <div className={styles.promptLine}>
            <span className={styles.promptSymbol}>user@cybersecurity:~$</span>
            <span className={styles.promptCommand}>cat about_me.txt</span>
          </div>
        </div>
        
        <BioSection />
        <CTFCompetitions />
        <SkillsSection />        
        <CertificationsSection />
      </main>

      <Footer />
    </div>
  );
}