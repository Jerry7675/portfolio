import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import FontComboClientWrapper from "@/components/ui/FontComboClientWrapper";

export const metadata: Metadata = {
  title: "Jerry Sandesh | Full Stack Developer",
  description:
    "Full Stack Developer passionate about building impactful digital experiences. Explore my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Sidebar />
        {/* Font Combo Switcher UI */}
        <FontComboClientWrapper>{children}</FontComboClientWrapper>
      </body>
    </html>
  );
}
