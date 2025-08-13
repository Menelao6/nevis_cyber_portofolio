import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BioSection from '../components/BioSection/BioSection';
import CTFCompetitions from '../components/CTFCompetitions/CTFCompetitions';
import SkillsSection from '../components/SkillsAndTools/SkillsAndTools';
import CertificationsSection from '../components/AboutCertifications/Certifications';
import styles from './aboutPage.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Im a dedicated CTFTime CTF player. I actively participate in a Capture The Flag (CTF) competitions, where I sharpen my skills.',
  openGraph: {
    title: 'About me',
    description: 'Im a dedicated CTFTime CTF player. I actively participate in a Capture The Flag (CTF) competitions, where I sharpen my skills.',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.terminalHeader}>
          <div className={styles.promptLine}>
            <span className={styles.promptSymbol}>root@home:~$</span>
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
