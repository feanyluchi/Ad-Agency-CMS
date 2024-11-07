import type { Block, Field } from 'payload'

export const PrestigeLivingSection: Block = {
  slug: 'prestigeLivingSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'The Essence of Prestige Living',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      required: true,
      admin: {
        description: 'Main descriptive content for this section.',
      },
    },
    {
      name: 'mapSection',
      type: 'group',
      label: 'Map and Locations',
      fields: [
        {
          name: 'mapImage',
          type: 'upload',
          label: 'Map Image',
          relationTo: 'photos',
          required: true,
          admin: {
            description: 'Upload the map image.',
          },
        },
        {
          name: 'locations',
          type: 'array',
          label: 'Locations',
          minRows: 1,
          labels: {
            singular: 'Location',
            plural: 'Locations',
          },
          fields: [
            {
              name: 'locationName',
              type: 'text',
              label: 'Location Name',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
