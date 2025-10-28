import { useTheme } from "@/hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// The Theme component that displays the theme switcher toggle button.
export default function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md border border-border hover:bg-muted transition cursor-pointer text-(--foreground)"
      >
        {theme === "light" ? (
          <MdDarkMode size={20} />
        ) : (
          <MdLightMode size={20} />
        )}
      </button>
    </div>
  );
}
