// payload/blocks/ThreeColumnBlock.ts

import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload';

const ThreeColumnBlock: Block = {
  slug: 'threeColumnBlock',
  labels: {
    singular: 'Three Column Block',
    plural: 'Three Column Blocks',
  },
  fields: [
    {
      name: 'blockTitle',
      type: 'text',
      label: 'Block Title',
      required: true,
      localized: true,
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'columnTitle',
          type: 'text',
          label: 'Column Title',
          required: true,
          localized: true,
        },
        {
          name: 'columnContent',
          type: 'textarea',
          label: 'Column Content',
          required: true,
          localized: true,
        },
      ],
    },
  ],
};

export default ThreeColumnBlock;
