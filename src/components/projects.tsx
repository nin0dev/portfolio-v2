import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "CRM ReflexProd",
    description: "Built from scratch CRM using Next.js, Supabase, Nodemailer, TailwindCSS & more...",
    image: "/images/crm_thumb.png",
    altText: "ReflexProd CRM project thumbnail",
    github: "https://github.com/nin0dev/crm-reflexprod",
    link: "https://crm-reflexprod.vercel.app/",
  },
  {
    title: "Password Generator",
    description: "Tiny project to get a good understanding of Javascript's logic.",
    image: "/images/passgen_thumb.png",
    altText: "Password Generator project thumbnail",
    github: "https://github.com/nin0dev/pass-generator",
    link: "https://nin0dev.github.io/pass-generator/",
  }
];

export default function Projects() {
  return (
    <section className="mb-10" id="projects">
      <h3 className="text-2xl mb-5">Projects</h3>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <div className="h-auto" key={index}>
            <div className="p-5 relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform h-full">
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  priority
                  width={500}
                  height={50}
                  alt={project.altText || "Project thumbnail"}
                  className="mb-5 rounded h-[200px] object-cover"
                />
              </Link>
              <Link href={project.link} target="_blank"><h4 className="text-xl mb-2">{project.title}</h4></Link>
              <Link href={project.link} target="_blank"><p className="text-xs overflow-ellipsis overflow-hidden line-clamp-3">
              {project.description}
              </p></Link>
              <div className="pt-5">
                {project.github ?
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm mb-2 whitespace-nowrap hover:underline"
                  >
                    Check on Github
                  </a>
                : null}
                {project.link ?
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-sm ml-5 whitespace-nowrap hover:underline"
                  >
                    Check project
                  </a>
                : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}