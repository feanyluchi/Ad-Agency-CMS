import type { Block, Field } from "payload";

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
    ],
  },
  // richText()
  {
    name: "richtext",
    type: 'richText',
    label: 'Rich Text',
    editor: lexicalEditor()
  }
  ,
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_: any, { enableLink }: any) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  fields: [
    invertBackground,
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
