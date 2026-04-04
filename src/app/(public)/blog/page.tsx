import Link from "next/link";
import { buildSEO, JSONLDSchema } from "@/components/SEO";
import { posts } from "@/data/posts";

export const metadata = buildSEO({
  title: "Sandesh | Blog",
  description:
    "Read technical articles by Sandesh on React, authentication, Firebase security rules, and full-stack development.",
  url: "https://sandeshpoudelchhetri.me/blog",
  image: "/sandeshPhoto.png",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sandesh Blog",
  url: "https://sandeshpoudelchhetri.me/blog",
  description:
    "Technical blog posts from Sandesh covering web development, security, and engineering best practices.",
  author: {
    "@type": "Person",
    name: "Sandesh",
    url: "https://sandeshpoudelchhetri.me",
  },
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-10">
        <h1 className="text-5xl font-bold mb-4 text-primary">Blog</h1>
        <p className="text-lg text-muted mb-6">
          Explore featured posts, developer guides, and project stories from Sandesh.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full border border-surface-border bg-background px-4 py-2 text-sm font-semibold text-primary hover:border-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-surface-border bg-background px-4 py-2 text-sm font-semibold text-primary hover:border-primary"
          >
            Projects
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">
              {post.date} · {post.author}
            </p>
            <p className="text-base leading-relaxed text-foreground mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-secondary">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-surface-border px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </section>

      <JSONLDSchema schema={blogSchema} />
    </main>
  );
}
