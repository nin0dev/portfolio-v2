import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

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
    title: "Appétencia Website",
    description: "WordPress website built with Elementor, respecting Figma design prototypes that I made.",
    image: "/images/appetencia_thumb.png",
    altText: "Appétencia project thumbnail",
    link: "https://appetencia.com/",
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
          <Card className="hover:scale-105" key={index}>
            <CardActionArea>
              <Link href={project.link} target="_blank">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.altText || "Project thumbnail"}
                  className="object-cover"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
              {project.github ?
                <Button size="small" href={project.github}>Github</Button>
              : <Button disabled>Github</Button>}
              {project.link ?
                <Button size="small" target="_blank" href={project.link}>Project</Button>
              : <Button disabled>Project</Button>}
              </CardActions>
            </CardActionArea>  
          </Card>
        ))}
      </div>
    </section>
  );
}