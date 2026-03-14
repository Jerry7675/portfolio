"use client";
import FontComboProvider from "./FontComboProvider";
import ThemeProvider from "./ThemeProvider";

export default function FontComboClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FontComboProvider>{children}</FontComboProvider>
    </ThemeProvider>
  );
}
