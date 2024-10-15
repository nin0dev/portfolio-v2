import { Client } from "@gocontento/next";

export function createClient() {
    return Client.createContentoClient({
        apiURL: process.env.CONTENTO_API_URL ?? "",
        apiKey: process.env.CONTENTO_API_KEY ?? "",
        siteId: process.env.CONTENTO_SITE_ID ?? "",
        isPreview: false,
    });
}
