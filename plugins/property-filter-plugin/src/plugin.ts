import { Config } from 'payload';

const fetchEnums = async () => {
  const apiKey = process.env.PUBLIC_API_KEY;
  const apiUrl = `${process.env.PUBLIC_API_URL}/websitesetting/websitesetting/fetch-website-enum`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Company-Api-Key': `${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch enums: ${response.statusText}`);
  }

  return await response.json();
};

const fetchCities = async () => {
  const apiKey = process.env.PUBLIC_API_KEY;
  const citiesApiUrl = `${process.env.PUBLIC_API_URL}/property/property-website/fetch-property-cities`;

  const response = await fetch(citiesApiUrl, {
    method: 'GET',
    headers: {
      'X-Company-Api-Key': `${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch cities: ${response.statusText}`);
  }

  return await response.json();
};

export const propertyFilterPlugin = (pluginOptions = {}) => async (incomingConfig: Config): Promise<Config> => {
  const config = { ...incomingConfig } as any;

  // Fetch enums and cities
  const enums = await fetchEnums();
  console.log(enums.data.property);
  
  const citiesResponse = await fetchCities();

  // Process city options
  const cityOptions = citiesResponse.data.map((city: string) => ({
    label: city,
    value: city,
  }));

  // Create a list of filter labels and their options
  const filterLabels = [
    { name: 'propertyCity', label: 'Property City', options: cityOptions },
    { name: 'numberOfBedrooms', label: 'Number of Bedrooms', options: [1, 2, 3, 4, 5].map((num) => ({ label: num.toString(), value: num.toString() })) },
    { name: 'numberOfBathrooms', label: 'Number of Bathrooms', options: [1, 2, 3, 4, 5].map((num) => ({ label: num.toString(), value: num.toString() })) },
    ...Object.keys(enums.data.property).map((key) => ({
      name: key,
      label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), // Converts camelCase to Title Case
      options: enums.data.property[key].map((type: any) => ({
        label: type.label,
        value: type.value,
      })),
    })),
  ];

  // Define dropdown options for bathrooms and bedrooms
  const roomOptions = [1, 2, 3, 4, 5].map((number) => ({
    label: number.toString(),
    value: number.toString(),
  }));

  // Define the array field for dynamic filter selection
  const fields = [
    {
      name: 'filters',
      label: 'Property Filters',
      type: 'array',  // Allows multiple filter entries
      labels: {
        singular: 'Filter',
        plural: 'Filters',
      },
      fields: [
        {
          name: 'filterType',
          label: 'Select Filter Type',
          type: 'select',
          options: filterLabels.map((filter) => ({
            label: filter.label,
            value: filter.name,
          })),
          required: true,
          admin: {
            description: 'Select which filter you want to add.',
          },
        },
        ...filterLabels.map((filter) => ({
          name: filter.name,
          label: 'Selected Value',
          type: 'select',
          options: filter.options,
          admin: {
            condition: ( any: any, siblingData: { filterType: string; }) => siblingData.filterType === filter.name,  // Only show if the filterType is selected
          },
        })),
      ],
    },
  ];

  // Wrap the fields in a group for better UI compartmentalization
  const propertyGroup = {
    name: 'propertyFilter',
    label: 'Property Filter Options',
    type: 'group',
    fields,
  };

  // Add the group to the Properties collection
  config.collections = config.collections.map((collection: any) => {
    if (collection.slug === 'properties') {
      return {
        ...collection,
        fields: [
          ...collection.fields,
          propertyGroup,
        ],
      };
    }
    return collection;
  });

  return config;
};