import { CustomBlock } from "block-types"

const WhyChooseUsBlock: CustomBlock = {
  customBlockType: 'beta',
  slug: 'why-choose-us',
  labels: {
    singular: 'Why Choose Us',
    plural: 'Why Choose Us Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Why Choose Us',
      required: true,
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      defaultValue: 'Casa Reverie',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'photos',
          label: 'Feature Icon',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
          defaultValue: 'Exquisite Villa Designs',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
          required: true,
          defaultValue:
            'Crafted with attention to detail, our villas blend luxury and comfort for an unparalleled living experience.',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'photos',
      label: 'Section Image',
      required: true,
    },
  ],
}

export default WhyChooseUsBlock
