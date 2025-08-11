import WriteupList from '../components/WriteupList/WriteupList';
import { getClient } from '../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import styles from './Writeups.module.css';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Write-ups | Nevis Hysenaj',
  description: 'Detailed security write-ups, CTF challenge solutions, and vulnerability research by Nevis Hysenaj.',
  openGraph: {
    title: 'Security Write-ups | Nevis Hysenaj',
    description: 'Explore a collection of in-depth write-ups on security vulnerabilities, exploits, and CTF challenges.',
  },
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
          <h1 className={styles.sectionTitle}>Security Write-ups</h1>
          <p className={styles.sectionSubtitle}>
            Here's where I share my CTF journeys — the tools I used, 
            the paths I took, and the lessons learned. 
            No spoilers for active challenges, just clean, technical breakdowns and a few “aha” moments.
          </p>
        </div>
        
        <WriteupList writeups={writeups} />
      </div>
    </section>
    <Footer />
    </div>
  );
}