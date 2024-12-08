import type { Block, Field } from 'payload'

export const GeneralContent: Block = {
  slug: 'generalContent',
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
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'photos',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },
  ],
}
