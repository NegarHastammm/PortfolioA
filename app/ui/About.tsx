
"use client";

import { useLanguage } from "../Context/LanguageContext";
import { dictionary } from "../lib/dictionary";
import { Code2, Database, Layout, Server } from "lucide-react"; // آیکون‌های نمونه

export default function About() {
  const { language, dir } = useLanguage();
  const t = dictionary[language].about;

  // لیست مهارت‌ها (می‌توانید تغییر دهید)
  const skills = [
    { name: "Frontend", icon: <Layout className="text-blue-500" />, items: "React, Next.js, Tailwind" },

   
    { name: "Tools", icon: <Code2 className="text-orange-500" />, items: "Git" },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--background)]" dir={dir}>
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            {t.title}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ستون متن */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {t.description}
            </p>
            
            <div className="flex gap-8 mt-8">
              <div>
                <span className="block text-3xl font-bold text-blue-600">1+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.experience}</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600">2+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.projectsCompleted}</span>
              </div>
            </div>
          </div>

          {/* ستون مهارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
