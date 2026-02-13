export const dictionary = {
  en: {
    header: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hello, I'm",
      titleStart: "Front-End",
      titleEnd: "Developer",
      description: "I build accessible, pixel-perfect, and performant web experiences using modern technologies.",
      ctaProjects: "See My Work",
      ctaResume: "Download CV",
    },
    about: {
      title: "About Me",
      description: "I am a passionate developer with a knack for creating elegant solutions in the least amount of time. I love learning new technologies and improving my skills.",
      skillsTitle: "My Skills",
      experience: "Years of Experience",
      projectsCompleted: "Projects Completed",
    },
    projects: {
      title: "My Projects",
      description: "Here are some of the projects I've worked on.",
      viewProject: "View Project",
      sourceCode: "Source Code",
    },
    contact: {
      title: "Get In Touch",
      description: "I'm currently looking for new opportunities, my inbox is always open.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      successMessage: "Message sent successfully!",
    },
  },
  fa: {
    header: {
      home: "خانه",
      about: "درباره من",
      projects: "پروژه‌ها",
      contact: "تماس",
      resume: "رزومه",
    },
    hero: {
      greeting: "سلام، من",
      titleStart: "توسعه‌دهنده",
      titleEnd: "فرانت‌اند هستم",
      description: "من با استفاده از تکنولوژی‌های مدرن، وب‌سایت‌های سریع، زیبا و کارآمد می‌سازم.",
      ctaProjects: "مشاهده نمونه‌کارها",
      ctaResume: "دانلود رزومه",
    },
    about: {
      title: "درباره من",
      description: "من یک توسعه‌دهنده با انگیزه هستم که عاشق حل مسائل پیچیده و یادگیری تکنولوژی‌های جدید وب است.",
      skillsTitle: "مهارت‌های من",
      experience: "سال تجربه",
      projectsCompleted: "پروژه تکمیل شده",
    },
    projects: {
      title: "پروژه‌های من",
      description: "در اینجا می‌توانید برخی از نمونه‌کارهای من را مشاهده کنید.",
      viewProject: "مشاهده پروژه",
      sourceCode: "سورس کد",
    },
    contact: {
      title: "تماس با من",
      description: "من در حال حاضر آماده همکاری در پروژه‌های جدید هستم. خوشحال می‌شم پیام بدید.",
      nameLabel: "نام",
      emailLabel: "ایمیل",
      messageLabel: "پیام",
      sendButton: "ارسال پیام",
      successMessage: "پیام با موفقیت ارسال شد!",
    },
  },
};

// تعریف تایپ برای استفاده در کانتکست (اختیاری ولی مفید برای دیباگ)
export type Dictionary = typeof dictionary.en;
