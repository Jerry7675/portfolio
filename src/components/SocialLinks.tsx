import profileData from "@/data/profile.json";

const socialItems = [
  {
    label: "GitHub",
    href: `https://${profileData.github}`,
    ariaLabel: "Open GitHub profile",
    icon: "🐱",
  },
  {
    label: "LinkedIn",
    href: `https://${profileData.linkedin}`,
    ariaLabel: "Open LinkedIn profile",
    icon: "🔗",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sandeshpoudel",
    ariaLabel: "Open Facebook profile",
    icon: "📘",
  },
  {
    label: "Email",
    href: `mailto:${profileData.email}`,
    ariaLabel: "Send email to Sandesh",
    icon: "✉️",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap justify-center gap-3 text-sm" aria-label="Social links">
      {socialItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={item.ariaLabel}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-2 text-foreground transition hover:border-primary hover:text-primary"
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
