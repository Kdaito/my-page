import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'my-page',
  apiKey: process.env.API_KEY || '',
})