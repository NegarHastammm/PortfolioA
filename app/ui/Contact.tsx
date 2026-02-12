
"use client";

import { useLanguage } from "../Context/LanguageContext";
import { dictionary } from "../lib/dictionary";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { language, dir } = useLanguage();
  const t = dictionary[language].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message feature is a demo for now!");
  };

  return (
    <section id="contact" className="py-20 bg-[var(--background)]" dir={dir}>
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* اطلاعات تماس */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[var(--foreground)]">{t.info.email}</h3>
                <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[var(--foreground)]">{t.info.location}</h3>
                <p className="text-gray-600 dark:text-gray-400">Tehran, Iran</p>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">{t.form.name}</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-[var(--foreground)]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">{t.form.email}</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-[var(--foreground)]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">{t.form.message}</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-[var(--foreground)] resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition active:scale-95"
            >
              <Send size={18} />
              {t.form.btn}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
