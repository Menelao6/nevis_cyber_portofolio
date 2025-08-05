import WriteupList from '../components/WriteupList/WriteupList';
import { client } from '../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import styles from './Writeups.module.css';
import Header from '../components/Header/Header';

// Add revalidation option
const fetchOptions = {
  next: { revalidate: 30 } // Revalidate every 30 seconds
};

export default async function WriteupsPage() {
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
    <div className={styles.container}>
      <Header />
      <div className={styles.terminalHeader}>
        <div className={styles.promptLine}>
          <span className={styles.promptSymbol}>user@cybersecurity:~$</span>
          <span className={styles.promptCommand}>cd writeups/</span>
        </div>
        <h1 className={styles.title}>Security Write-ups</h1>
        <p className={styles.subtitle}>
          In-depth analysis of vulnerabilities, exploits, and security research
        </p>
      </div>
      
      <WriteupList writeups={writeups} />
    </div>
  );
}