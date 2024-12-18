import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const ProductEntry: CollectionConfig = {
  slug: 'productentry',
  labels: {
    singular: 'Product Entry',
    plural: 'Product Entry',
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
    slugField(),
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
