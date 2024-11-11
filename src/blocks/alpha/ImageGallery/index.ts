import link from '@/fields/link'
import type { Block } from 'payload'

export const ImageGallery: Block = {
  slug: 'imageGallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Images with Text',
      minRows: 1,
      labels: {
        singular: 'Image with Text',
        plural: 'Images with Text',
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
          localized: true,
          admin: {
            description: 'Text that will appear over the image.',
          },
        },
        {
          name: 'textPosition',
          type: 'radio',
          label: 'Overlay Text Position',
          options: [
            {
              label: 'Top',
              value: 'top',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Bottom',
              value: 'bottom',
            },
          ],
          defaultValue: 'center',
          required: true,
          admin: {
            description: 'Select the position of the overlay text on the image.',
          },
        },
        {
          name: 'enableLink',
          type: 'checkbox',
          label: 'Enable Link',
          admin: {
            description: 'Check to add a link to this image.',
          },
        },
        link({
          overrides: {
            admin: {
              condition: (_: any, { enableLink }: any) => Boolean(enableLink),
            },
          },
        }),
      ],
    },
  ],
}
