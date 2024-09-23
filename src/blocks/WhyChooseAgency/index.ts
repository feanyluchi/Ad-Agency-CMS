// payload/blocks/WhyChooseADAgencyBlock.ts

import { colorOptions } from '@/fields/colorOptions';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload';

const WhyChooseADAgencyBlock: Block = {
  slug: 'whyChooseADAgencyBlock',
  labels: {
    singular: 'Why Choose AD Agency Block',
    plural: 'Why Choose AD Agency Blocks',
  },
  fields: [
    {
      name: 'rows',
      type: 'array',
      label: 'Rows',
      minRows: 1,
      fields: [
        {
          name: 'rowTitle',
          type: 'text',
          label: 'Row Title',
          required: false,
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Row Image',
          required: true,
        },
        {
          name: 'imagePosition',
          type: 'radio',
          label: 'Image Position',
          options: [
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
          defaultValue: 'right',
        },
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
          required: true,
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Columns',
          minRows: 2,
          maxRows: 2,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Column Title',
              required: true,
              localized: true,
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'Column Text',
              required: true,
              localized: true,
            },
            {
              name: 'number',
              type: 'number',
              label: 'Column Number',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};

export default WhyChooseADAgencyBlock;
