import React from 'react';
import { urlFor } from '../../../sanity/lib/sanity';
import Image from 'next/image';
import ContentRenderer from '../ContentRenderer/ContentRenderer';
import styles from './WriteupDetail.module.css';

interface Writeup {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  content: any;
  categories: { title: string }[];
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
          <span className={styles.promptCommand}>cat {writeup.slug}</span>
        </div>
      </div>
      
      <header className={styles.header}>
        <h1 className={styles.title}>{writeup.title}</h1>
        <div className={styles.meta}>
          <span className={styles.date}>{formattedDate}</span>
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
        <div className={styles.coverImage}>
          <Image
            src={urlFor(writeup.coverImage).url()}
            alt={writeup.title}
            layout="responsive"
            width={1200}
            height={630}
            objectFit="cover"
          />
        </div>
      )}
      
      <div className={styles.content}>
        <ContentRenderer content={writeup.content} />
      </div>
      
      <div className={styles.terminalFooter}>
        <div className={styles.promptLine}>
          <span className={styles.promptSymbol}>user@cybersecurity:~/writeups$</span>
          <span className="blinking-cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default WriteupDetail;