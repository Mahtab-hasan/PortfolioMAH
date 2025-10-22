import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { CursorEffect } from '@/components/cursor-effect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahtab Hasan Arpon - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CursorEffect />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}