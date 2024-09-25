// import type { GlobalConfig } from 'payload/types'
import { GlobalConfig } from 'payload'
import link from '../fields/link'

export const CompanyDetails: GlobalConfig = {
  slug: 'companydetails',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companycontent',
      label: 'Company Content',
      type: 'text',
      required: true,
    },
  ],
}
