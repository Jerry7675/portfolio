import { buildSEO } from "@/components/SEO";
import SocialLinks from "@/components/SocialLinks";
import profileData from "@/data/profile.json";
import ContactForm from "./ContactForm";

export const metadata = buildSEO({
  title: "Sandesh | Contact",
  description: "Contact Sandesh for web development, engineering collaborations, and product work.",
  url: "https://sandeshpoudelchhetri.me/contact",
  image: "/sandeshPhoto.png",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-muted mb-6">
          Let’s connect. Whether you’re interested in a collaboration, a contract role, or have a
          product idea, send me a message and I’ll reply as quickly as possible.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Email</h2>
            <a
              href={`mailto:${profileData.email}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {profileData.email}
            </a>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Phone</h2>
            <a
              href={`tel:${profileData.phone}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {profileData.phone}
            </a>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Location</h2>
            <p className="text-foreground">{profileData.location}</p>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Connect</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href={`https://${profileData.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`https://${profileData.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
