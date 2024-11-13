import { Block } from "payload"

const ContactInfoMapBlock: Block = {
  slug: 'contact-info-map',
  labels: {
    singular: 'Contact Info with Map',
    plural: 'Contact Info with Maps',
  },
  fields: [
    {
      name: 'addressTitle',
      label: 'Address Title',
      type: 'text',
      defaultValue: 'Casa Reverie Valencia',
      required: true,
      localized: true,
    },
    {
      name: 'addressDetails',
      label: 'Address Details',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: true,
    },
  ],
}

export default ContactInfoMapBlock
