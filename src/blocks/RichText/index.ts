import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block, Field } from "payload";

const fields: Field[] = [
  {
    name: 'richtext',
    type: 'richText',
    label: 'Rich Text',
    required: true,
    localized: true,
    editor: lexicalEditor(),
  },
]

export const RichText: Block = {
  slug: 'generalRichText',
  fields: fields,
}
