import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/request-staff", "/apply", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://workbridgeconsultingng.com${route}`,
    lastModified: new Date()
  }));
}
