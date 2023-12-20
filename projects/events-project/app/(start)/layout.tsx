import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainHeader from '@/src/components/layout/main-header/MainHeader';
import Client from '@/app/(start)/_components/Client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Events',
  description: 'Find a lot of great events that allow you to evolve!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <main className={inter.className}>{children}</main>
      <Client />
    </>
  );
}
