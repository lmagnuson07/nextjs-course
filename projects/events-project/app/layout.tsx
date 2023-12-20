import { Inter } from 'next/font/google';
import './globals.css';
import { Viewport } from 'next';
import type { Metadata } from 'next';
import { Providers } from '@/app/(start)/_components/Providers';

export const viewport: Viewport = {
  height: 'device-height',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Events Project',
  description:
    'The events project is a project that allows you to find events that allow you to evolve!',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
