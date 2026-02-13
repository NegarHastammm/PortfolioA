import type { Metadata } from "next";

import "./globals.css";

import { LanguageProvider } from "./Context/LanguageContext";
import Header from "./ui/Header";
import { ThemeProvider } from "./components/providers";


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
          <ThemeProvider
              attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
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
