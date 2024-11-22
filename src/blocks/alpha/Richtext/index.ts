import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CustomBlock } from 'block-types'

export const RichText: CustomBlock = {
  customBlockType: 'alpha',
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
