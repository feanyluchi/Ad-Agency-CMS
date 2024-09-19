// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { CollectionConfig, buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
// import { seoPlugin } from '@payloadcms/plugin-seo'

// import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Users from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const groupCollections = (group: string, collections: CollectionConfig[]): CollectionConfig[] => {
  return collections.map(collection => {
    return {
      ...collection,
      admin: {
        ...collection.admin,
        group,
      },
    };
  });
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Moments Estate',
      icons: [
        {
          url: '@/graphics/favicon.png',
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
  collections: [
    ...groupCollections('Library', [Media]),
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
    // seoPlugin({
    //   collections: [''],
    //   uploadsCollection: 'media',
    //   generateTitle: ({ doc }) => `${process.env.SITE_SEO_TITLE} - ${doc.title}`,
    //   generateDescription: ({ doc }) => doc.excerpt,
    //   tabbedUI: true,
    // }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
})
