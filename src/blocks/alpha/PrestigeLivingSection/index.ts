import type { Block } from 'payload'

export const PrestigeLivingSection: Block = {
  slug: 'prestigeLivingSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      localized: true,
      defaultValue: 'The Essence of Prestige Living',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      required: true,
      localized: true,
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
          name: 'regions',
          type: 'select',
          hasMany: true,
          label: 'Autonomous Regions',
          options: [
            { label: 'Andalusia', value: 'andalusia' },
            { label: 'Aragon', value: 'aragon' },
            { label: 'Asturias', value: 'asturias' },
            { label: 'Balearic Islands', value: 'balearic_islands' },
            { label: 'Basque Country', value: 'basque_country' },
            { label: 'Canary Islands', value: 'canary_islands' },
            { label: 'Cantabria', value: 'cantabria' },
            { label: 'Castile and León', value: 'castile_and_leon' },
            { label: 'Castile-La Mancha', value: 'castile_la_mancha' },
            { label: 'Catalonia', value: 'catalonia' },
            { label: 'Extremadura', value: 'extremadura' },
            { label: 'Galicia', value: 'galicia' },
            { label: 'La Rioja', value: 'la_rioja' },
            { label: 'Madrid', value: 'madrid' },
            { label: 'Murcia', value: 'murcia' },
            { label: 'Navarre', value: 'navarre' },
            { label: 'Valencian Community', value: 'valencian_community' },
          ],
          required: true,
          admin: {
            description: 'Select the autonomous regions where you operate.',
          },
        },
      ],
    },
  ],
}
