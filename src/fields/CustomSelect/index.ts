import { Field } from 'payload'

export const PropertyHashtag: Field = {
  name: 'propertyHashtag',
  type: 'text',
  admin: {
    components: {
      Field: {
        path: '@/components/CustomTagSelector#CustomTagSelector',
        clientProps: {
          apiUrl: `${process.env.PUBLIC_API_URL}/property/property-website/fetch-property-hashtags`,
          apiKey: `${process.env.PUBLIC_API_KEY}`
        },
      },
    },
  },
}
