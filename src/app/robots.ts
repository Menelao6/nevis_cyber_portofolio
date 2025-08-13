import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nevis-portofolio.vercel.app/sitemap.xml',
    host: 'https://nevis-portofolio.vercel.app',
  };
}