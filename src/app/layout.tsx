import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './Providers';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://nevis-portofolio.vercel.app'),
  title: {
    template: '%s | CyberTerminal',
    default: 'CyberTerminal | Security Research & Write-ups'
  },
  description: 'Explore in-depth security write-ups, vulnerability analysis, and cybersecurity research by Nevis Hysenaj. CTF player sharing knowledge and techniques.',
  keywords: [
    'cybersecurity', 'security research', 'CTF writeups', 'vulnerability analysis', 
    'penetration testing', 'ethical hacking', 'security write-ups', 'CTF player',
    'capture the flag', 'infosec', 'bug bounty', 'Nevis Hysenaj', "Tech Support Engineer"
  ],
  authors: [{ name: 'Nevis Hysenaj', url: 'https://nevis-portofolio.vercel.app' }],
  creator: 'Nevis Hysenaj',
  publisher: 'Nevis Hysenaj',
  
  openGraph: {
    title: 'CyberTerminal | Security Research & Write-ups',
    description: 'Explore in-depth security write-ups, vulnerability analysis, and cybersecurity research by Nevis Hysenaj',
    url: 'https://nevis-portofolio.vercel.app',
    images: [
      {
        url: '/ctff.svg',
        width: 1200,
        height: 630,
        alt: 'CyberTerminal - Security Research and CTF Write-ups',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'CyberTerminal',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'CyberTerminal | Security Research & Write-ups',
    description: 'Explore in-depth security write-ups, vulnerability analysis, and cybersecurity research',
    images: ['/ctff.svg'],
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
    canonical: 'https://nevis-portofolio.vercel.app',
  },
  
  category: 'Technology',
  classification: 'Cybersecurity Research',

};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}