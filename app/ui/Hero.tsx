"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, ArrowLeft, Star } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === "fa";

  // واریانت‌های انیمیشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-12 lg:py-0">
      
      {/* 1. پس‌زمینه رنگی (Blob Background) */}
      <div className="absolute top-20 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-40" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* 2. بخش متنی (Text Content) */}
          <motion.div
            className="flex-1 text-center lg:text-start max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* تگ سلام */}
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 font-bold text-sm">
              {t.hero.greeting}
            </motion.div>

            {/* تیتر اصلی */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              {t.hero.title}{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                {t.hero.role}
              </span>
            </motion.h1>

            {/* توضیحات */}
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t.hero.description}
            </motion.p>

            {/* دکمه‌ها */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                {t.hero.ctaProject}
                {isRTL ? <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </a>

              <a
                href="/images/نگار_شاه حسینی-fa-1.pdf"
                className="group w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                {t.hero.ctaResume}
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* 3. بخش تصویر دایره‌ای (Circular Image Section) */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* کانتینر اصلی دایره */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                
                {/* حلقه چرخان تزئینی پشت عکس */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full z-0"
                />

                {/* دایره اصلی عکس */}
                <div className="relative w-full h-full rounded-full border-[6px] border-white dark:border-slate-900 shadow-2xl overflow-hidden z-10 bg-slate-200 dark:bg-slate-800">
                    <Image
                        src="/images/profile.jpg" // مسیر عکس پروفایل
                        alt="Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* کارت شناور (Floating Badge) */}
           

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
