import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FeaturedWriteups from "./components/FeaturedWriteups/FeaturedWriteups";
import Certifications from "./components/Certifications/Certifications"
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools"
import Footer from "./components/Footer/Footer"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nevis Hysenaj | Cybersecurity Portfolio',
  description: 'Cybersecurity portfolio showcasing penetration testing, CTF achievements, and security research projects.',
  openGraph: {
    title: 'Cybersecurity Portfolio | Nevis Hysenaj',
    description: 'Explore penetration testing projects, CTF competitions, and ethical hacking research by Nevis Hysenaj.',
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedWriteups />
      <Certifications />
      <SkillsAndTools />
      <Footer />
    </div>
  );
}
