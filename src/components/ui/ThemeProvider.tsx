"use client";

import type { ReactNode } from "react";
import { createContext, useEffect, useMemo, useState } from "react";
import { THEME_COMBOS, type ThemeComboType } from "@/styles/themes";

const LOCAL_STORAGE_KEY = "portfolio-theme";

export const ThemeContext = createContext<{
  theme: ThemeComboType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeComboType>>;
  themes: typeof THEME_COMBOS;
}>({
  theme: "default",
  setTheme: () => {},
  themes: THEME_COMBOS,
});

function applyTheme(theme: ThemeComboType) {
  const vars = THEME_COMBOS[theme]?.vars;
  if (!vars) return;

  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeComboType>("default");

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeComboType | null;
    if (stored && stored in THEME_COMBOS) {
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setTheme(prefersDark ? "dark" : "default");
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, themes: THEME_COMBOS }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
