export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'projectNumber',
        title: 'Project Number',
        type: 'number',
      },
      {
        name: 'projectName',
        title: 'Project Name',
        type: 'string',
      },
      {
        name: 'projectThumbnail',
        title: 'Project Thumbnail',
        type: 'image',
      },
      {
        name: 'projectDescription',
        title: 'Project Description',
        type: 'text',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      }
    ]
  }