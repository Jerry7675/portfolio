"use client";
import Sidebar from "@/components/layout/Sidebar";
import FontComboProvider from "./FontComboProvider";

export default function FontComboClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FontComboProvider>
      <Sidebar />
      {children}
    </FontComboProvider>
  );
}
