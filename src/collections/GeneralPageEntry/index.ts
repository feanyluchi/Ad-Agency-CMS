import type { CollectionConfig } from 'payload'

export const GeneralPageEntry: CollectionConfig = {
  slug: 'generalPageEntry',
  labels: {
    singular: 'General Page Entry',
    plural: 'General Page Entry',
  },
  admin: {
    // useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      access: {
        read: ({ req: { user } }) => {
          console.log('User object:', user)
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
