import { useEffect, useState } from 'react';
import { useConfig } from '@payloadcms/ui';

const useFetchDocs = () => {
  const { config } = useConfig();
  const { collections } = config;

  const [isLoading, setIsLoading] = useState(true);
  const [docs, setDocs] = useState<{ [key: string]: any[] }>({});

  const fetchDocs = async (collectionSlug: string) => {
    try {
      const res = await fetch(`/api/${collectionSlug}?limit=100`);
      const data = await res.json();
      return data.docs || [];
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadDocuments = async () => {
      setIsLoading(true);
      const documents: { [key: string]: any[] } = {};

      try {
        await Promise.all(
          collections.map(async (collection: any) => {
            if (
              collection.slug !== 'payload-preferences' &&
              collection.slug !== 'payload-migrations' && collection.slug !== 'payload-locked-documents'
            ) {
              const collectionDocs = await fetchDocs(collection.slug);
              documents[collection.slug] = collectionDocs;
            }
          }),
        );

        setDocs(documents);
      } catch (error) {
        console.error('Error loading documents:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDocuments();
  }, [collections]);

  return { isLoading, docs };
};

export default useFetchDocs;