import type { Block, Field } from "payload";;

const columnFields: Field[] = [
  {
    name: "contactImage",
    label: "Contact Image",
    type: "upload",
    relationTo: "photos",
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
    name: "address",
    label: "Address",
    type: "text",
    required: true,
    localized: true
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    localized: true
  },
  {
    name: "telephone",
    label: "Telephone",
    type: "number",
    required: true,
    localized: true
  },
  {
    name: "whatsapp",
    label: "Use Phone number for whatsapp?",
    required: true,
    localized: true,
    type: "checkbox",
    admin: {
      width: "50%",
      style: {
        alignSelf: "flex-end",
      },
    },
  },
  {
    name: "whatsapptext",
    label: "Whatsapp Intro text",
    type: "text",
    required: true,
    localized: true
  },
];

export const ContactBlock: Block = {
  slug: "contactInfo",
  fields: columnFields,
};
