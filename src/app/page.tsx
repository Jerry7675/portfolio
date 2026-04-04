import { buildSEO } from "@/components/SEO";
import ParallelSlots from "./_components/ParallelSlots";

export const metadata = buildSEO({
  title: "Sandesh | Portfolio",
  description:
    "Sandesh Poudel Chhetri is a computer engineer and web developer building modern, responsive web experiences.",
  url: "https://sandeshpoudelchhetri.me",
  image: "/sandeshPhoto.png",
});

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
      <main className="mx-auto flex w-full flex-col gap-12 px-4 py-12">
        <ParallelSlots />
      </main>
    </div>
  );
}
