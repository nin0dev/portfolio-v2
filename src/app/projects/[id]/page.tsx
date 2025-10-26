import { getEntries } from '@/lib/getContentfulEntries';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const response = await getEntries('project');
  const project = response.find((p: any) => p.fields.slug === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">{String(project.fields.title)}</h1>
      {project.fields.projectLink && (
          <a
            className='mr-4'
            href={String(project.fields.projectLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet  <OpenInNewIcon/>
          </a>
        )}
        {project.fields.githubLink && (
          <a
            href={String(project.fields.githubLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code source  <OpenInNewIcon/>
          </a>
        )}
      {project.fields.image && typeof project.fields.image === 'object' && 'fields' in project.fields.image && (
        <Image
          src={`https:${(project.fields.image as any).fields.file.url}`}
          alt={String(project.fields.altText ?? project.fields.title ?? '')}
          width={800}
          height={450}
          className="rounded-lg my-6"
        />
      )}
      <p className="text-lg mb-4">{String(project.fields.description)}</p>

      {/* Tools */}
      {Array.isArray(project.fields.tools) && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.fields.tools.map((tool: any, idx: number) => {
            if (!tool || typeof tool !== 'object' || !('fields' in tool)) return null;
            return (
              <div
                key={tool.sys?.id ?? idx}
                className="bg-slate-200 rounded-md px-2 py-1 flex items-center gap-1 text-xs"
              >
                {tool.fields.icon && (
                  <Image
                    src={`https:${tool.fields.icon.fields.file.url}`}
                    alt={tool.fields.name}
                    width={16}
                    height={16}
                  />
                )}
                {tool.fields.name}
              </div>
            );
          })}
        </div>
      )}

      {/* Image Gallery */}
      {project.fields.images && Array.isArray(project.fields.images) && project.fields.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {project.fields.images.map((image: any, idx: number) => {
            if (!image || typeof image !== 'object' || !('fields' in image)) return null;
            return (
              <div key={image.sys?.id ?? idx} className="overflow-hidden rounded-lg">
                <Image
                  src={`https:${image.fields.file.url}`}
                  alt={image.fields.title || `Image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}