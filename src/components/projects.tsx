import React from "react";
import { getProjects } from '../../sanity/sanity-utils';
import project from "../../sanity/schemas/project";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <>
            <div className="mb-7">
                <h3 className="text-2xl mb-5">Projects</h3>
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-3 lg:grid-cols-3 2xl:grid-cols-4">
                    {projects.map((project) => (
                        <div className="shadow-lg rounded">
                            <div className="rounded overflow-hidden shadow-lg"></div>
                            <img className="w-full h-1/2 rounded-t object-cover" src={project.projectThumbnail} />
                            <div key={project._id} className="p-5">
                                {project.projectName}
                                <br/>
                                {project.projectDescription}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}