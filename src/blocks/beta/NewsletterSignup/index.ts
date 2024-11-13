import { Block } from 'payload'

const NewsletterSignupBlock: Block = {
  slug: 'newsletter-signup',
  labels: {
    singular: 'Newsletter Signup',
    plural: 'Newsletter Signups',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'placeholderText',
      label: 'Placeholder Text',
      type: 'text',
      defaultValue: 'Enter your mail here...',
      required: true,
      localized: true,
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: 'text',
      defaultValue: 'GO',
      required: true,
      localized: true,
    },
    {
      name: 'footerText',
      label: 'Footer Text',
      type: 'text',
      defaultValue: "Your email is safe with us, we don’t spam.",
      required: true,
      localized: true,
    },
  ],
}

export default NewsletterSignupBlock
