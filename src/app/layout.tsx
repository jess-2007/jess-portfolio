import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jess | Full-Stack Developer",
  description:
    "Professional portfolio of Jess, a full-stack developer specializing in Java, Spring Boot, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
