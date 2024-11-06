import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block, Field } from "payload";;

const columnFields: Field[] = [
  {
    name: 'teamImage',
    label: 'Team Image',
    type: 'upload',
    relationTo: 'photos',
    required: true,
    localized: true
  },
  {
    name: 'imagePosition',
    label: 'Image Position',
    type: 'radio',
    options: [
      {
        label: 'Left Position',
        value: 'left',
      },
      {
        label: 'Right position',
        value: 'right',
      },
      
    ],
    defaultValue: 'right',
    admin: {
      layout: 'horizontal',
      width: '50%',
    },
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    localized: true
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    localized: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
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
  }
  ,
  {
    name: 'greeting',
    label: 'Greeting',
    type: 'text',
    required: true,
    localized: true
  },
];

export const OurTeam: Block = {
  slug: "ourTeam",
  fields: 
    columnFields
};