import React from "react";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/sanity";
import Image from "next/image";
import styles from "./WriteupList.module.css";

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
          {writeup.coverImage && (
            <div className={styles.cardImage}>
              <Image
                src={urlFor(writeup.coverImage).url()}
                alt={writeup.title}
                width={400}
                height={250}
                className={styles.coverImage}
              />
            </div>
          )}
          
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.competition}>{writeup.competition}</div>
              <h3 className={styles.cardTitle}>{writeup.title}</h3>
            </div>
            
            <div className={styles.cardBody}>
              <p className={styles.excerpt}>{writeup.excerpt}</p>
            </div>
            
            <div className={styles.cardFooter}>
              <div className={styles.meta}>
                <span className={styles.date}>
                  {formatDate(writeup.publishedAt)}
                </span>
                
                {writeup.author && writeup.author.length > 0 && (
                  <span className={styles.author}>
                    by {writeup.author[0].name}
                  </span>
                )}
                
                <div className={styles.categories}>
                  {writeup.categories?.map((category, index) => (
                    <span key={index} className={styles.category}>
                      {category.title}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link href={`/writeups/${writeup.slug}`} className={styles.readMore}>
                [ read more ]
                <span className={styles.cursor}>_</span>
              </Link>
            </div>
          </div>
          <div className={styles.cardGlow}></div>
        </div>
      ))}
    </div>
  );
};

export default WriteupList;