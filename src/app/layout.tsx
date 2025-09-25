import Header from '@/components/header';
import React from 'react';

import { Sora } from 'next/font/google';
import Chatbot from '@/components/chatbot';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400','500','600','700']
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
        <Chatbot />
        <Header />
      </body>
    </html>
  );
}
