import React from 'react';

export default function About() {
  return (
    <>
      <h3 className="text-2xl mb-5">About</h3>
      <div className="md:flex gap-6">
        <img
          className="rounded h-auto mb-4 sm:w-1/3 sm:h-1/3"
          src="./images/profile.jpg"
          alt="Profile picture"
        />
        <div>
          <p>
            I am a French-Canadian student with a passion for the Web and
            technologies. I've been interested in these fields since I was very
            young. First out of curiosity, then to carry out concrete projects
            with a specific goal in mind. I enjoy swimming and playing guitar
            and drums. I've been able to experience the professional world on
            several occasions through different positions: as a freelancer, but
            also as part of a fixed-term contract. I'm currently studying at IUT
            Bordeaux Montaigne in the MMI program.
          </p>
        </div>
      </div>
    </>
  );
}
