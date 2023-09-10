import React from 'react';
import '../../styles/globals.css';

export default function LegalMentions() {
  return (
    <div>
      <h1 className="text-2xl mb-5">Legal Mentions</h1>
      <h2 className="text-lg">Website owner</h2>
      <p className="text-sm mb-4">
        Nino Berber <br />
        ninberber@gmail.com
      </p>
      <h2 className="text-lg">Website provider</h2>
      <p className="text-sm">
        Netlify Inc.
        <br />
        44 Montgomery Street, Suite 300 San Francisco, California 94104
        <br />
        support@netlify.com
      </p>
    </div>
  );
}
