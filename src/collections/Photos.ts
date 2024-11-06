import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig } from 'payload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Photos: CollectionConfig = {
  slug: 'photos',
  labels: {
    singular: "Photo's",
    plural: "Photo's",
  },
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
    },
  ],
}
