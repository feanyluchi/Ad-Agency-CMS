import type { Block, Field } from "payload";;

import { invertBackground } from "../../fields/invertBackground";
import link from "../../fields/link";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

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
    required: true,
    localized: true,
    editor: lexicalEditor()
  },
  {
    name: "enableLink",
    type: "checkbox",
    required: true,
  },
  link({
    overrides: {
      admin: {
        condition: (_: any, { enableLink }: any) => Boolean(enableLink),
      },
    },
  }),
];

export const AboutUs: Block = {
  slug: "aboutUs",
  fields: 
    columnFields
};
