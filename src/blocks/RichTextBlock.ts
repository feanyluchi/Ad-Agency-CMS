import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const RichTextBlock: Block = {
  slug: 'rich-text',
  labels: {
    singular: 'Rich Text Block',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      required: true,
      localized: true,
    },
  ],
}

export default RichTextBlock
