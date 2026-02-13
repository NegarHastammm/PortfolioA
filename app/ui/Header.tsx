"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Github, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// مسیر ایمپورت را چک کنید. اگر در روت است @/context/... وگرنه نسبی
import { useLanguage } from "../Context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { title: t.nav?.about || "About", href: "#about" }, 
    { title: t.nav?.projects || "Projects", href: "#projects" },
    { title: t.nav?.contact || "Contact", href: "#contact" },
  ];

  return (
    // تغییر ۱: اضافه کردن h-20 به هدر اصلی تا ارتفاع فیکس داشته باشد
    <header className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300">
      
      {/* پس‌زمینه شیشه‌ای */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" />

      <div className="container mx-auto px-6 h-full flex items-center justify-between relative z-10">
        
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
            </Link>
          ))}
        </nav>

        {/* دکمه‌های سمت چپ (دسکتاپ) */}
        <div className="hidden md:flex items-center gap-3">
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all"
            >
                <Languages size={18} className="text-indigo-600" />
                {language === "fa" ? "En" : "Fa"}
            </button>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
                href="https://github.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
            >
                <Github size={20} />
            </a>
        </div>

        {/* دکمه همبرگری موبایل */}
        <button
          className="md:hidden p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            // تغییر ۲: استفاده از absolute top-full برای قرارگیری دقیق زیر هدر
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl md:hidden flex flex-col overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
                {menuItems.map((item, idx) => (
                <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)} // بستن منو با کلیک
                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
                >
                    {item.title}
                </Link>
                ))}
                
                {/* ابزارهای داخل منوی موبایل */}
                <div className="flex items-center justify-between mt-2 pt-4 gap-4">
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsOpen(false);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300 font-medium"
                    >
                        <Languages size={20} />
                        {language === "fa" ? "English" : "فارسی"}
                    </button>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-slate-700 dark:text-slate-300"
                    >
                        {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
