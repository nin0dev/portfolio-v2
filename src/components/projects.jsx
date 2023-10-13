import React, { useEffect, useState } from 'react';

import Image from 'next/image';

const projects = [{
  title: 'Password generator',
  description: "This challenge helped me understand properly how to use loops, objects, and more importantly the logic behind the Javascript language.",
  image: '/uploads/passgen_thumbnail1.png',
  link: 'https://nin0dev.github.io/pass-generator/',
  linkGit: 'https://github.com/nin0dev/pass-generator',
}, {
  title: 'Midjourney blog',
  description: "During my first year of MMI Bordeaux, an other student and I had to create a blog using Ruby On Rails. Through the development process, I understood the basics of a CLUD application, and how to use the MVC pattern.",
  image: '/uploads/rails_blog_thumb1.png',
  link: 'https://midjourney-on-rails.osc-fr1.scalingo.io/',
  linkGit: 'https://github.com/nin0dev/Midjourney-on-rails',
}, { 
  title: 'Museum website rework',
  description: "In my first year of MMI Bordeaux, my team and I had to rework a Museum's website. I really enjoyed the whole process, as we had to think about the user experience, the design, and the development.",
  image: '/uploads/museum_thumb.png',
  link: 'https://musee-automobile-valencay.netlify.app/',
  linkGit: 'https://github.com/ccadran/musee-automobile',
}];

export default function Projects() {
  return (
    <section className="mb-5" id="about">
      <h3 className="text-2xl mb-5">Projects</h3>
        <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="p-5 relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform">
                <Image src={project.image} priority width={500} height={50} alt={project.title} className='mb-5 rounded' />
                <h4 className="text-xl mb-2">{project.title}</h4>
                <p className="pb-5 text-xs">{project.description}</p>
                <a href={project.linkGit} target="_blank" className="mb-2">Check on Github</a>
                {project.link ?
                  <a href={project.link} target="_blank" className="ml-5">Check project</a>
                : null}
              </div>
            </div>
          ))}
        </div>
    </section>
)}
