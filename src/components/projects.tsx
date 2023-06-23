import React from "react";
import { getProjects } from '../../sanity/sanity-utils';
import project from "../../sanity/schemas/project";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <>
            <div className="mb-20">
                <h3 className="text-2xl mb-5">Projects</h3>
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
                    {projects.map((project) => (
                        <div className="relative shadow-lg rounded overflow-hidden hover:scale-105 transition-transform">
                            <img className="w-full h-1/2 rounded-t object-cover" src={project.projectThumbnail} />
                            <div key={project._id} className="p-5">
                                <h5 className="text-lg">{project.projectName}</h5>
                                <br/>
                                <p className="h-4/6 pb-10 text-ellipsis overflow-hidden text-sm">{project.projectDescription}</p>
                                <a href={project.projectLink} className="absolute bottom-0 pb-4">
                                    Visit
                                    <svg className="inline ml-2" width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg"          >
                                        <path d="M34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM0 4.5H34V3.5H0V4.5Z" fill="black"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}