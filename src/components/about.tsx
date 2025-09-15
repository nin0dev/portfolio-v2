import React from 'react';
import Image from 'next/image';

import { getEntries } from '@/lib/getContentfulEntries';

export default async function About() {
  const response = await getEntries('contact');

  return (
    <>
      <section className="mb-5" id="about">
        <h3 className="text-2xl mb-5">About</h3>
        {response.map((item: any) => (
          <div key={item.sys.id} className="md:flex gap-6">
            <Image
              className="rounded h-auto w-1/2 mb-4 md:max-w-[250px]"
              src={`https:${item.fields.profilePicture.fields.file.url}`}
              alt="Profile picture"
              width={500}
              height={500}
            />
            <div>
              <p>
                {item.fields.aboutDescription}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
