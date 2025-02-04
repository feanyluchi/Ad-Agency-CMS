import { ContactForm } from '@/blocks/alpha/ ContactForm'
import ClientReview from '@/blocks/alpha/ClientReview'
import { FeaturedProperties } from '@/blocks/alpha/FeaturedProperties'
import { Hero } from '@/blocks/alpha/Hero'
import { ImageGallery } from '@/blocks/alpha/ImageGallery'
import { PrestigeLivingSection } from '@/blocks/alpha/PrestigeLivingSection'
import { RichText } from '@/blocks/alpha/Richtext'
import AboutUsBlock from '@/blocks/beta/AboutUs'
import { Banner } from '@/blocks/beta/banner'
import ContactInfoMapBlock from '@/blocks/beta/ContactInfoMapBlock'
import ContactUs from '@/blocks/beta/ContactUs'
import PopularNeighborhoodsBlock from '@/blocks/beta/Neighbourhoods'
import NewsletterSignupBlock from '@/blocks/beta/NewsletterSignup'
import Testimonials from '@/blocks/beta/Testimonials'
import WhyChooseUsBlock from '@/blocks/beta/WhyChooseUs'
import { slugField } from '@/fields/slug'
import { CustomBlock } from 'block-types'
import type { CollectionConfig } from 'payload'

// Get block type from the environment variable
const BLOCK_TYPE = process.env.BLOCK_TYPE || 'both'

// Define all blocks
const allBlocks: CustomBlock[] = [
  Hero,
  PrestigeLivingSection,
  ImageGallery,
  RichText,
  ClientReview,
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

export const HomePage: CollectionConfig = {
  slug: 'home',
  labels: {
    singular: 'Home',
    plural: 'Home',
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
        collection: 'home',
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
      name: 'excerpt',
      type: 'textarea',
      required: true,
      localized: true,
    },
    slugField(),
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: allowedBlocks,
    },
  ],
}
