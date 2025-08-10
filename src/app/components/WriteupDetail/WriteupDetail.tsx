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
  points?: string;
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
      <div className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.headerItem}>
            <span className={styles.headerLabel}>Category</span>
            <span className={styles.headerValue}>
              {writeup.categories?.[0]?.title || "Security"}
            </span>
          </div>
          
          <div className={styles.headerItem}>
            <span className={styles.headerLabel}>Published</span>
            <span className={styles.headerValue}>{formattedDate}</span>
          </div>
          
          <div className={styles.headerItem}>
            <span className={styles.headerLabel}>Competition</span>
            <span className={styles.headerValue}>{writeup.competition}</span>
          </div>
          
          {writeup.points && (
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Points</span>
              <span className={styles.headerValue}>{writeup.points}</span>
            </div>
          )}
          
          <div className={styles.headerItem}>
            <span className={styles.headerLabel}>Author</span>
            <span className={styles.headerValue}>
              {writeup.author?.[0]?.name || "Anonymous"}
            </span>
          </div>
        </div>
      </div>
      
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{writeup.title}</h1>
        
        {writeup.coverImage && (
          <div className={styles.coverImageContainer}>
            <Image
              src={urlFor(writeup.coverImage).url()}
              alt={writeup.title}
              width={600}
              height={300}
              className={styles.coverImage}
            />
          </div>
        )}
        
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
    </div>
  );
};

export default WriteupDetail;