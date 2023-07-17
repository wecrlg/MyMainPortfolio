import { useWindowSize } from "usehooks-ts";

export default function WindowSize() {
  const { width } = useWindowSize();
  if (width <= 576) return "sm";
  if (width > 576 && width <= 992) return "md";
  return "lg";
}
