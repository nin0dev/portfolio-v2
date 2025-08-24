import { createClient } from 'contentful';

const { NEXT_PUBLIC_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

if (!NEXT_PUBLIC_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are not defined!');
}

export const contentfulClient = createClient({
  space: NEXT_PUBLIC_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});