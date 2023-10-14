import Image from "next/image";
import { projects } from "../content/projects.yml";

export default function Projects() {
  return (
    <section className="mb-5" id="about">
      <h3 className="text-2xl mb-5">Projects</h3>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="p-5 relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform">
              <Image
                src={project.image}
                priority
                width={500}
                height={50}
                alt={project.title}
                className="mb-5 rounded"
              />
              <h4 className="text-xl mb-2">{project.title}</h4>
              <p className="pb-5 text-xs">{project.description}</p>
              <a href={project.linkGit} target="_blank" className="mb-2">
                Check on Github
              </a>
              {project.link ? (
                <a href={project.link} target="_blank" className="ml-5">
                  Check project
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
