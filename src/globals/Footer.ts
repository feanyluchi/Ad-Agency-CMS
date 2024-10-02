import { GlobalConfig } from "payload";
import link from "../fields/link";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "quickLinks",
      label: "Quick Links",
      type: "array",
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      required: true,
      relationTo: 'media'
    },
    {
      name: 'copyright',
      label: 'Copy right',
      type: 'text',
      required: true,
      localized: true,
    }
  ],
};
