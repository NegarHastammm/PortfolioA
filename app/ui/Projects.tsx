"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projects"; // دیتای پروژه‌ها
import { useLanguage } from "../Context/LanguageContext"; // هوک زبان

export default function Projects() {
  const { t, language } = useLanguage(); // دسترسی به ترجمه‌ها و زبان فعلی

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        
        {/* تیتر بخش */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4"
          >
            {t.projects.title}
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        {/* گرید پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              
              {/* تصویر پروژه */}
              <div className="relative h-48 w-full overflow-hidden">
                {/* 
                   نکته: برای تست اگر عکس ندارید، خط زیر را موقتا کامنت کنید و از div رنگی استفاده کنید 
                   <Image src={project.image} alt={project.title[language]} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-4xl">
                    🖼️
                </div>
              </div>

              {/* محتوای کارت */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title[language]}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description[language]}
                </p>

                {/* تکنولوژی‌ها */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* دکمه‌ها */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={18} /> {t.projects.viewCode}
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <ExternalLink size={18} /> {t.projects.viewDemo}
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
