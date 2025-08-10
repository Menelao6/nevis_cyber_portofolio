export interface SanityRef {
  _type: string;
  _ref: string;
}

export interface SanityImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityImageSource {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio?: any; 
  avatar?: SanityImageSource;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface Writeup {
  _id: string;
  _type: 'writeup';
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  excerpt: string;
  coverImage: SanityImageSource;
  competition?: string;
  points?: number;
  content: any;
  categories: Category[];
  author: Author[];
  relatedWriteups?: Writeup[];
}

export interface WriteupListProps {
  writeups: Writeup[];
}

export interface WriteupDetailProps {
  writeup: Writeup;
}

export interface FeaturedWriteupCardProps {
  writeup: {
    id: string;
    title: string;
    description: string;
    date: string;
    category: string;
  };
}

export interface HomePageData {
  featuredWriteups: Writeup[];
  recentWriteups: Writeup[];
}

export interface WriteupsPageData {
  writeups: Writeup[];
  categories: Category[];
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

export interface SanityQueryResponse<T> {
  result: T;
  error?: any;
}

export type Nullable<T> = T | null;

export type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type WithOptional<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}