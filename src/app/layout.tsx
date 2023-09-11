import Header from '@/components/header';
import React from 'react';

import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mb-20 pt-8 mx-5 lg:px-40 bg-white ${sora.className} text-black`}
      >
        {children}
        <Header />
      </body>
    </html>
  );
}
