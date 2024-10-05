import { createClient } from '@/../lib/contento';
import { notFound } from 'next/navigation';

import Image from 'next/image';

export default async function Projects() {
  const content = await createClient()
    .getContentBySlug('home', 'general_page')
    .catch(() => {
      notFound()
    });
  return (
    <section className="mb-10" id="projects">
      <h3 className="text-2xl mb-5">Projects</h3>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="h-auto">
            <div className="p-5 relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform h-full">
              <Image
                src={content.project.image}
                priority
                width={500}
                height={50}
                alt={content.project.title}
                className="mb-5 rounded h-[200px] object-cover"
              />
              <h4 className="text-xl mb-2">{content.project.title}</h4>
              <p className="text-xs overflow-ellipsis overflow-hidden line-clamp-3">{content.project.description}</p>
              <div className="pt-5">
                <a href={project.linkGit} target="_blank" className="text-sm mb-2 whitespace-nowrap hover:underline">
                  Check on Github
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" className="text-sm ml-5 whitespace-nowrap hover:underline">
                    Check project
                  </a>
                )}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}