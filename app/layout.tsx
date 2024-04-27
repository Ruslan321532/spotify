import './globals.css';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import SideBar from '@/components/SideBar';
import { siteConf } from '@/config/sites';

const fontStyle = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConf.name,
    template: `%s | ${siteConf.name}`,
  },
  description: siteConf.description,
  authors: [
    {
      name: siteConf.name,
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  creator: siteConf.creator,
  publisher: siteConf.publisher,
  referrer: 'origin',
  applicationName: siteConf.applicationName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontStyle.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
