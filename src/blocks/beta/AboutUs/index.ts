import link from "@/fields/link";
import { CustomBlock } from "block-types";

const AboutUsBlock: CustomBlock = {
  customBlockType: 'beta',
    slug: 'about-us',
    labels: {
      singular: 'About Us Section',
      plural: 'About Us Sections',
    },
    fields: [
      {
        name: 'subtitle',
        type: 'text',
        label: 'Subtitle',
        required: true,
        localized: true
      },
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        required: true,
        localized: true
      },
      {
        name: 'experienceImage',
        type: 'upload',
        relationTo: 'photos',
        label: 'Experience Image',
        required: true,
      },
      {
        name: 'nightImage',
        type: 'upload',
        relationTo: 'photos',
        label: 'Night Image',
        required: true,
      },
      {
        name: 'experience',
        type: 'text',
        label: 'Experience Text',
        required: true,
        localized: true,
        defaultValue: '20 Years of Experience',
      },
      {
        name: 'description',
        type: 'richText',
        label: 'Description',
        required: true,
      },
      {
        name: 'testimonialsImage',
        type: 'array',
        label: 'Testimonial Images',
        minRows: 1,
        maxRows: 3,
        fields: [
          {
            type: 'upload',
            name: 'image',
            relationTo: 'photos',
            label: 'Image',
          },
        ],
      },
      {
        name: 'testimonialsCount',
        type: 'text',
        label: 'Testimonials Count',
        defaultValue: '20k+ Satisfied Homeowners',
      },
      link(),
    ],
  };
  
  export default AboutUsBlock;
  