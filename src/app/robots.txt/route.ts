import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://sandeshpoudelchhetri.me/sitemap.xml
Host: sandeshpoudelchhetri.me
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
