// src/styles/themes.ts
// Defines the available color theme presets for the portfolio.

export type ThemeComboType = keyof typeof THEME_COMBOS;

export const THEME_COMBOS = {
  default: {
    label: "Default",
    vars: {
      "--background": "#f7f7f7",
      "--foreground": "#232323",
      "--accent": "#bdbdbd",
      "--primary": "#232323",
      "--secondary": "#757575",
      "--border": "#e0e0e0",
      "--shadow": "#d1d1d1",
    },
  },
  dark: {
    label: "Dark",
    vars: {
      "--background": "#181818",
      "--foreground": "#ededed",
      "--accent": "#444444",
      "--primary": "#ededed",
      "--secondary": "#bdbdbd",
      "--border": "#232323",
      "--shadow": "#232323",
    },
  },
  ocean: {
    label: "Ocean",
    vars: {
      "--background": "#e6f7ff",
      "--foreground": "#0b1a26",
      "--accent": "#7dd3fc",
      "--primary": "#0c4a6e",
      "--secondary": "#475569",
      "--border": "#bae6fd",
      "--shadow": "#7dd3fc",
    },
  },
  sunset: {
    label: "Sunset",
    vars: {
      "--background": "#fff7ed",
      "--foreground": "#431407",
      "--accent": "#fbbf24",
      "--primary": "#b91c1c",
      "--secondary": "#9a3412",
      "--border": "#fcd34d",
      "--shadow": "#f59e0b",
    },
  },
  forest: {
    label: "Forest",
    vars: {
      "--background": "#f0fdf4",
      "--foreground": "#0f3d22",
      "--accent": "#4ade80",
      "--primary": "#115e59",
      "--secondary": "#166534",
      "--border": "#a7f3d0",
      "--shadow": "#6ee7b7",
    },
  },
};
