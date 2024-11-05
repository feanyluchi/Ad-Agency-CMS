// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { CollectionConfig, FieldHook, buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Media } from './collections/Media'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { HomePage } from './collections/HomePage'
import { s3Storage } from '@payloadcms/storage-s3'

import StaticTexts from './globals/StaticTexts'
import Users from './collections/Users'
import { Robots } from './collections/Robot'

import { seoPlugin } from '@payloadcms/plugin-seo'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'
import { Properties } from './collections/Properties'
import { propertyFilterPlugin } from 'plugins/property-filter-plugin/src'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const groupCollections = (group: string, collections: CollectionConfig[]): CollectionConfig[] => {
  return collections.map((collection) => {
    return {
      ...collection,
      admin: {
        ...collection.admin,
        group,
      },
    }
  })
}

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM_ADDRESS || '',
    defaultFromName: 'payload',
    // Nodemailer transportOptions
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }),
  }),
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- AD Agency',
      icons: [
        {
          url: './graphics/favicon.png',
        },
      ],
    },
    components: {
      graphics: {
        Icon: {
          path: '@/graphics/Icon/index#Icon',
        },
        Logo: '@/graphics/Logo/index#Logo',
      },
      views: {
        Dashboard: {
          Component: '@/components/CustomLayoutView/index#CustomView',
        },
      },
      Nav: '@/components/NavLinks/index#Nav',
    },
  },
  globals: [Header, Footer, StaticTexts],
  collections: [
    ...groupCollections('Single Pages', [HomePage]),
    ...groupCollections('Channels Pages', [Properties]),
    ...groupCollections('Library', [Media]),
    ...groupCollections('Robot file', [Robots]),
    ...groupCollections('User Groups', [Users]),
    
  ],
  editor: lexicalEditor(),
  plugins: [
    s3Storage({
      collections: {
        ['media']: {
          generateFileURL: (file) => {
            return `${process.env.S3_BASE_URL}/ad-agency/${file.filename}`
          },
        },
      },
      bucket: process.env.S3_BUCKET || '',
      acl: 'public-read',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),
    seoPlugin({
      collections: ['homepage', 'properties'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${process.env.SITE_SEO_TITLE} - ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
      tabbedUI: true,
    }),
    nestedDocsPlugin({
      collections: ['properties'],
      generateURL: (docs: any) => docs.reduce((url: any, doc: any) => `${url}/${doc.slug}`, ''),
    }),
    propertyFilterPlugin(),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  localization: {
    locales: [
      { code: 'en', label: { en: 'English' } },
      { code: 'es', label: { en: 'Spanish', es: 'Español' } },
      { code: 'nl', label: { en: 'Dutch', nl: 'Nederlands' } },
      { code: 'fr', label: { en: 'French', fr: 'Français' } },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
})