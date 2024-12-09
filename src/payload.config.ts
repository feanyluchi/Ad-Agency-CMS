import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { CollectionConfig, buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { Videos } from './collections/Videos'
import Users from './collections/Users'
import { AboutUsPage } from './collections/AboutUsPage'
import { HomePage } from './collections/HomePage'
import { ProductsOverview } from './collections/ProductsOverview'
import { NewsOverview } from './collections/NewsOverview'
import { Contact } from './collections/Contact'
import { ProductEntry } from './collections/ProductEntry'
import { NewsEntry } from './collections/NewsEntry'
import { GeneralPageEntry } from './collections/GeneralPageEntry'
import { Photos } from './collections/Photos'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

import { seoPlugin } from '@payloadcms/plugin-seo'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'
import { Properties } from './collections/Properties'
import { propertyFilterPlugin } from 'plugins/property-filter-plugin/src'
import { PropertyTypes } from './collections/PropertyType'
// import { PropertiesOverview } from './collections/Properties'
// import { Properties } from './collections/Properties'

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
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Master payload',
      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          url: '/Tesoro-T.svg',
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
        dashboard: {
          Component: '@/components/CustomLayoutView/index#CustomView',
        },
      },
      Nav: '@/components/NavLinks/index#Nav',
      
    },
  },
  collections: [
    ...groupCollections('Single Pages', [
      HomePage,
      AboutUsPage,
      ProductsOverview,
      NewsOverview,
      Contact,
    ]),
    ...groupCollections('Channels Pages', [ProductEntry, NewsEntry, GeneralPageEntry, Properties]),
    ...groupCollections('Library', [Photos, Videos, PropertyTypes]),
    ...groupCollections('User Groups', [Users]),
  ],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  plugins: [
    s3Storage({
      collections: {
        ['photos']: {
          generateFileURL: (file) => {
            return `${process.env.S3_BASE_URL}/${file.filename}`
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
      collections: [
        'homepage',
        'aboutus',
        'productsoverview',
        'newsoverview',
        'contact',
        'productEntry',
        'newentry',
        'generalPageEntry',
        'propertiesoverview',
      ],
      uploadsCollection: 'photos',
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
