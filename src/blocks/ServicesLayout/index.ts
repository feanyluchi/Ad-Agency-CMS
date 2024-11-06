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
    required: true,
    editor: lexicalEditor()
  },
  {
    name: 'layoutImage',
    label: 'Layout Image',
    type: 'upload',
    relationTo: 'photos',
    required: true
  },
];

export const ServicesLayoutBlock: Block = {
  slug: "servicesLayoutBlock",
  fields: 
    columnFields
};
