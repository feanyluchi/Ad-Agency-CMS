import type { Block } from 'payload';

export const FeaturedProperties: Block = {
  slug: 'featuredProperties',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      localized: true,
      defaultValue: 'Featured Properties',
      admin: {
        description: 'Title displayed above the featured properties section.',
      },
    },
    {
      name: 'propertyCount',
      type: 'number',
      label: 'Number of Properties to Display',
      required: true,
      defaultValue: 4,
      admin: {
        description: 'Specify the number of properties to fetch and display as featured properties.',
      },
    },
    {
      name: 'propertyStatus',
      type: 'select',
      label: 'Property Status',
      options: [
        { label: 'For Sale', value: 'for_sale' },
        { label: 'For Rent', value: 'for_rent' },
        { label: 'Sold', value: 'sold' },
      ],
      required: true,
      defaultValue: 'for_sale',
      admin: {
        description: 'Filter properties by their status.',
      },
    },
    {
      name: 'displayPrice',
      type: 'checkbox',
      label: 'Display Property Price',
      defaultValue: true,
      admin: {
        description: 'Toggle to show or hide the price of each property.',
      },
    },
    {
      name: 'displayAddress',
      type: 'checkbox',
      label: 'Display Property Address',
      defaultValue: true,
      admin: {
        description: 'Toggle to show or hide the address of each property.',
      },
    }
  ],
};