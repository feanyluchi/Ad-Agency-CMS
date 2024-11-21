import link from "@/fields/link";
import { CustomBlock } from "block-types";

const PopularNeighborhoodsBlock: CustomBlock = {
  customBlockType: 'beta',
    slug: 'popular-neighborhoods',
    labels: {
      singular: 'Popular Neighborhood',
      plural: 'Popular Neighborhoods',
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Section Title',
        defaultValue: 'Popular Neighborhoods',
        required: true,
      },
      {
        name: 'subtitle',
        type: 'text',
        label: 'Subtitle',
        defaultValue: 'Homes',
      },
      {
        name: 'neighborhoods',
        type: 'array',
        label: 'Neighborhoods',
        minRows: 1,
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'photos',
            label: 'Image',
            required: true,
          },
          {
            name: 'location',
            type: 'text',
            label: 'Location',
            required: true,
            defaultValue: 'Valencia',
          },
          link()
        ],
      },
    ],
  };
  
  export default PopularNeighborhoodsBlock;
  