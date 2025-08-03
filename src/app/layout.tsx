'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}