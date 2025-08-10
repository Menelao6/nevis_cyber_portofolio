'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../sanity/lib/sanity';
import Image from 'next/image';
import styles from './ContentRenderer.module.css';

export default function ContentRenderer({ content }: { content: any }) {
  const components = {
    types: {
      image: ({ value }: any) => {
        return (
          <div className={styles.imageBlock}>
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              width={800}
              height={600}
              className={styles.image}
            />
            {value.alt && (
              <div className={styles.imageCaption}>{value.alt}</div>
            )}
          </div>
        );
      },
      code: ({ value }: any) => {
        return (
          <div className={styles.codeBlock}>
            {value.filename && (
              <div className={styles.filename}>{value.filename}</div>
            )}
            <pre className={styles.pre}>
              <code className={styles.code}>{value.code}</code>
            </pre>
          </div>
        );
      }
    },
    block: {
      h1: ({ children }: any) => <h1 className={styles.h1}>{children}</h1>,
      h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
      h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
      normal: ({ children }: any) => <p className={styles.paragraph}>{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className={styles.blockquote}>{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className={styles.list}>{children}</ul>,
      number: ({ children }: any) => <ol className={styles.list}>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className={styles.listItem}>
          <span className={styles.listMarker}>•</span>
          {children}
        </li>
      ),
      number: ({ children }: any) => <li className={styles.listItem}>{children}</li>,
    },
    marks: {
      link: ({ children, value }: any) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a 
            href={value?.href} 
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : ''}
            className={styles.link}
          >
            {children}
          </a>
        );
      },
      strong: ({ children }: any) => {
        return <strong className={styles.strong}>{children}</strong>;
      },
      em: ({ children }: any) => {
        return <em className={styles.em}>{children}</em>;
      },
      code: ({ children }: any) => {
        return <code className={styles.inlineCode}>{children}</code>;
      }
    },
  };

  return <PortableText value={content} components={components} />;
}