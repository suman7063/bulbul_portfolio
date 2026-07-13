"use client"
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-amber-300 hover:text-orange-600 dark:hover:text-amber-200 hover:border-orange-300 dark:hover:border-slate-500 backdrop-blur-sm transition-all duration-300"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
