"use client";

import { useLanguage } from "../Context/LanguageContext";
import { dictionary } from "../lib/dictionary";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { language } = useLanguage();
  const t = dictionary[language].projects; // فرض بر این است که در دیکشنری بخش projects دارید

  // دیتای نمونه پروژه‌ها (می‌توانید متن‌ها را بر اساس زبان تغییر دهید)
  // اگر دیتای پروژه‌هایتان در فایل دیکشنری نیست، می‌توانید اینجا شرط بگذارید
  const projects = [
    {
      title: language === "en" ? "E-Commerce Platform" : "پلتفرم فروشگاهی",
      description: language === "en" 
        ? "A freont-end e-commerce solution built with Next.js, Stripe, and ."
        : "یک راهکار کامل فروشگاهی که با Next.js،  ساخته شده است.",
      tech: ["Next.js", "TypeScript", "Tailwind", ],
      image: "/project1.jpg", // مسیر عکس را چک کنید
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      title: language === "en" ? "Portfolio Website" : "وب‌سایت شخصی",
      description: language === "en"
        ? "A modern portfolio website with dark mode and multilingual support."
        : "وب‌سایت شخصی مدرن با قابلیت دارک مود و پشتیبانی چندزبانه.",
      tech: ["React", "Next.js", ],
      image: "/project2.jpg", // مسیر عکس را چک کنید
      github: "https://github.com/yourusername/portfolio",
      demo: "https://portfolio-demo.com",
    },
    {
      title: language === "en" ? "Task Manager App" : "اپلیکیشن مدیریت وظایف",
      description: language === "en"
        ? "A productivity app to manage daily tasks efficiently."
        : "یک اپلیکیشن بهره‌وری برای مدیریت کارآمد وظایف روزانه.",
      tech: ["Next", "Tailwind"],
      image: "/project3.jpg", // مسیر عکس را چک کنید
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://taskmanager-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* تیتر بخش */}
        <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            {t.title}
          </h2>
           <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
            {t.description || (language === "en" ? "Here are some of my recent works." : "در اینجا برخی از کارهای اخیر من را مشاهده می‌کنید.")}
          </p>
        </div>

        {/* گرید کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border)]"
            >
              {/* تصویر پروژه */}
              <div className="relative h-48 w-full overflow-hidden">
                {/* 
                   نکته: اگر عکس واقعی ندارید، می‌توانید موقتاً این div رنگی را جایگزین Image کنید:
                   <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">No Image</div>
                */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                    {/* جایگزین موقت عکس */}
                    <span className="text-sm">Project Image</span>
                </div>
              </div>

              {/* محتوای کارت */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* تکنولوژی‌ها */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* لینک‌ها */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
