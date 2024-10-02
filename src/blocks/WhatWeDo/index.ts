// payload/blocks/WhatWeDoBlock.ts

import { colorOptions } from '@/fields/colorOptions';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload';

const WhatWeDoBlock: Block = {
  slug: 'whatWeDoBlock',
  labels: {
    singular: 'What We Do Block',
    plural: 'What We Do Blocks',
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
      name: 'teamPhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Team Photo',
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
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      localized: true,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      options: colorOptions,
      required: true,
      localized: true,
    },
  ],
};

export default WhatWeDoBlock;
