import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-06-01",
  dataset: "production",
  projectId: "w4z3gkfb",
  useCdn: false,
  allowReconfigure: true,
});

const builer = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builer.image(source);
}
