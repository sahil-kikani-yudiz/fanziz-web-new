"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
return (
    <div className="p-2.5 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 w-[44px] h-[44px]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2.5 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-primary-500 dark:text-accent-yellow hover:bg-neutral-992 dark:hover:bg-neutral-75 transition-colors"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
