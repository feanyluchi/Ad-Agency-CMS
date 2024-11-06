import type { Block } from "payload";

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    invertBackground,
    {
      name: "richtext",
      type: 'richText',
      label: 'Rich Text',
      editor: lexicalEditor()
    }
    ,
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
