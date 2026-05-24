import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { SITE_DATA } from '@/constants/data';

const display = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const body = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://empowerherzim.org'),
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
      <body className="font-body text-slate-700 bg-white antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
