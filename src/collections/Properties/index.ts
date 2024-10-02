import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const PropertiesOverview: CollectionConfig = {
  slug: 'propertiesoverview',
  labels: {
    singular: 'Properties Overview',
    plural: 'Properties Overview',
  },
  admin: {
    //   useAsTitle: 'title',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
      label: 'Content',
    },
  ],
}
