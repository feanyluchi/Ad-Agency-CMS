// payload/blocks/HeroBlock.ts

import { colorOptions } from '@/fields/colorOptions'
import { Block } from 'payload'
const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'overlayImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Overlay Image',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      options: colorOptions,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Sub-Title',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      localized: true,
    },
  ],
}

export default HeroBlock
