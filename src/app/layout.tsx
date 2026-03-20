import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import FontComboClientWrapper from "@/components/ui/FontComboClientWrapper";

export const metadata: Metadata = {
  title: "Sandesh Poudel Chhetri | Full Stack Developer",
  description:
    "Full Stack Developer passionate about building impactful digital experiences. Explore my projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Sandesh Poudel Chhetri", url: "https://sandeshpoudelchhetri.me" }],
  creator: "Sandesh Poudel Chhetri",
  openGraph: {
    title: "Sandesh Poudel Chhetri | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building impactful digital experiences. Explore my projects, skills, and experience.",
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
        <FontComboClientWrapper>
          <Sidebar />
          {children}
        </FontComboClientWrapper>
      </body>
    </html>
  );
}
