
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionary } from "../lib/dictionary";
export type TranslationType = typeof dictionary.en;
export type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationType;
  dir: "rtl" | "ltr";
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa");

  // تغییر جهت صفحه (RTL/LTR) در تگ HTML
  useEffect(() => {
    const dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    // تغییر فونت بر اساس زبان (اختیاری: برای انگلیسی فونت دیگر، برای فارسی شبنم)
    if (language === "en") {
        document.body.classList.remove("font-shabnam");
        document.body.classList.add("font-sans"); // فونت پیشفرض انگلیسی
    } else {
        document.body.classList.add("font-shabnam");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: dictionary[language],
        dir: language === "fa" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// هوک اختصاصی برای استفاده راحت در کامپوننت‌ها
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
