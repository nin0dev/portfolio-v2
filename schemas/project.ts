export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
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
      }
    ]
  }