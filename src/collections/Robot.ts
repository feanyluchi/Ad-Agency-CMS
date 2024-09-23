import { CollectionConfig } from 'payload'

export const Robots: CollectionConfig = {
  slug: 'robots',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'domain',
      type: 'text',
      label: 'Domain',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Robot Content',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const { domain, content } = doc;
        console.log({domain, content});
        
        const workerUrl = process.env.CLOUDFLARE_WORKER_URL;
        const apiKey = process.env.CLOUDFLARE_API_KEY;

        if (!workerUrl || !apiKey) {
          console.error('Cloudflare Worker URL or API Key not set');
          return;
        }

        try {
          const response = await fetch(workerUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: apiKey, domain, content }),
          });

          console.log({response});
          

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          console.log(`robots.txt updated for ${domain}`);
        } catch (error) {
          console.error('Error updating robots.txt:', error);
        }
      },
    ],
  },
}
