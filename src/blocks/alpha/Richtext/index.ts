import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const RichText: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      editor: lexicalEditor(),
      required: true,
      localized: true,
    },
  ],
}
