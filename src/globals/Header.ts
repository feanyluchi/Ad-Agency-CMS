import { GlobalConfig } from 'payload';
import link from '../fields/link';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      required: true,
      relationTo: 'photos',
    },
    {
      name: 'quickLinks',
      label: 'Quick Links',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'hasChildren',
          label: 'Has Child Links?',
          type: 'checkbox',
        },
        {
          name: 'children',
          label: 'Child Links',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.hasChildren,
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
    },
  ],
};

export default Header;
