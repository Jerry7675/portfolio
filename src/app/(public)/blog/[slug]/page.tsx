import { notFound } from "next/navigation";
import { buildSEO, JSONLDSchema } from "@/components/SEO";
import { getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post not found",
      description: "The requested blog post was not found.",
    };
  }

  return buildSEO({
    title: `${post.title} | Sandesh`,
    description: post.description,
    url: `https://sandeshpoudelchhetri.me/blog/${post.slug}`,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Sandesh",
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sandeshpoudelchhetri.me/blog/${post.slug}`,
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <article className="rounded-3xl border border-surface-border bg-surface p-8 shadow-sm">
        <header className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-2">Blog</p>
          <h1 className="text-4xl font-bold mb-4 text-foreground">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-secondary">
            <span>{post.date}</span>
            <span>{post.author}</span>
          </div>
        </header>

        <p className="text-lg leading-relaxed text-foreground mb-6">{post.content}</p>
        <div className="flex flex-wrap gap-2 text-xs text-secondary">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-surface-border px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </article>

      <JSONLDSchema schema={articleSchema} />
    </main>
  );
}
