export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full name',
        type: 'string',
      },
      {
        name: 'portrait',
        title: 'Portrait',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
    ]
  }