"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSidebarStore } from "@/store/sidebarStore";
import FontComboSwitcher from "../ui/FontComboSwitcher";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Tools", href: "/tools" },
  { label: "Projects", href: "/projects" },
  { label: "References", href: "/references" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const toggleSidebar = useSidebarStore((s) => s.toggle);
  const closeSidebar = useSidebarStore((s) => s.close);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 flex flex-col gap-1.5 p-2 hover:bg-(--accent) rounded-lg transition-colors duration-200"
        aria-label="Toggle sidebar"
      >
        <span
          className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 block ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 block ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 block ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 animate-in fade-in cursor-default"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-(--background) shadow-2xl z-40 transition-transform duration-300 ease-out border-r border-(--border) ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "var(--font-active)" }}
      >
        {/* Header */}
        <div className="pt-20 px-6 pb-8">
          <h2 className="text-2xl font-bold text-(--primary)">Jerry Sandesh</h2>
          <p className="text-sm text-(--secondary) mt-1">Full Stack Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-(--primary) font-medium hover:bg-(--accent) transition-all duration-200 transform hover:translate-x-1 ${
                    isOpen ? `animate-in fade-in slide-in-from-left-4` : ""
                  }`}
                  style={{
                    animationDelay: isOpen ? `${index * 30}ms` : "0ms",
                    animationFillMode: "both",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Font Switcher */}
        <div className="px-6 pb-4">
          <FontComboSwitcher />
        </div>
        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <p className="text-xs text-(--secondary) text-center">
            © 2026 Jerry Sandesh. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
