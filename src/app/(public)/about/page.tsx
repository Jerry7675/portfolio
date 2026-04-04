import { buildSEO, JSONLDSchema } from "@/components/SEO";
import AboutSnippet from "@/components/sections/AboutSnippet";

export const metadata = buildSEO({
  title: "Sandesh | Computer Engineer & Web Developer",
  description:
    "Learn more about Sandesh, a computer engineer and web developer focused on creating responsive, accessible web applications.",
  url: "https://sandeshpoudelchhetri.me/about",
  image: "/sandeshPhoto.png",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh",
  jobTitle: "Computer Engineer",
  url: "https://sandeshpoudelchhetri.me",
  sameAs: [
    "https://github.com/Jerry7675",
    "https://www.linkedin.com/in/sandesh-poudel-chhetri",
    "https://www.facebook.com/sandeshpoudel",
    "https://sandeshpoudelchhetri.me",
  ],
  email: "mailto:sandeshchhetri5677@gmail.com",
  description:
    "Sandesh is a computer engineer and web developer building modern applications with a focus on performance, accessibility, and maintainability.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-5xl font-bold mb-6 text-primary">Sandesh</h1>
        <AboutSnippet />
      </section>
      <JSONLDSchema schema={personSchema} />
    </main>
  );
}
