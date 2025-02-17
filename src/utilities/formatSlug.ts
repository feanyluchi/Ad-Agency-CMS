import type { CollectionSlug, FieldHook } from 'payload'

const format = (val: string): string =>
  val.replace(/ /g, "-").replace(/[^\w-]+/g, "").toLowerCase();

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
          limit: 1,
        });

        // Ensure we don't conflict with the current document's slug during updates
        if (
          docs.length === 0 ||
          (originalDoc && originalDoc.slug === currentSlug)
        ) {
          return currentSlug;
        }

        // If the base slug exists, start adding suffixes
        currentSlug = `${slug}-${suffix}`;
        suffix++;
      }
    };

    // For create operation, generate a unique slug based on the fallback field
    if (operation === "create") {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];
      if (fallbackData && typeof fallbackData === "string") {
        return await generateUniqueSlug(fallbackData);
      }
    }

    // For update operation, only regenerate the slug if it has changed
    if (operation === "update" && value !== originalDoc?.slug) {
      if (typeof value === "string") {
        return await generateUniqueSlug(value);
      }
    }

    // Return the existing slug if nothing has changed
    return originalDoc?.slug || value;
  };

export default formatSlug;