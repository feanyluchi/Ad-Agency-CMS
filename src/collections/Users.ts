import { CollectionConfig } from 'payload';

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    // useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'firstName', 'lastName'],
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Client',
          value: 'client',
        },
      ],
      defaultValue: 'admin',
      required: true,
      admin: {
        condition: (data, siblingData, { user }) => {
          return user?.role === 'admin';
        },
      },
      access: {
        update: ({ req: { user } }) => {
          return user?.role === 'admin';
        },
      },
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Last Name',
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'photos',
      label: 'Profile Picture',
    },
  ],
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      if (user) return { id: { equals: user.id } };
      return false;
    },
    create: ({ req: { user } }) => {
      return user?.role === 'admin';
    },
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      if (user) return { id: { equals: user.id } };
      return false;
    },
    delete: ({ req: { user } }) => {
      return user?.role === 'admin';
    },
  },
  hooks: {
    afterChange: [
      async ({ req, operation }: {req: any, operation: any}) => {
        if (operation === 'create') {
          if (req.res && typeof req.res.redirect === 'function') {
            req.res.redirect('/admin/collections/users');
          }
        }
      },
    ],
  },
};

export default Users;