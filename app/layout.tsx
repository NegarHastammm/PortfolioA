import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./Context/ThemeContext";
import { LanguageProvider } from "./Context/LanguageContext";
import Header from "./ui/Header";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen pt-24">
              {children}
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
