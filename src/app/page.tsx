import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FeaturedWriteups from "./components/FeaturedWriteups/FeaturedWriteups";
import Certifications from "./components/Certifications/Certifications"
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools"
import Footer from "./components/Footer/Footer"
import type { Metadata } from 'next';
import { getClient } from '../sanity/lib/sanity';
import { groq } from 'next-sanity';

export const metadata: Metadata = {
  title: 'Nevis Hysenaj | Tech Support Engineer & CTF Player',
  description: 'Cybersecurity portfolio of Nevis Hysenaj featuring penetration testing projects, CTF writeups, vulnerability research, and ethical hacking achievements. Explore advanced security techniques and methodologies.',
  keywords: [
    'Nevis Hysenaj', 'cybersecurity portfolio', 'penetration testing', 
    'CTF player', 'ethical hacking', 'vulnerability research', 
    'security consultant', 'capture the flag', 'infosec', 
    'cybersecurity researcher', 'security analyst', 'bug bounty hunter',
    'penetration tester', 'security writeups', "Tech Support Engineer"
  ],
  
  openGraph: {
    title: 'Nevis Hysenaj | Tech Support Engineer & CTF Player',
    description: 'Cybersecurity portfolio featuring penetration testing projects, CTF writeups, vulnerability research, and ethical hacking achievements.',
    url: 'https://nevis-portofolio.vercel.app',
    images: [
      {
        url: '/ctff.webp',
        width: 1200,
        height: 630,
        alt: 'Nevis Hysenaj - Cybersecurity Portfolio',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'CyberTerminal'
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Nevis Hysenaj | Tech Support Engineer & CTF Player',
    description: 'Cybersecurity portfolio featuring penetration testing, CTF writeups, and vulnerability research.',
    images: ['/ctff.webp'],
  },
  
  alternates: {
    canonical: 'https://nevis-portofolio.vercel.app',
  },
  
  category: 'Technology',
  classification: 'Cybersecurity Portfolio',
  
  other: {
    'og:profile:first_name': 'Nevis',
    'og:profile:last_name': 'Hysenaj',
    'profile:username': 'nevis-hysenaj'
  }
};

const fetchOptions = {
  next: { revalidate: 30 }
};

export default async function Home() {
  const client = getClient(false);
  const writeups = await client.fetch(groq`
    *[_type == "writeup"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      competition,
      categories[]->{title},
      author[]->{name},
      featured
    }
  `, {}, fetchOptions);
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedWriteups writeups={writeups} />
      <Certifications />
      <SkillsAndTools />
      <Footer />
    </div>
  );
}
