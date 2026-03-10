// src/styles/fonts.ts
// Utility for font combos and font loading

export const FONT_COMBOS = {
  modern: ["Montserrat", "Lato", "Helvetica Neue", "Arial", "sans-serif"],
  classic: ["Georgia", "Times New Roman", "serif"],
  mono: ["Geist Mono", "Menlo", "Monaco", "monospace"],
};

export function getFontStack(combo: keyof typeof FONT_COMBOS) {
  return FONT_COMBOS[combo].join(", ");
}
