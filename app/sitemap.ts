import { IndexedRoutes } from "@/app/_utils/Router";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routeEntries: MetadataRoute.Sitemap = Object.entries(IndexedRoutes).map(
    ([key, value]) => {
      return {
        url: `${process.env.NEXT_PUBLIC_WEBSITE}${value}`,
      };
    }
  );

  return routeEntries;
}
