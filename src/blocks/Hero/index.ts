import type { Block, Field } from 'payload'

export const Hero: Block = {
  slug: 'heroSection',
  fields: [
    {
      name: 'backgroundImages',
      type: 'array',
      label: 'Background Images',
      minRows: 1,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'photos',
        },
      ],
    },
    {
      name: 'autoSlide',
      type: 'checkbox',
      label: 'Auto Slide',
      defaultValue: true,
      admin: {
        description: 'Enable auto-sliding between background images.',
      },
    },
  ],
}
