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
    {
      name: 'searchTabs',
      type: 'group',
      label: 'Search Tabs',
      fields: [
        {
          name: 'buyTab',
          type: 'group',
          label: 'Buy Tab',
          fields: [
            {
              name: 'propertyType',
              type: 'relationship',
              label: 'Property Type',
              relationTo: 'propertyTypes',
            },
            {
              name: 'location',
              type: 'text',
              label: 'Location',
              required: true,
            },
            {
              name: 'price',
              type: 'number',
              label: 'Price',
            },
          ],
        },
        {
          name: 'rentTab',
          type: 'group',
          label: 'Rent Tab',
          fields: [
            {
              name: 'propertyType',
              type: 'relationship',
              label: 'Property Type',
              relationTo: 'propertyTypes', // Adjust as needed
            },
            {
              name: 'location',
              type: 'text',
              label: 'Location',
              required: true,
            },
            {
              name: 'monthlyRent',
              type: 'number',
              label: 'Monthly Rent',
            },
          ],
        },
        {
          name: 'sellTab',
          type: 'group',
          label: 'Sell Tab',
          fields: [
            {
              name: 'propertyType',
              type: 'relationship',
              label: 'Property Type',
              relationTo: 'propertyTypes', // Adjust as needed
            },
            {
              name: 'location',
              type: 'text',
              label: 'Location',
              required: true,
            },
            {
              name: 'askingPrice',
              type: 'number',
              label: 'Asking Price',
            },
          ],
        },
      ],
    },
  ],
}
