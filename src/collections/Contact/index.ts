import AddressBlock from '@/blocks/alpha/Address'
import { ImageGallery } from '@/blocks/alpha/ImageGallery'
import { RichText } from '@/blocks/alpha/Richtext'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: async ({ req }) => {
      const { totalDocs } = await req.payload.find({
        collection: 'contact',
        limit: 0,
      })
      const creationLimit = 1
      return totalDocs < creationLimit
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField(),
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'layout',
          type: 'blocks',
          required: true,
          blocks: [
            ImageGallery,
            RichText,
            AddressBlock
          ]
        }
      ],
    },
  ],
}
