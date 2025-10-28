import { useTheme } from "@/hooks/useTheme";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md border border-border hover:bg-muted transition cursor-pointer"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <span role="img" aria-label="Switch to dark mode">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="Switch to light mode">
            ☀️
          </span>
        )}
      </button>
    </div>
  );
}
