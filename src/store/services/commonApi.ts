import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { BACKENDURL, XRapidAPIHost, XRapidAPIKey } from '../../data/constants';

const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: BACKENDURL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', XRapidAPIKey);
      headers.set('X-RapidAPI-Host', XRapidAPIHost);
      headers.set('Cache-Control', 'public, max-age=300');
      return headers;
    },
  }),
  { maxRetries: 3 }
);

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: staggeredBaseQuery,
  keepUnusedDataFor: 300,
  endpoints: () => ({}),
});
