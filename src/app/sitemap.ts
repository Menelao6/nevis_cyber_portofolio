// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getWriteups } from '../sanity/lib/sanityUtils';

// Define the WriteupSitemap type
type WriteupSitemap = {
  slug: string;
  publishedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nevis.vercel.app';
  
  try {
    const writeups = await getWriteups() as WriteupSitemap[];
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/writeups`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      },
      ...writeups.map((writeup: WriteupSitemap) => ({
        url: `${baseUrl}/writeups/${writeup.slug}`,
        lastModified: new Date(writeup.publishedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })),
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      }
    ];
  }
}