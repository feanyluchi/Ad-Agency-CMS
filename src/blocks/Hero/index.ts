import type { Block, Field } from "payload";;
import link from '../../fields/link';
import linkGroup from '@/fields/linkGroup';

const columnFields: Field[] = [
  {
    name: 'heroBackground',
    label: 'Hero background',
    type: 'upload',
    relationTo: 'photos',
    required: true,
  },
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true,
    localized: true,
  }
]

export const Hero: Block = {
  slug: 'hero',
  fields: columnFields,
}
