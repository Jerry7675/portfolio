export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        fontFamily: "var(--font-active)",
        color: "var(--foreground)",
        background: "var(--background)",
        minHeight: "100vh",
      }}
    >
      {children}
    </main>
  );
}
