import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bulbul-suman-portfolio.netlify.app"),
  title: "Suman Singh - Senior Software Engineer | React & Next.js Developer",
  description: "Portfolio of Suman Singh, a senior software engineer with 6+ years of experience in React, Next.js, and modern web development. Explore projects, skills, and achievements.",
  keywords: ["Suman Singh", "frontend developer", "senior software engineer", "React developer", "Next.js developer", "JavaScript", "TypeScript", "portfolio", "web developer", "UI developer", "Bangalore"],
  authors: [{ name: "Suman Singh" }],
  creator: "Suman Singh",
  publisher: "Suman Singh",
  
  // Open Graph / Facebook
  openGraph: {
    title: "Suman Singh - Senior Software Engineer | React & Next.js Developer",
    description: "Explore the projects and skills of Suman Singh, senior software engineer with 6+ years of experience in React, Next.js, and modern web apps.",
    url: "https://bulbul-suman-portfolio.netlify.app/",
    siteName: "Suman Singh Portfolio",
    images: [
      {
        url: "https://bulbul-suman-portfolio.netlify.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Suman Singh - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Suman Singh - Senior Software Engineer | React & Next.js Developer",
    description: "Explore the projects and skills of Suman Singh, senior software engineer with 6+ years of experience.",
    images: ["https://bulbul-suman-portfolio.netlify.app/preview.png"],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification — uncomment and add your real Google Search Console code:
  // verification: {
  //   google: "your-google-verification-code",
  // },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  // Viewport and mobile - moved to separate export
  
  // Canonical URL
  alternates: {
    canonical: "https://bulbul-suman-portfolio.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Suman Singh",
              "jobTitle": "Senior Software Engineer",
              "description": "Senior software engineer with 6+ years of experience in React, Next.js, and modern web development",
              "url": "https://bulbul-suman-portfolio.netlify.app/",
              "sameAs": [
                "https://github.com/suman7063",
                "https://www.linkedin.com/in/suman-singh-65685b130/"
              ],
              "knowsAbout": [
                "React", "Next.js", "JavaScript", "TypeScript", 
                "Tailwind CSS", "Web Development", "Frontend Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "RideNGo",
                "url": "https://www.ridengo.in/"
              },
              "email": "mailto:suman@ridengo.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "India"
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
