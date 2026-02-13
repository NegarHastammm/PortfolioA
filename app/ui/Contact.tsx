"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // شبیه‌سازی ارسال فرم (بعداً می‌توانید به API واقعی وصل کنید)
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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* هدر بخش */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.contact?.title || "Get In Touch"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.contact?.title || "Have a project in mind or want to say hi? Feel free to send me a message."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* اطلاعات تماس */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* کارت ایمیل */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all group">
              <div className="p-3 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">negaar.shnh22781@gmail.com</p>
              </div>
            </div>

            {/* کارت تلفن */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all group">
              <div className="p-3 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400">+98 912 345 6789</p>
              </div>
            </div>

            {/* کارت موقعیت */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all group">
              <div className="p-3 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Tehran, Iran</p>
              </div>
            </div>
          </motion.div>

          {/* فرم تماس */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ورودی نام */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact?.nameLabel || "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* ورودی ایمیل */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact?.emailLabel || "Email"}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* ورودی پیام */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact?. successMessage || "Message"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  status === "success" 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
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
