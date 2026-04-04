import SocialLinks from "@/components/SocialLinks";
import profileData from "@/data/profile.json";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--background)",
        color: "var(--secondary)",
        fontFamily: "var(--font-active)",
        borderTop: "1px solid var(--border)",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-foreground">
        <p>
          {profileData.name} portfolio — building web solutions as a computer engineer and web
          developer.
        </p>
        <SocialLinks />
        <p className="text-muted">© 2026 {profileData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
