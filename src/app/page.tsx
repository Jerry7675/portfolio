import type { Metadata } from "next";
import ParallelSlots from "./_components/ParallelSlots";

export const metadata: Metadata = {
  title: "Sandesh Poudel Chhetri · Full Stack Web Developer Portfolio",
  description:
    "Explore Sandesh Poudel Chhetri's portfolio featuring projects, experience, and skills in Next.js, React, and Node.js.",
  openGraph: {
    title: "Sandesh Poudel Chhetri · Full Stack Web Developer Portfolio",
    description:
      "Explore Sandesh Poudel Chhetri's portfolio featuring projects, experience, and skills in Next.js, React, and Node.js.",
    url: "https://sandeshpoudelchhetri.me",
    siteName: "Sandesh Poudel Chhetri Portfolio",
    images: [{ url: "/sandeshPhoto.png", width: 1200, height: 630, alt: "Sandesh profile" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Poudel Chhetri | Full Stack Developer",
    description:
      "Explore Sandesh Poudel Chhetri's portfolio featuring projects, experience, and skills in Next.js, React, and Node.js.",
    images: ["/sandeshPhoto.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
      <main className="mx-auto flex w-full flex-col gap-20 px-4 py-12">
        <ParallelSlots />
      </main>
    </div>
  );
}
