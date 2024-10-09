import { ContentoClient, createContentoClient } from '@gocontento/client'

export function createClient(): ContentoClient {
  console.log(`${process.env.NEXT_PUBLIC_CONTENTO_API_URL}/content`);
  return createContentoClient({
    apiURL: process.env.CONTENTO_API_URL ?? '',
    apiKey: process.env.CONTENTO_API_KEY ?? '',
    siteId: process.env.CONTENTO_SITE_ID ?? '',
    isPreview: false,
  })
}
