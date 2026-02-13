
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "light" ? (
          <Sun size={20} className="text-orange-500" />
        ) : (
          <Moon size={20} className="text-indigo-400" />
        )}
      </motion.div>
    </button>
  );
}
