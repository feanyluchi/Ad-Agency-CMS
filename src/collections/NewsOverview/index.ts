import type { CollectionConfig } from 'payload'

export const NewsOverview: CollectionConfig = {
  slug: 'newsoverview',
  labels: {
    singular: 'News Overview',
    plural: 'News Overview',
  },
  admin: {
    // useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: async ({ req }) => {
      const { totalDocs } = await req.payload.find({
        collection: 'newsoverview',
        limit: 0,
      })
      const creationLimit = 1
      return totalDocs < creationLimit
    },
  },
  fields: [
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      access: {
        read: ({ req: { user } }) => {
          return user?.role === 'admin'
        },
        update: ({ req: { user } }) => {
          return user?.role === 'admin'
        },
      },
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
