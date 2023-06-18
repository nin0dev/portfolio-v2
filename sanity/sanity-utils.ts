import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
        projectId : 'iqpdtrr9',
        dataset : 'production',
        apiVersion : '2021-03-25',
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            projectName,
            "projectThumbnail": projectThumbnail.asset->url,
            projectDescription,
            "slug": slug.current
        }`
    )
}
