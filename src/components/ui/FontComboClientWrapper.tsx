"use client";
import Sidebar from "@/components/layout/Sidebar";
import FontComboProvider from "./FontComboProvider";
import FontComboSwitcher from "./FontComboSwitcher";

export default function FontComboClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FontComboProvider>
      <Sidebar />
      <div style={{ position: "fixed", top: 16, right: 24, zIndex: 100 }}>
        <FontComboSwitcher />
      </div>
      {children}
    </FontComboProvider>
  );
}
