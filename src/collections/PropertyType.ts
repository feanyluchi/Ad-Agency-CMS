import type { CollectionConfig } from 'payload'

export const PropertyTypes: CollectionConfig = {
  slug: 'propertyTypes',
  labels: {
    singular: 'Property Type',
    plural: 'Property Types',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Property Type Name',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Optional description of the property type.',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      label: 'Icon',
      relationTo: 'photos', // Assuming "media" is the collection where images or icons are stored
      required: false,
      admin: {
        description: 'Optional icon for the property type.',
      },
    },
  ],
}
