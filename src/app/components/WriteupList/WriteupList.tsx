import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import styles from './WriteupList.module.css';

interface Writeup {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  categories: { title: string }[];
}

interface Props {
  writeups: Writeup[];
}

const WriteupList: React.FC<Props> = ({ writeups }) => {
  return (
    <div className={styles.writeupGrid}>
      {writeups.map((writeup) => (
        <div key={writeup._id} className={styles.writeupCard}>
          {writeup.coverImage && (
            <div className={styles.imageContainer}>
              <Image
                src={urlFor(writeup.coverImage).url()}
                alt={writeup.title}
                layout="responsive"
                width={400}
                height={250}
                objectFit="cover"
                className={styles.coverImage}
              />
            </div>
          )}
          <div className={styles.cardContent}>
            <div className={styles.meta}>
              <span className={styles.date}>
                {new Date(writeup.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <div className={styles.categories}>
                {writeup.categories?.map((category, index) => (
                  <span key={index} className={styles.category}>
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
            <h2 className={styles.cardTitle}>{writeup.title}</h2>
            <p className={styles.excerpt}>{writeup.excerpt}</p>
            <Link href={`/writeups/${writeup.slug}`} passHref>
              <button className={styles.readButton}>
                [ read more ]
                <span className={styles.cursor}>_</span>
              </button>
            </Link>
          </div>
          <div className={styles.cardGlow}></div>
        </div>
      ))}
    </div>
  );
};

export default WriteupList;