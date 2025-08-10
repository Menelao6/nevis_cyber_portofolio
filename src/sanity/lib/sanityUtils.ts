import { getClient } from './sanity';
import { groq } from 'next-sanity';
import { Writeup, Author, Category } from '../types/index';

const fetchOptions = {
  next: { revalidate: 30 }
};

export type WriteupSitemap = {
  slug: string;
  publishedAt: string;
};

export type FullWriteup = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: {
    asset: {
      _ref: string;
    };
  };
  competition: string;
  points: number;
  content: any;
  categories: { title: string }[];
  author: { name: string }[];
};

export async function getWriteups(): Promise<WriteupSitemap[]> {
  const client = getClient(false);
  return await client.fetch(groq`
    *[_type == "writeup" && defined(slug.current)] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt
    }
  `, {}, fetchOptions);
}

export async function getWriteup(slug: string): Promise<Writeup | null> {
  const client = getClient(false);
  const writeups = await client.fetch<Writeup[]>(groq`
    *[_type == "writeup" && slug.current == $slug] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      competition,
      points,
      content,
      categories[]->{
        _id,
        title,
        "slug": slug.current
      },
      author[]->{
        _id,
        name,
        "slug": slug.current
      }
    }
  `, { slug }, fetchOptions);

  return writeups.length > 0 ? writeups[0] : null;
}