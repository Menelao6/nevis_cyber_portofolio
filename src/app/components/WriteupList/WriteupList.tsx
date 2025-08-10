import React from "react";
import Link from "next/link";
import styles from "./WriteupList.module.css";

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
}

interface Props {
  writeups: Writeup[];
}

const WriteupList: React.FC<Props> = ({ writeups }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.cards}>
      {writeups.map((writeup) => (
        <div key={writeup._id} className={styles.card}>
          <h3 className={styles.cardTitle}>{writeup.title}</h3>
          
          {writeup.excerpt && (
            <p className={styles.excerpt}>{writeup.excerpt}</p>
          )}
          
          <div className={styles.metaRow}>
            <span className={styles.date}>
              {formatDate(writeup.publishedAt)}
            </span>
            
            {writeup.categories?.length > 0 && (
              <span className={styles.category}>
                {writeup.categories[0].title}
              </span>
            )}
          </div>
          
          <Link href={`/writeups/${writeup.slug}`} className={styles.readMore}>
            [ read more ]
            <span className={styles.cursor}>_</span>
          </Link>
          
          <div className={styles.cardGlow}></div>
        </div>
      ))}
    </div>
  );
};

export default WriteupList;