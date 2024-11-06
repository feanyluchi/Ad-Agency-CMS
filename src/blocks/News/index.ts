import type { Block, Field } from "payload";

const columnFields: Field[] = [
  {
    name: 'newsimage',
    label: 'News Image',
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
    name: "enableLink",
    type: "checkbox",
    required: true,
    localized: true
  },
];

export const News: Block = {
  slug: "news",
  fields: [
    {
      name: "columns",
      type: "array",
      maxRows: 3,
      fields: columnFields,
    },
  ],
};
