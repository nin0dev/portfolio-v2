import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    projectName: string;
    projectThumbnail: string;
    projectDescription: PortableTextBlock[];
    slug: string;
    projectLink: string | undefined;
}