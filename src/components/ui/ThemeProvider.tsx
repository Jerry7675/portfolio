"use client";

import type { ReactNode } from "react";
import { createContext, useEffect, useMemo, useState } from "react";
import { THEME_COMBOS, type ThemeComboType } from "@/styles/themes";

const LOCAL_STORAGE_KEY = "portfolio-theme";
const LOCAL_STORAGE_USER_SET_KEY = "portfolio-theme-explicit";

export const ThemeContext = createContext<{
  theme: ThemeComboType;
  setTheme: (theme: ThemeComboType) => void;
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

function getAutoTheme(): ThemeComboType {
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth(); // 0=Jan

  // Use the dark "midnight" palette for late night hours
  if (hour >= 20 || hour < 6) {
    return "midnight";
  }

  // Month-based default themes
  if (month >= 2 && month <= 4) return "spring"; // Mar - May
  if (month >= 5 && month <= 7) return "ocean"; // Jun - Aug
  if (month >= 8 && month <= 10) return "autumn"; // Sep - Nov
  return "dark"; // Dec - Feb
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeComboType>("default");
  const [isUserSet, setIsUserSet] = useState(false);

  const setTheme = (next: ThemeComboType) => {
    setThemeState(next);
    setIsUserSet(true);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, next);
    window.localStorage.setItem(LOCAL_STORAGE_USER_SET_KEY, "true");
  };

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeComboType | null;
    const storedExplicit = window.localStorage.getItem(LOCAL_STORAGE_USER_SET_KEY) === "true";

    if (stored && stored in THEME_COMBOS && storedExplicit) {
      setThemeState(stored);
      setIsUserSet(true);
      return;
    }

    const auto = getAutoTheme();
    setThemeState(auto);
    setIsUserSet(false);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, auto);
    window.localStorage.setItem(LOCAL_STORAGE_USER_SET_KEY, "false");
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (isUserSet) return;

    const checkTimer = () => {
      const next = getAutoTheme();
      if (next !== theme) {
        setThemeState(next);
        window.localStorage.setItem(LOCAL_STORAGE_KEY, next);
      }
    };

    const interval = window.setInterval(checkTimer, 1000 * 60);
    return () => window.clearInterval(interval);
  }, [isUserSet, theme]);

  const value = useMemo(() => ({ theme, setTheme, themes: THEME_COMBOS }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
