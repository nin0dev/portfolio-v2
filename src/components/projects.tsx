import Image from 'next/image';

export default function Projects({ imageLink, altText, title, description, githubLink, projectLink }) {
  
  return (
    <section className="mb-10" id="projects">
      <h3 className="text-2xl mb-5">Projects</h3>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="h-auto">
            <div className="p-5 relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform h-full">
              <Image
                src={imageLink}
                priority
                width={500}
                height={50}
                alt={altText}
                className="mb-5 rounded h-[200px] object-cover"
              />
              <h4 className="text-xl mb-2">{title}</h4>
              <p className="text-xs overflow-ellipsis overflow-hidden line-clamp-3">
              {description}
              </p>
              <div className="pt-5">
                <a
                  href={githubLink}
                  target="_blank"
                  className="text-sm mb-2 whitespace-nowrap hover:underline"
                >
                  Check on Github
                </a>
                <a
                  href={projectLink}
                  target="_blank"
                  className="text-sm ml-5 whitespace-nowrap hover:underline"
                >
                  Check project
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}