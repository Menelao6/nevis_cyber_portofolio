import { groq } from 'next-sanity';
import { getClient } from '../../../sanity/lib/sanity';
import WriteupDetail from '../../components/WriteupDetail/WriteupDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageWriteup {
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
}

const fetchOptions = {
  cache: 'no-store' as const
};

export async function generateMetadata({ params }: { 
  params: { slug: string }
}): Promise<Metadata> {
  const client = getClient(false);
  const writeup = await client.fetch<PageWriteup>(groq`
    *[_type == "writeup" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      categories[]->{title},
      author[]->{name}
    }
  `, { slug: params.slug }, fetchOptions);

  if (!writeup) {
    return {
      title: 'Writeup not found | CyberTerminal',
      description: 'The requested security writeup could not be found',
    };
  }

  let imageUrl = '/og-image.png';
  if (writeup.coverImage?.asset?._ref) {
    const ref = writeup.coverImage.asset._ref;
    const [, id, dimensions, format] = ref.split('-');
    if (id && format) {
      imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${id}-${dimensions}.${format}`;
    }
  }

  return {
    title: `${writeup.title} | CyberTerminal`,
    description: writeup.excerpt,
    alternates: {
      canonical: `https://exploit-terminal.vercel.app/writeups/${params.slug}`,
    },
    keywords: [
      'security',
      'write-up',
      'cybersecurity',
      ...(writeup.categories?.map(c => c.title) || [])
    ],
    authors: writeup.author?.map(a => ({ 
      name: a.name,
      url: `https://exploit-terminal.vercel.app/about`
    })) || [],
    openGraph: {
      title: writeup.title,
      description: writeup.excerpt,
      url: `https://exploit-terminal.vercel.app/writeups/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: writeup.title,
        },
      ],
      type: 'article',
      publishedTime: writeup.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: writeup.title,
      description: writeup.excerpt,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const client = getClient(false);
  const writeups = await client.fetch(groq`
    *[_type == "writeup" && defined(slug.current)] {
      "slug": slug.current
    }
  `, {}, fetchOptions);

  return writeups.map((writeup: any) => ({
    slug: writeup.slug,
  }));
}

export default async function WriteupPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient(false);
  const writeup = await client.fetch<PageWriteup>(
    groq`
      *[_type == "writeup" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        coverImage,
        competition,
        points,
        content,
        categories[]->{title},
        author[]->{name}
      }
    `,
    { slug: params.slug },
    fetchOptions
  );

  if (!writeup) {
    notFound();
  }

  const writeupForDetail = {
    ...writeup,
    points: writeup.points ? String(writeup.points) : undefined
  };

  return <WriteupDetail writeup={writeupForDetail} />;
}