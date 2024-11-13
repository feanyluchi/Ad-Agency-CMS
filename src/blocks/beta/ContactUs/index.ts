import { Block } from "payload"

const ContactUs: Block = {
  slug: 'contact-us',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Ler’s Have a Chat',
      required: true,
      localized: true
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Section Sub-Title',
      defaultValue: 'Ready to Find Your Dream Home?',
      required: true,
      localized: true
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'photos',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      required: true,
      localized: true
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
        },
      ],
    },
  ],
}

export default ContactUs
