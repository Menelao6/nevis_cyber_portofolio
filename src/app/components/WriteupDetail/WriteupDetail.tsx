import React from "react";
import { urlFor } from "../../../sanity/lib/sanity";
import Image from "next/image";
import ContentRenderer from "../ContentRenderer/ContentRenderer";
import styles from "./WriteupDetail.module.css";
import Link from "next/link";

interface Author {
  name: string;
}

interface Category {
  title: string;
}

interface Writeup {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  competition: string;
  content: any;
  categories: Category[];
  author: Author[];
}

interface Props {
  writeup: Writeup;
}

const WriteupDetail: React.FC<Props> = ({ writeup }) => {
  const formattedDate = new Date(writeup.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.article}>
      <div className={styles.terminalHeader}>
        <div className={styles.promptLine}>
          <span className={styles.promptSymbol}>user@cybersecurity:~$</span>
          <span className={styles.promptCommand}>cat {writeup.slug || 'writeup'}</span>
        </div>
      </div>
      
      <header className={styles.header}>
        <div className={styles.competition}>{writeup.competition}</div>
        <h1 className={styles.title}>{writeup.title}</h1>
        
        <div className={styles.meta}>
          <div className={styles.metaGroup}>
            <span className={styles.date}>
              <span className={styles.metaIcon}>📅</span> {formattedDate}
            </span>
            
            {writeup.author && writeup.author.length > 0 && (
              <span className={styles.author}>
                <span className={styles.metaIcon}>👤</span> {writeup.author[0].name}
              </span>
            )}
          </div>
          
          <div className={styles.categories}>
            {writeup.categories?.map((category, index) => (
              <span key={index} className={styles.category}>
                {category.title}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      {writeup.coverImage && (
        <div className={styles.coverImageContainer}>
          <Image
            src={urlFor(writeup.coverImage).url()}
            alt={writeup.title}
            width={800}
            height={450}
            className={styles.coverImage}
          />
        </div>
      )}
      
      <div className={styles.excerpt}>{writeup.excerpt}</div>
      
      <div className={styles.content}>
        <ContentRenderer content={writeup.content} />
      </div>
      
      <div className={styles.terminalFooter}>
        <div className={styles.promptLine}>
          <span className={styles.promptSymbol}>user@cybersecurity:~/writeups$</span>
          <span className={styles.blinkingCursor}></span>
        </div>
      </div>
      
      <div className={styles.backLinkContainer}>
        <Link href="/writeups" className={styles.backLink}>
          ← Back to all writeups
        </Link>
      </div>
    </div>
  );
};

export default WriteupDetail;