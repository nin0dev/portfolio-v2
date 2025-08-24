import { contentfulClient } from './contentful';

export async function getEntries(contentType: string) {
  const entries = await contentfulClient.getEntries({ content_type: contentType });
  return entries.items;
}