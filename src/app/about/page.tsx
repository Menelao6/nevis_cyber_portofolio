import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BioSection from '../components/BioSection/BioSection';
import CTFCompetitions from '../components/CTFCompetitions/CTFCompetitions';
import SkillsSection from '../components/SkillsAndTools/SkillsAndTools';
import CertificationsSection from '../components/AboutCertifications/Certifications';
import styles from './aboutPage.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nevis Hysenaj - CTF Player & Security Researcher',
  description: 'Meet Nevis Hysenaj, Tech Support Engineer and dedicated CTF player. Learn about my journey in Capture The Flag competitions, security research, and expertise in penetration testing and vulnerability analysis.',
  keywords: [
    'Nevis Hysenaj', 'CTF player', 'cybersecurity researcher', 'penetration tester',
    'security analyst', 'ethical hacker', 'capture the flag', 'CTFTime player',
    'vulnerability researcher', 'infosec professional', 'security enthusiast',
    'security research', 'CTF competitions', 'ethical hacking', 'Tech Support Engineer'
  ],
  
  openGraph: {
    title: 'About Nevis Hysenaj - CTF Player & Security Researcher',
    description: 'Meet Nevis Hysenaj, Tech Support Engineer and dedicated CTF player specializing in security research and vulnerability analysis.',
    url: 'https://nevis-portofolio.vercel.app/about',
    images: [
      {
        url: '/ctff.webp', 
        width: 1200,
        height: 630,
        alt: 'About Nevis Hysenaj - CTF Player & Security Researcher',
      },
    ],
    type: 'profile',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'About Nevis Hysenaj - CTF Player & Security Researcher',
    description: 'Meet Nevis Hysenaj, Tech Support Engineer and dedicated CTF player.',
    images: ['/ctff.webp'],
  },
  
  alternates: {
    canonical: 'https://nevis-portofolio.vercel.app/about',
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
