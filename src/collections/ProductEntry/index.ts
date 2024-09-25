import type { CollectionConfig } from 'payload'

export const ProductEntry: CollectionConfig = {
  slug: 'productentry',
  labels: {
    singular: 'Product Entry',
    plural: 'Product Entry',
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
