import { useAppContext } from "../contexts/AppContext";

export default function UseColor() {
  const { isDarkMode } = useAppContext();
  function Color(hoverState: boolean) {
    if (isDarkMode && !hoverState) return "#ddd";
    if (!isDarkMode && !hoverState) return "#111";
    if (isDarkMode && hoverState) return "var(--cyan)";
    if (!isDarkMode && hoverState) return "var(--secondary)";
  }
  return { Color };
}
