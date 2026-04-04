import type { Metadata } from "next";

export type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  schema?: Record<string, unknown>;
};

export function buildSEO({ title, description, url, image }: SEOProps): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://sandeshpoudelchhetri.me"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sandesh Portfolio",
      type: "website",
      images: image ? [{ url: image, alt: title, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function JSONLDSchema({ schema }: { schema?: Record<string, unknown> }) {
  if (!schema) return null;

  return (
    <script key="json-ld-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
