import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import FontComboClientWrapper from "@/components/ui/FontComboClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://sandeshpoudelchhetri.me"),
  title: "Sandesh Poudel Chhetri | Full Stack Developer",
  description:
    "Sandesh Poudel Chhetri is a Full Stack Developer building high-impact web applications with Next.js, TypeScript, and Node.js.",
  keywords: [
    "Sandesh Poudel Chhetri",
    "Sandesh Poudel",
    "Poudel Chhetri",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Sandesh Poudel Chhetri", url: "https://sandeshpoudelchhetri.me" }],
  creator: "Sandesh Poudel Chhetri",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sandeshpoudelchhetri.me",
    languages: {
      "en-US": "https://sandeshpoudelchhetri.me",
      en: "https://sandeshpoudelchhetri.me",
    },
  },
  openGraph: {
    title: "Sandesh Poudel Chhetri | Full Stack Developer",
    description:
      "Sandesh Poudel Chhetri is a Full Stack Developer building high-impact web applications with Next.js, TypeScript, and Node.js.",
    type: "website",
    url: "https://sandeshpoudelchhetri.me",
    images: [
      {
        url: "/sandeshPhoto.png",
        width: 1200,
        height: 630,
        alt: "Sandesh Poudel Chhetri profile picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Sandesh | Full Stack Developer",
    description: "Full Stack Developer passionate about building impactful digital experiences.",
    images: ["/sandeshPhoto.png"],
    creator: "@jerrysandesh",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/sandeshPhoto.png",
    apple: "/sandeshPhoto.png",
    other: [
      { rel: "icon", url: "/sandeshPhoto.png" },
      { rel: "shortcut icon", url: "/sandeshPhoto.png" },
      { rel: "apple-touch-icon", url: "/sandeshPhoto.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script id="json-ld-person" type="application/ld+json" strategy="afterInteractive">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sandesh Poudel Chhetri",
            "url": "https://sandeshpoudelchhetri.me",
            "sameAs": [
              "https://www.linkedin.com/in/sandesh-poudel-chhetri",
              "https://github.com/Jerry7675",
              "https://twitter.com/jerrysandesh"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Sandesh Poudel Chhetri"
            },
            "description": "Full Stack Developer building high-impact web applications with Next.js, TypeScript, Node.js",
            "knowsAbout": ["Next.js", "React", "TypeScript", "Node.js", "Web Development", "Portfolio"]
          }`}
        </Script>
        <Script id="json-ld-website" type="application/ld+json" strategy="afterInteractive">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sandesh Poudel Chhetri Portfolio",
            "url": "https://sandeshpoudelchhetri.me",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sandeshpoudelchhetri.me/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`}
        </Script>
        <FontComboClientWrapper>
          <Sidebar />
          <div className="min-h-screen md:pl-72">
            {children}
            <Footer />
          </div>
        </FontComboClientWrapper>
      </body>
    </html>
  );
}
