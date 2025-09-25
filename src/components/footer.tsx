import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-2 w-full text-center" id="contact">
      <p className="text-md underline">
        <Link href="mailto:ninberber@gmail.com">ninberber@gmail.com</Link>
      </p>
      <p className="text-md underline">
        <Link href="https://www.linkedin.com/in/nino-berber">Linkedin</Link>
      </p>
      <p className="text-md underline">
        <Link href="https://www.github.com/nin0dev">Github</Link>
      </p>
      <p className="text-md underline">
        <Link href="/legal-mentions">Legal Mentions</Link>
      </p>
      <p className="mt-2 text-xs italic">Privacy: This site uses privacy-friendly analytics (PostHog) — no cookies, no personal data collected.</p>
    </footer>
  );
}
