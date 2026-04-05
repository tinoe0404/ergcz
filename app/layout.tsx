import type { Metadata } from 'next';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SITE_DATA } from '@/constants/data';

const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://ergcz.org'),
  title: {
    template: `%s | ${SITE_DATA.orgName}`,
    default: SITE_DATA.fullName,
  },
  description: SITE_DATA.missionStatement,
  openGraph: {
    title: SITE_DATA.fullName,
    description: SITE_DATA.missionStatement,
    siteName: SITE_DATA.orgName,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body text-slate bg-sky antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
