"use client";
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import type { FONT_COMBOS } from "@/styles/fonts";
import { getFontStack } from "@/styles/fonts";

export type FontComboType = keyof typeof FONT_COMBOS;
export const FontComboContext = createContext<{
  combo: FontComboType;
  setCombo: React.Dispatch<React.SetStateAction<FontComboType>>;
}>({
  combo: "modern",
  setCombo: () => {},
});

export default function FontComboProvider({ children }: { children: ReactNode }) {
  const [combo, setCombo] = useState<FontComboType>("modern");
  useEffect(() => {
    document.documentElement.style.setProperty("--font-active", getFontStack(combo));
  }, [combo]);
  return (
    <FontComboContext.Provider value={{ combo, setCombo }}>{children}</FontComboContext.Provider>
  );
}
