import { GlobalConfig } from "payload";
import link from "../fields/link";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      required: true,
      relationTo: 'photos'
    },
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
      name: 'copyright',
      label: 'Copy right',
      type: 'text',
      required: true,
      localized: true,
    }
  ],
};
