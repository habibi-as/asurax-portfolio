import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASURAX Studios - Cyber Security Engineer | Game Designer | AI Innovator",
  description: "Professional portfolio of Habibi S - Cyber Security Engineer, Game Designer, and AI Innovator. Explore my projects, skills, and achievements in technology and design.",
  keywords: "cyber security, game design, AI, portfolio, Habibi S, ASURAX Studios, technology, innovation",
  authors: [{ name: "Habibi S", url: "https://github.com/asurax1983" }],
  creator: "ASURAX Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asurax.netlify.app",
    title: "ASURAX Studios - Cyber Security Engineer | Game Designer | AI Innovator",
    description: "Professional portfolio showcasing innovative projects in cyber security, game design, and AI development.",
    siteName: "ASURAX Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASURAX Studios - Cyber Security Engineer | Game Designer | AI Innovator",
    description: "Professional portfolio showcasing innovative projects in cyber security, game design, and AI development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-bg`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
