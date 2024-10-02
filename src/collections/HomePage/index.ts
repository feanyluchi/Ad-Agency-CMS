
import HeroBlock from '@/blocks/Hero'
import RichTextBlock from '@/blocks/RichTextBlock'
import ThreeColumnBlock from '@/blocks/ThreeColumn'
import WhatWeDoBlock from '@/blocks/WhatWeDo'
import WhyChooseADAgencyBlock from '@/blocks/WhyChooseAgency'
import { colorOptions } from '@/fields/colorOptions'
import { slugField } from '@/fields/slug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

const isClientUser = (user: any) => user?.role === 'client-user'

export const HomePage: CollectionConfig = {
  slug: 'homepage',
  labels: {
    singular: 'Home',
    plural: 'Home',
  },
  admin: {
    // useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: async ({ req }) => {
      // Assuming you're using Payload's built-in 'find' method
      const { totalDocs } = await req.payload.find({
        collection: 'homepage', // Replace with your collection slug
        limit: 0, // Fetch all documents
      })

      // Define your limit here, for example, allow only 10 creations
      const creationLimit = 1

      // Allow creation if the total number of documents is less than the limit
      return totalDocs < creationLimit
    },
  },
  fields: [
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      access: {
        read: () => true,
        update: ({ req: { user } }) => {
          return user?.role === 'admin';
        },
      },
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
        slugField(),
      ],
    },

    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'mediaType',
          type: 'radio',
          label: 'Media Type',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Video',
              value: 'video',
            },
          ],
          defaultValue: 'image',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
          admin: {
            condition: (_, { mediaType }) => mediaType === 'image',
          },
        },
        {
          name: 'backgroundVideo',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Video',
          admin: {
            condition: (_, { mediaType }) => mediaType === 'video',
          },
        },
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
          required: true,
        },
        {
          name: 'heroTitle',
          type: 'text',
          label: 'Hero Title',
          localized: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Sub-Title',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
        },
      ],
    },

    {
      name: 'discoverblock',
      label: 'Discover the difference ...',
      type: 'group',
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
    },

    {
      name: 'whatWeDoBlock',
      label: 'What we do Section',
      type: 'group',
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
          label: 'Title',
          type: 'array',
          required: true,
          maxRows: 4,
          // minRows: 4,
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Title Segment',
              required: true,
            },
          ],
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
    },
    {
      name: 'whyChooseAdAgencyBlock',
      label: 'Why choose AD Agency Section',
      type: 'group',
      fields: [
        {
          name: 'rows',
          type: 'array',
          label: 'Rows',
          minRows: 1,
          maxRows: 2,
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
    },
    {
      name: 'contactBlock',
      label: 'Contact Section',
      type: 'group',
      fields: [
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          required: true,
          localized: true,
        },
      ],
    },

    // {
    //   name: 'layout',
    //   type: 'blocks',
    //   required: true,
    //   blocks: [ThreeColumnBlock, WhyChooseADAgencyBlock, WhatWeDoBlock, RichTextBlock],
    // },
  ],
}
