import { CollectionConfig, GlobalConfig } from 'payload';

const StaticTexts: GlobalConfig = {
  slug: 'staticTexts',
  admin: {
    description: 'This collection contains static text block that are used throughout the site.',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      name: 'featuredHousesSection',
      type: 'text',
      label: 'Featured Houses Section',
      required: true,
      localized: true,
    },
    {
      name: 'contactUs',
      type: 'text',
      label: 'Contact Us So We May Contact You',
      required: true,
      localized: true,
    },
    {
      name: 'contactFormPlaceholders',
      type: 'group',
      label: 'Contact Form Placeholders',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
          required: true,
          localized: true,
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
          required: true,
          localized: true,
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          required: true,
          localized: true,
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
          required: true,
          localized: true,
        },
        {
          name: 'message',
          type: 'text',
          label: 'Message',
          required: true,
          localized: true,
        },
        {
          name: 'send',
          type: 'text',
          label: 'Send',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'interestedContactAgent',
      type: 'text',
      label: 'Interested? Contact Our Agent:',
      required: true,
      localized: true,
    },
    {
      name: 'mainFeatures',
      type: 'text',
      label: 'Main Features',
      required: true,
      localized: true,
    },
    {
      name: 'otherFeatures',
      type: 'text',
      label: 'Other Features',
      required: true,
      localized: true,
    },
  ],
};

export default StaticTexts;
