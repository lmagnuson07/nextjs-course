import type { Metadata } from 'next';
import MainNavigation from '@/src/layout/main-navigation';

export const metadata: Metadata = {
  title: 'NextJS Auth App',
  description: 'NextJS Auth App for practicing NextJS!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
