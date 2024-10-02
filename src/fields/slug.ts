import type { Field } from 'payload'

import deepMerge from '../utilities/deepMerge'
import formatSlug from '../utilities/formatSlug'
import payload, { Payload } from 'payload'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      localized: true,
      admin: {
        position: 'sidebar',
        condition: ({ user }) => user?.role === 'main-user',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
      // validate: async (value, { data, operation }) => {
      //   if (operation === 'create') {
      //     const existingSlug = await new Promise<Payload[]>((resolve, reject) => {
      //       payload.find({
      //         collection: 'pages',
      //         where: { slug: value },
      //         limit: 1,
      //       }).then((result) => {
      //         if (result) {
      //           // handle the result
      //         } else {
      //           // handle the error
      //         }
      //       });
      //     });
      //     if (existingSlug) {
      //       return 'Slug already exists';
      //     }
      //   }
      //   return true;
      // },
    },
    overrides,
  )