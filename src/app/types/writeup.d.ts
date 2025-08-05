// types/writeup.d.ts
export interface Writeup {
  _id: string;
  title: string;
  slug: string; // Should be string, not object
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  content: any;
  categories: { title: string }[];
}