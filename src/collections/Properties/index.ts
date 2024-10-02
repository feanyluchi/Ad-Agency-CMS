import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',
  labels: {
    singular: 'Properties',
    plural: 'Properties',
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
