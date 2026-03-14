"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import type { ThemeComboType } from "@/styles/themes";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useContext(ThemeContext);

  return (
    <div style={{ margin: "1rem 0" }}>
      <p className="mb-2 font-medium">Color Theme:</p>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(themes).map(([key, themeDef]) => {
          const isActive = key === theme;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setTheme(key as ThemeComboType)}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 text-left transition-all duration-200"
              style={{
                borderColor: isActive ? "var(--primary)" : "var(--border)",
                backgroundColor: isActive ? "rgba(36, 49, 68, 0.06)" : "transparent",
              }}
            >
              <span
                className="h-5 w-5 shrink-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${themeDef.vars["--primary"]} 0%, ${themeDef.vars["--accent"]} 100%)`,
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              />
              <span className="text-sm">{themeDef.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
