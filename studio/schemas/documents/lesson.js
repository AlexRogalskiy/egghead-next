export default {
  name: 'lesson',
  type: 'document',
  title: 'Lesson',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document.status &&
          context.document.status === 'published' &&
          (field === undefined || field.length < 1)
            ? 'Must have a title to publish'
            : true,
        ),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      description:
        'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'AWS Filename (URL)',
      name: 'awsFilename',
      type: 'url',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      description:
        'This can be used to provide a short description of the lesson.',
    },
    {
      name: 'softwareLibraries',
      description: 'Versioned Software Libraries',
      title: 'NPM or other Dependencies',
      type: 'array',
      of: [
        {
          type: 'versioned-software-library',
        },
      ],
    },
    {
      name: 'collaborators',
      description:
        'Humans that worked on this resource and get credit for the effort.',
      title: 'Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'collaborator'}],
        },
      ],
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Needs Review', value: 'needs-review'},
          {title: 'Approved', value: 'approved'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
      },
    },
    {
      title: 'Access Level',
      name: 'accessLevel',
      type: 'string',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: 'Pro', value: 'pro'},
        ],
        layout: 'radio',
      },
    },
  ],
}
