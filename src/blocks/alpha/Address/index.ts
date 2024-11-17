import { Block } from "payload"

const AddressBlock: Block = {
  slug: 'addresses',
  labels: {
    singular: 'Address',
    plural: 'Addresses',
  },
  fields: [
    {
      name: 'addresses',
      label: 'Addresses',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Location Title',
          type: 'text',
          required: true,
        },
        {
          name: 'addressLine',
          label: 'Address Line',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default AddressBlock
