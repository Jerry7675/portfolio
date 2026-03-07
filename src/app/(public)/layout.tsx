import Sidebar from "@/components/layout/Sidebar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
