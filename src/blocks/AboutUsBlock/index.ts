import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block, Field } from "payload";;
// import richText from "../../fields/richText";

const columnFields: Field[] = [
  {
    name: 'aboutUsImage',
    label: 'About us Image',
    type: 'upload',
    relationTo: 'photos',
    required: true,
    localized: true
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    localized: true
  },
  // richText()
  {
    name: "richtext",
    type: 'richText',
    label: 'Rich Text',
    localized: true,
    editor: lexicalEditor()
  }
  ,
];

export const AboutUsBlock: Block = {
  slug: "aboutUsBlock",
  fields: 
    columnFields
};
