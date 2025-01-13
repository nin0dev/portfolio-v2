import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <section className="mb-5" id="about">
        <h3 className="text-2xl mb-5">About</h3>
        <div className="md:flex gap-6">
          <Image
            className="rounded h-auto w-1/2 mb-4 md:w-1/3 md:max-w-[250px]"
            src="/images/profile.jpg"
            alt="Profile picture"
            width={500}
            height={500}
          />
          <div>
            <p>
              I am a French-Canadian student with a passion for the
              Web and technologies. I&apos;ve been interested in these fields
              since a very young age. First out of curiosity, then to carry out
              practical projects with a specific goal in mind. I enjoy swimming
              and playing guitar and drums. I&apos;ve been able to experience
              the professional world on several occasions through different
              positions: as a freelancer, but also as part of a fixed-term
              contract. I&apos;m currently studying at École Hexagone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
