import type { CollectionSlug, FieldHook } from 'payload'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

const formatSlug = (fallback: string): FieldHook => 
  async ({ operation, value, originalDoc, data, req }) => {
    // Type-safe collection extraction
    const collection = req.routeParams?.collection as CollectionSlug;
    
    if (!collection || !req.payload) {
      return value;
    }

    const generateUniqueSlug = async (baseSlug: string): Promise<string> => {
      let slug = format(baseSlug);
      let currentSlug = slug;
      let suffix = 1;

      while (true) {
        const { docs } = await req.payload.find({
          collection,
          where: { slug: { equals: currentSlug } },
          limit: 1
        });

        if (docs.length === 0) {
          return currentSlug;
        }

        // If the base slug exists, start adding suffixes
        currentSlug = `${slug}-${suffix}`;
        suffix++;
      }
    };

    // If a string value is provided, try to make it unique
    if (typeof value === 'string') {
      return await generateUniqueSlug(value);
    }

    // For create operation, use fallback field
    if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];

      if (fallbackData && typeof fallbackData === 'string') {
        return await generateUniqueSlug(fallbackData);
      }
    }

    return value;
  }

export default formatSlug;