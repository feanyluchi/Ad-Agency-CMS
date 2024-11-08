import link from '@/fields/link'
import type { Block, Field } from 'payload'

export const LinkItem: Block = {
  slug: 'linkItem',
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Linked image items',
      minRows: 1,
      labels: {
        singular: 'Linked image item',
        plural: 'Linked image items',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'photos',
          required: true,
          admin: {
            description: 'Upload the image that will be displayed in the gallery.',
          },
        },
        {
          name: 'overlayText',
          type: 'text',
          label: 'Overlay Text',
          required: true,
          admin: {
            description: 'Text that will appear over the image.',
          },
        },
        link()
      ],
    },
  ],
}
