'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
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
            <SyntaxHighlighter
              language={value.language || 'text'}
              style={atomDark}
              customStyle={{ borderRadius: '4px' }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        );
      }
    },
    block: {
      h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
      h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
      normal: ({ children }: any) => <p className={styles.paragraph}>{children}</p>,
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
  };

  return <PortableText value={content} components={components} />;
}