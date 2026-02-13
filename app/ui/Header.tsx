"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Github, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext";// استفاده از هوک زبان
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage(); // دسترسی به ترجمه‌ها و تابع تغییر زبان

  // جلوگیری از خطای هیدراسیون
  useEffect(() => setMounted(true), []);

  // لیست آیتم‌های منو از دیکشنری خوانده می‌شود
  const menuItems = [
    { title: t.header.home, href: "#home" },
    { title: t.header.projects, href: "#projects" },
    { title: t.header.about, href: "#about" },
    { title: t.header.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* بک‌گراند شیشه‌ای */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" />

      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        
        {/* لوگو */}
        <Link href="/" className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter flex items-center gap-1">
          PORTFOLIO<span className="text-indigo-600">.</span>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* دکمه‌های سمت چپ (دسکتاپ) */}
        <div className="hidden md:flex items-center gap-3">
            
            {/* دکمه زبان */}
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all"
            >
                <Languages size={18} className="text-indigo-600" />
                {language === "fa" ? "English" : "فارسی"}
            </button>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

            {/* دکمه تم */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* دکمه گیت‌هاب */}
            <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
                aria-label="GitHub Profile"
            >
                <Github size={20} />
            </a>
        </div>

        {/* دکمه همبرگری موبایل */}
        <button
          className="md:hidden p-2 text-slate-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* منوی موبایل (ریسپانسیو) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
                {menuItems.map((item, idx) => (
                <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
                >
                    {item.title}
                </Link>
                ))}
                
                {/* ابزارهای موبایل (زبان و تم) */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium"
                    >
                        <Languages size={20} />
                        {language === "fa" ? "تغییر به انگلیسی" : "Switch to Persian"}
                    </button>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400"
                    >
                        {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <ThemeToggle />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}
