import { NextResponse } from "next/server";

const pages = [
  "https://sandeshpoudelchhetri.me/",
  "https://sandeshpoudelchhetri.me/about",
  "https://sandeshpoudelchhetri.me/contact",
  "https://sandeshpoudelchhetri.me/education",
  "https://sandeshpoudelchhetri.me/experience",
  "https://sandeshpoudelchhetri.me/projects",
  "https://sandeshpoudelchhetri.me/references",
  "https://sandeshpoudelchhetri.me/skills",
  "https://sandeshpoudelchhetri.me/tools",
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) =>
      `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.80</priority>\n  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
