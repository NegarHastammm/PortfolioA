"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext"; // مسیر ایمپورت را چک کنید

export default function Contact() {
  // استفاده از هوک زبان (طبق کانتکست استاندارد)
  const { t, dir } = useLanguage();
  
  // اگر دیکشنری را دستی ایمپورت می‌کنید، خط بالا را پاک کنید و مثل About بنویسید:
  // const { language, dir } = useLanguage();
  // const t = dictionary[language].contact;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // تغییر کلیدی 1: استفاده از var(--background) برای هماهنگی با About
    <section id="contact" className="py-20 bg-[var(--background)] transition-colors duration-300" dir={dir}>
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* تغییر کلیدی 2: استفاده از var(--foreground) */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            {t.contact?.title || "Get In Touch"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact?.title || "Have a project in mind? Let's talk."}
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* اطلاعات تماس */}
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: <Mail />, title: "Email", text: "negaar.shnh22781@gmail.com" },
              { icon: <Phone />, title: "Phone", text: "+98 912 964 4820" },
              { icon: <MapPin />, title: "Location", text: "Tehran, Iran" }
            ].map((item, index) => (
              <div 
                key={index}
                // تغییر کلیدی 3: استفاده از var(--card) و var(--border) مثل مهارت‌های About
                className="flex items-center gap-4 p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* فرم تماس */}
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // تغییر کلیدی 4: پس‌زمینه کارت فرم
            className="bg-[var(--card)] p-8 rounded-3xl shadow-lg border border-[var(--border)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ورودی نام */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {t.contact?.nameLabel || "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  // تغییر کلیدی 5: اینپوت‌ها. استفاده از bg-[var(--background)] برای تمایز از کارت
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* ورودی ایمیل */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {t.contact?.emailLabel || "Email"}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* ورودی پیام */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {t.contact?. successMessage || "Message"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  status === "success" 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
                }`}
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    {t.contact?.sendButton || "Send Message"} <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
