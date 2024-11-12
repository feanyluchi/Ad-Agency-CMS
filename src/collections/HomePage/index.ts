import { ContactForm } from '@/blocks/alpha/ ContactForm'
import { FeaturedProperties } from '@/blocks/alpha/FeaturedProperties'
import { Hero } from '@/blocks/alpha/Hero'
import { ImageGallery } from '@/blocks/alpha/ImageGallery'
import { PrestigeLivingSection } from '@/blocks/alpha/PrestigeLivingSection'
import { RichText } from '@/blocks/alpha/Richtext'
import AboutUsBlock from '@/blocks/beta/AboutUs'
import { Banner } from '@/blocks/beta/banner'
import PopularNeighborhoodsBlock from '@/blocks/beta/Neighbourhoods'
import type { CollectionConfig } from 'payload'

export const HomePage: CollectionConfig = {
  slug: 'home',
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
      const { totalDocs } = await req.payload.find({
        collection: 'home',
        limit: 0,
      })
      const creationLimit = 1
      return totalDocs < creationLimit
    },
  },
  fields: [
    {
      name: 'home',
      type: 'group',
      label: 'Home',
      access: {
        read: ({ req: { user } }) => {
          console.log('User object:', user)
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
        {
          name: 'layout',
          type: 'blocks',
          required: true,
          blocks: [
            Hero,
            PrestigeLivingSection,
            ImageGallery,
            RichText,
            ContactForm,
            FeaturedProperties,
            Banner,
            AboutUsBlock,
            PopularNeighborhoodsBlock
          ],
        },
      ],
    },
  ],
}
