import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',
  labels: {
    singular: 'Properties',
    plural: 'Properties',
  },
  admin: {
    useAsTitle: 'title',
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
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Property',
    },
  ],
}
