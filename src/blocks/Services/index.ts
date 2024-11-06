import type { Block, Field } from "payload";;

import { invertBackground } from "../../fields/invertBackground";
import link from "../../fields/link";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const columnFields: Field[] = [
  {
    name: 'servicesIcon',
    label: 'Services Icon/Image',
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
  },
  invertBackground,
  {
    name: "richtext",
    type: 'richText',
    label: 'Rich Text',
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

export const Services: Block = {
  slug: "services",
  labels: {
    singular: 'Service',
    plural: 'Services'
  },
  fields: [
    {
      name: "columns",
      type: "array",
      maxRows: 3,
      fields: columnFields,
      required: true,
      localized: true
    },
  ],
};
