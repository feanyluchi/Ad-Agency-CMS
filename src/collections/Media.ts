import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig } from 'payload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to generate alt text from filename
const generateAltText = (filename: string): string => {
  return filename
    .split('.').slice(0, -1).join('.')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase())
}

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    imageSizes: [
      {
        name: 'mobile',
        width: 480,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 768,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'desktop',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
    ],
    crop: true,
    focalPoint: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      defaultValue: ({ data }: {data: any}) => {
        if (data?.filename) {
          return generateAltText(data.filename)
        }
        return undefined
      },
      admin: {
        description: 'If left empty, the alt text will be generated from the filename.',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.alt && data.filename) {
          data.alt = generateAltText(data.filename)
        }
        return data
      },
    ],
  },
}