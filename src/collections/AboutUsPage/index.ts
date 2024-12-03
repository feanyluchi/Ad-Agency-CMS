import type { CollectionConfig } from 'payload'

export const AboutUsPage: CollectionConfig = {
  slug: 'aboutus',
  labels: {
    singular: 'About Us',
    plural: 'About Us',
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
        collection: 'aboutus',
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
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      access: {
        read: ({ req: { user } }) => {
          return user?.role === 'admin'
        },
        update: ({ req: { user } }) => {
          return user?.role === 'admin'
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
      ],
    },
    {
      name: 'aboutuscontent',
      type: 'group',
      label: 'About us content',
      fields: [
        {
          name: 'contentBackground',
          label: 'Content background',
          type: 'upload',
          relationTo: 'photos',
          required: true,
        },
        {
          name: 'contentSubtitle',
          label: 'Content Subtitle',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          required: true,
          localized: true,
        },
        {
          name: 'socialMedia',
          label: 'Social Media',
          type: 'group',
          fields: [
            {
              name: 'facebook',
              label: 'Facebook URL',
              type: 'text',
              required: true,
            },
            {
              name: 'linkedin',
              label: 'LinkedIn URL',
              type: 'text',
              required: true,
            },
            {
              name: 'instagram',
              label: 'Instagram URL',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'seo',
          type: 'group',
          fields: [
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'photos',
            },
            {
              name: 'ogTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'ogDescription',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'twitterCard',
              type: 'select',
              options: [
                { label: 'Summary', value: 'summary' },
                { label: 'Summary with large image', value: 'summary_large_image' },
              ],
              defaultValue: 'summary',
            },
            {
              name: 'twitterImage',
              type: 'upload',
              relationTo: 'photos',
            },
            {
              name: 'twitterTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'twitterDescription',
              type: 'textarea',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
