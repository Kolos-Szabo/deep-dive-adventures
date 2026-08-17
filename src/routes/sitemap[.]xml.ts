import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog-posts";


const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/rolunk", changefreq: "monthly", priority: "0.8" },
          { path: "/szolgaltatasok", changefreq: "monthly", priority: "0.9" },
          { path: "/szolgaltatasok/naui-tanfolyam", changefreq: "monthly", priority: "0.8" },
          { path: "/szolgaltatasok/elmenymerules", changefreq: "monthly", priority: "0.8" },
          { path: "/szolgaltatasok/gyakorlo-merules", changefreq: "monthly", priority: "0.8" },
          { path: "/szolgaltatasok/csoportos-program", changefreq: "monthly", priority: "0.8" },
          { path: "/galeria", changefreq: "monthly", priority: "0.6" },
          { path: "/biztonsag", changefreq: "monthly", priority: "0.7" },
          { path: "/kapcsolat", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/blog/elso-buvarkodas-romaniaban", changefreq: "monthly", priority: "0.7" },
          ...blogPosts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
