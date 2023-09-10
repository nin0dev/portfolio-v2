import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-2 w-full text-center">
      <p className="text-gray-400 text-sm hover:underline">
        <Link href="mailto:ninberber@gmail.com">ninberber@gmail.com</Link>
      </p>
      <p className="text-gray-400 text-sm">
        <Link href="/legal-mentions">Legal Mentions</Link>
      </p>
    </footer>
  );
}
