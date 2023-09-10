import Header from '@/components/header';
import React from 'react';

import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body className="mb-20 pt-8 mx-5 lg:px-40 bg-white font-sora text-black">
        {children}
        {/* {pathname == '/legal-mentions' ? null : <Footer />} */}
        <Header />
      </body>
    </html>
  );
}
