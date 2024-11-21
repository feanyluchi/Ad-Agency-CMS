import { CustomBlock } from "block-types";

export const Banner: CustomBlock = {
  customBlockType: 'beta',
  slug: 'banner',
  fields: [
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'photos',
      required: true
    },
    {
      name: 'bannerText',
      type: 'text',
      label: 'Banner Text',
      required: true,
    },
  ],
}
