import WriteupList from '../components/WriteupList/WriteupList';
import { getClient } from '../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import styles from './Writeups.module.css';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

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
            user@cybersecurity:~/writeups$ ls
          </div>
          <h1 className={styles.sectionTitle}>Security Write-ups</h1>
          <p className={styles.sectionSubtitle}>
            In-depth analysis of vulnerabilities, exploits, and security research
          </p>
        </div>
        
        <WriteupList writeups={writeups} />
      </div>
    </section>
    <Footer />
    </div>
  );
}