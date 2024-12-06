import { Block } from "payload"

const ClientReview: Block = {
    slug: 'clientReview',
    labels: {
      singular: 'Client Review',
      plural: 'Client Reviews',
    },
    fields: [
      {
        name: 'sectionTitle',
        type: 'text',
        label: 'Section Title',
        required: true,
      },
      {
        name: 'reviews',
        type: 'array',
        label: 'Client Reviews',
        required: true,
        minRows: 1,
        fields: [
          {
            name: 'clientImage',
            type: 'upload',
            relationTo: 'photos',
            label: 'Client Image',
            required: true,
          },
          {
            name: 'clientName',
            type: 'text',
            label: 'Client Name',
            required: true,
          },
          {
            name: 'stars',
            type: 'number',
            label: 'Star Rating',
            required: true,
            min: 0,
            max: 5,
          },
          {
            name: 'reviewContent',
            type: 'textarea',
            label: 'Review Content',
            required: true,
          },
        ],
      },
    ],
  };
  
  export default ClientReview;
  