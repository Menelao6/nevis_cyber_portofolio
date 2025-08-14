import WriteupList from '../components/WriteupList/WriteupList';
import { getClient } from '../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import styles from './Writeups.module.css';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTF Write-ups & Security Solutions by Nevis Hysenaj',
  description: 'Comprehensive collection of CTF writeups, penetration testing methodologies, and cybersecurity challenge solutions. Learn advanced techniques for web exploitation, cryptography, reverse engineering, and more.',
  keywords: [
    'CTF writeups', 'capture the flag solutions', 'penetration testing writeups',
    'cybersecurity challenges', 'web exploitation', 'reverse engineering',
    'cryptography challenges', 'binary exploitation', 'forensics writeups',
    'network security', 'CTF solutions', 'ethical hacking tutorials',
    'Nevis Hysenaj writeups', 'security research writeups', 'vulnerability analysis',
    'CTF player', 'security challenges', 'infosec writeups', 'bug bounty writeups',
    'security solutions', 'CTF techniques', 'ethical hacking writeups', 'security research", "Tech Support Engineer'
  ],
  
  openGraph: {
    title: 'CTF Write-ups & Security Solutions by Nevis Hysenaj',
    description: 'Comprehensive collection of CTF writeups and cybersecurity challenge solutions covering web exploitation, cryptography, reverse engineering, and penetration testing.',
    url: 'https://nevis-portofolio.vercel.app/writeups',
    images: [
      {
        url: '/ctff.svg', 
        width: 1200,
        height: 630,
        alt: 'CTF Write-ups Collection - Security Challenge Solutions',
      },
    ],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'CTF Write-ups & Security Solutions',
    description: 'Comprehensive collection of CTF writeups and cybersecurity challenge solutions',
    images: ['/ctff.svg'],
  },
  
  alternates: {
    canonical: 'https://nevis-portofolio.vercel.app/writeups',
  },
  
  category: 'Education',
  classification: 'Cybersecurity Tutorials',
};

const fetchOptions = {
  next: { revalidate: 30 }
};

export default async function WriteupsPage() {
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
      author[]->{name}
    }
  `, {}, fetchOptions);

  return (
    <div className={styles.mainContainer}>
      <Header />
      <section className={styles.writeups}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            root@home:~/writeups$ ls
          </div>
          <p className={styles.sectionSubtitle}>
          I've solved some CTF challenges and written about them. Here's where I share the evidence.
          </p>
        </div>
        
        <WriteupList writeups={writeups} />
      </div>
    </section>
    <Footer />
    </div>
  );

}
