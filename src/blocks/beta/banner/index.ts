import type { Block, Field } from 'payload'

export const Banner: Block = {
  slug: 'banner',
  fields: [
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'photos',
      required: true
    },
    {
      name: 'bannerText',
      type: 'text',
      label: 'Banner Text',
      required: true,
    },
  ],
}
