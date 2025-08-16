import React from "react";
import styles from "./FeaturedWriteups.module.css"
import Link from "next/link"

interface Category {
  title: string;
}

interface Author {
  name: string;
}

interface Writeup {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  competition: string;
  categories: Category[];
  author: Author[];
  featured?: boolean; // Add this field to mark featured posts
}

interface Props {
  writeups: Writeup[]; // Now receives data as props
}

const FeaturedWriteups: React.FC<Props> = ({ writeups }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter only featured writeups
  const featuredWriteups = writeups.filter(writeup => writeup.featured === true);

  return (
    <section className={styles.writeups}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.terminalPrompt}>
            root@home:~/featured_write-ups$ ls
          </div>
          <h2 className={styles.sectionTitle}>Featured Write-ups</h2>
        </div>
        
        <div className={styles.cards}>
          {featuredWriteups.map((writeup) => (
            <div key={writeup._id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{writeup.title}</h3>
              </div>
              <div className={styles.cardBody}>
                {writeup.excerpt && (
                  <p>{writeup.excerpt}</p>
                )}
              </div>

              <div className={styles.meta}>
                <span className={styles.date}>
                  {formatDate(writeup.publishedAt)}
                </span>
                {writeup.categories?.length > 0 && (
                  <span className={styles.category}>
                    {writeup.categories[0].title}
                  </span>
                )}
              </div>
              
              <Link href={`/writeups/${writeup.slug}`}>
                <button className={styles.readMore}>
                  [ read more ]<span className="blinking-cursor"></span>
                </button>
              </Link>
              
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriteups;