import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block, Field } from "payload";;

const columnFields: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    localized: true
  },
  {
    name: "subtitle",
    label: "Subtitle",
    type: "text",
    required: true,
    localized: true
  },
  {
    name: "richtext",
    type: 'richText',
    label: 'Rich Text',
    localized: true,
    editor: lexicalEditor()
  },
  {
    name: 'certificate',
    label: 'Certificate Image',
    type: 'upload',
    relationTo: 'photos',
    required: true,
    localized: true
  }
];

export const Certification: Block = {
  slug: "certification",
  fields: 
    columnFields
};
