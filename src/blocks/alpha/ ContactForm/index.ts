import type { Block } from 'payload';

export const ContactForm: Block = {
  slug: 'contactForm',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      required: true,
      localized: true,
      defaultValue: 'Send Us A Message',
      admin: {
        description: 'The title displayed above the contact form.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Form Description',
      required: false,
      localized: true,
      admin: {
        description: 'A short description or introductory text displayed above the form.',
      },
    },
    {
      name: 'successMessage',
      type: 'text',
      label: 'Success Message',
      required: true,
      localized: true,
      defaultValue: 'Thank you for your message! We will get back to you soon.',
      admin: {
        description: 'Message displayed after the form is successfully submitted.',
      },
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      required: true,
      localized: true,
      defaultValue: 'Send',
      admin: {
        description: 'Text displayed on the form submission button.',
      },
    }
  ],
};