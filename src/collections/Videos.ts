import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig } from 'payload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Videos: CollectionConfig = {
  slug: 'video',
  labels: {
    singular: "Video's",
    plural: "Video's",
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
