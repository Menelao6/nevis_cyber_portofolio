import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BioSection from '../components/BioSection/BioSection';
import CTFCompetitions from '../components/CTFCompetitions/CTFCompetitions';
import SkillsSection from '../components/SkillsAndTools/SkillsAndTools';
import CertificationsSection from '../components/AboutCertifications/Certifications';
import styles from './aboutPage.module.css';

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