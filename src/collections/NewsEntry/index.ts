import type { CollectionConfig } from 'payload'

export const NewsEntry: CollectionConfig = {
  slug: 'newsentry',
  labels: {
    singular: 'News Entry',
    plural: 'News Entry',
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
