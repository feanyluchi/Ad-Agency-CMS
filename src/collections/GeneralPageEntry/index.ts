import type { CollectionConfig } from 'payload'

// Import Blocks
import { ContactForm } from '@/blocks/alpha/ ContactForm'
import { FeaturedProperties } from '@/blocks/alpha/FeaturedProperties'
import { Hero } from '@/blocks/alpha/Hero'
import { ImageGallery } from '@/blocks/alpha/ImageGallery'
import { PrestigeLivingSection } from '@/blocks/alpha/PrestigeLivingSection'
import { RichText } from '@/blocks/alpha/Richtext'
import AboutUsBlock from '@/blocks/beta/AboutUs'
// import { Banner } from '@/blocks/beta/Banner';
import ContactInfoMapBlock from '@/blocks/beta/ContactInfoMapBlock'
import ContactUs from '@/blocks/beta/ContactUs'
import PopularNeighborhoodsBlock from '@/blocks/beta/Neighbourhoods'
import NewsletterSignupBlock from '@/blocks/beta/NewsletterSignup'
import Testimonials from '@/blocks/beta/Testimonials'
import WhyChooseUsBlock from '@/blocks/beta/WhyChooseUs'
import { Banner } from '@/blocks/beta/banner'
import { CustomBlock } from 'block-types'

// Get block type from the environment variable
const BLOCK_TYPE = process.env.BLOCK_TYPE || 'both'

// Define all blocks
const allBlocks: CustomBlock[] = [
  Hero,
  PrestigeLivingSection,
  ImageGallery,
  RichText,
  ContactForm,
  FeaturedProperties,
  //Beta starts here
  Banner,
  AboutUsBlock,
  PopularNeighborhoodsBlock,
  WhyChooseUsBlock,
  Testimonials,
  ContactUs,
  NewsletterSignupBlock,
  ContactInfoMapBlock,
]

// Filter blocks based on the environment variable
const allowedBlocks = allBlocks.filter(
  (block) => BLOCK_TYPE === 'both' || block.customBlockType === BLOCK_TYPE,
)

export const GeneralPageEntry: CollectionConfig = {
  slug: 'generalPageEntry',
  labels: {
    singular: 'General Page Entry',
    plural: 'General Page Entry',
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
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
        read: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
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
          blocks: allowedBlocks,
        },
      ],
    },
  ],
}
