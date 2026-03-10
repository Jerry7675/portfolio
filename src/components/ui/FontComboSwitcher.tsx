import { useContext } from "react";
import { FontComboContext } from "@/components/ui/FontComboProvider";
import { FONT_COMBOS } from "@/styles/fonts";

type FontComboType = keyof typeof FONT_COMBOS;

export default function FontComboSwitcher() {
  const { combo, setCombo } = useContext(FontComboContext);
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor="font-combo-select" style={{ marginRight: 8 }}>
        Font Style:
      </label>
      <select
        id="font-combo-select"
        value={combo}
        onChange={(e) => setCombo(e.target.value as FontComboType)}
        style={{ padding: 4, borderRadius: 4 }}
      >
        {Object.keys(FONT_COMBOS).map((key) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
