import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border transition-all duration-200"
      style={{
        borderColor: "var(--sc-border)",
        background: "var(--sc-surface)",
        color: "var(--sc-accent)",
        boxShadow: "0 0 6px var(--sc-border-glow)",
      }}
      title={theme === "dark" ? "Switch to Terran Command" : "Switch to Protoss Nexus"}
    >
      {theme === "dark" ? (
        <>
          <Sun size={13} />
          <span className="text-xs" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}>
            TERRAN
          </span>
        </>
      ) : (
        <>
          <Moon size={13} />
          <span className="text-xs" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}>
            PROTOSS
          </span>
        </>
      )}
    </button>
  );
}
