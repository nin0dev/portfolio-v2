import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-2 w-full text-center" id="contact">
      <p className="text-gray-400 text-sm hover:underline">
        <Link href="mailto:ninberber@gmail.com">ninberber@gmail.com</Link>
      </p>
      <p className="text-gray-400 text-sm hover:underline">
        <Link href="https://www.linkedin.com/in/nino-berber">Linkedin</Link>
      </p>
      <p className="text-gray-400 text-sm hover:underline">
        <Link href="https://www.github.com/nin0dev">GitHub</Link>
      </p>
      <p className="text-gray-400 text-sm hover:underline">
        <Link href="/legal-mentions">Legal Mentions</Link>
      </p>
    </footer>
  );
}
