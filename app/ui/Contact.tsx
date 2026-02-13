"use client";

import React, { useState } from "react";
// اگر ارور Module not found دارید، خط زیر را به ../../context/LanguageContext تغییر دهید
import { useLanguage } from "../Context/LanguageContext";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const { t, language } = useLanguage();
  
  // استیت‌های فرم
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // هندل کردن تغییر فیلدها
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // شبیه‌سازی ارسال فرم (چون بک‌اند نداریم)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // بعد از 2 ثانیه پیام موفقیت نشان می‌دهد
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // بعد از 3 ثانیه دکمه به حالت اول برمی‌گردد
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* هدر بخش تماس */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* ستون اطلاعات تماس */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {language === 'fa' ? 'راه‌های ارتباطی' : 'Get in Touch'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'fa' 
                ? 'من همیشه مشتاق شنیدن نظرات شما یا بحث درباره پروژه‌های جدید هستم. از طریق فرم یا شبکه‌های اجتماعی با من در ارتباط باشید.'
                : 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.'}
            </p>

            {/* کارت ایمیل */}
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a href="mailto:your.email@example.com" className="text-gray-800 dark:text-white font-medium hover:text-blue-600 transition">
                  your.email@example.com
                </a>
              </div>
            </div>

            {/* آیکون‌های شبکه اجتماعی */}
            <div className="flex gap-4 mt-6">
              <SocialLink href="https://github.com" icon={<FaGithub />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
            </div>
          </div>

          {/* ستون فرم تماس */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* فیلد نام */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.title}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white"
                />
              </div>

              {/* فیلد ایمیل */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white"
                />
              </div>

              {/* فیلد پیام */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.messageLabel || "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-[1.02]
                  ${status === "success" 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "submitting" 
                  ? (language === 'fa' ? "در حال ارسال..." : "Sending...") 
                  : status === "success" 
                    ? (language === 'fa' ? "پیام ارسال شد ✓" : "Message Sent ✓")
                    : t.contact. successMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// کامپوننت کمکی برای آیکون‌های اجتماعی
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
