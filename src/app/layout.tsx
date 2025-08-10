import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://nevis.vercel.app'),
  title: {
    template: '%s | CyberTerminal',
    default: 'CyberTerminal | Security Research & Write-ups'
  },
  description: 'Explore in-depth security write-ups, vulnerability analysis, and cybersecurity research',
  keywords: ['security', 'write-ups', 'cybersecurity', 'vulnerability', 'research'],
  authors: [{ name: 'Your Name', url: 'https://nevis.vercel.app' }],
  openGraph: {
    title: 'CyberTerminal | Security Research & Write-ups',
    description: 'Explore in-depth security write-ups, vulnerability analysis, and cybersecurity research',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CyberTerminal Security Research',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'CyberTerminal',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourhandle',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: 'https://nevis.vercel.app',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}