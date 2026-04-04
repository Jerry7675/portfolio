import { buildSEO, JSONLDSchema } from "@/components/SEO";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export const metadata = buildSEO({
  title: "Sandesh | Projects",
  description:
    "Featured project work by Sandesh, highlighting modern full-stack web applications and developer solutions.",
  url: "https://sandeshpoudelchhetri.me/projects",
  image: "/sandeshPhoto.png",
});

const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Sandesh Project Portfolio",
  creator: {
    "@type": "Person",
    name: "Sandesh",
    url: "https://sandeshpoudelchhetri.me",
  },
  url: "https://sandeshpoudelchhetri.me/projects",
  description:
    "A creative portfolio of web development projects built by Sandesh, featuring modern UI, services, and scalable architecture.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <FeaturedProjects />
      <JSONLDSchema schema={creativeWorkSchema} />
    </main>
  );
}
