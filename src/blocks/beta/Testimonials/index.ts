import { CustomBlock } from "block-types"

const Testimonials: CustomBlock = {
  customBlockType: 'beta',
  slug: 'testimonials',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Testimonials',
      required: true,
      localized: true
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Section Sub-title',
      defaultValue: 'Hear From Our Clients',
      required: true,
      localized: true
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'photos',
          label: 'Client Image',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Client Name',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating',
          required: true,
          min: 1,
          max: 5,
        },
        {
          name: 'testimonial',
          type: 'textarea',
          label: 'Testimonial Text',
          required: true,
          localized: true
        },
      ],
    },
  ],
}

export default Testimonials
