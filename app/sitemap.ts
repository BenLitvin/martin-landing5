import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.usemartin.com",
      lastModified: new Date(),
    },
    {
      url: "https://demo.usemartin.com/demo",
      lastModified: new Date(),
    },
  ];
}
