// import type { GlobalConfig } from 'payload/types'
import { GlobalConfig } from 'payload'
import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstNavItems',
      type: 'array',
      maxRows: 2,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      required: true,
      relationTo: 'media'
    },
    {
      name: 'secondNavItems',
      type: 'array',
      maxRows: 2,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
