import * as React from 'react';
import { getEntries } from '@/lib/getContentfulEntries';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

export default async function Projects() {
  const response = await getEntries('project');

  return (
    <section className="mb-10" id="projects">
      <h3 className="text-2xl mb-5">Projects</h3>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
      {response.map((item: any) => (
          <Card className="hover:scale-105 transition-all" key={item.sys.id}>
            <Link href={`/projects/${item.fields.slug}`} passHref>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.altText || 'Project thumbnail'}
                  className="object-cover"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.fields.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.fields.description}
                  </Typography>

                  {/* Display tools if available */}
                  {item.fields.tools && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.fields.tools.map((tool: any) => (
                        <div
                          key={tool.sys.id}
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
                      ))}
                    </div>
                  )}
                </CardContent>
              </CardActionArea>
            </Link>  
            <CardActions>
              {item.fields.githubLink ?
                <Button size="small" href={item.fields.githubLink}>Github</Button>
              : <Button disabled>Github</Button>}
              {item.fields.projectLink ?
                <Button size="small" target="_blank" href={item.fields.projectLink}>Project</Button>
              : <Button disabled>Project</Button>}
              </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}