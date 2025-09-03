import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Singh - Frontend Developer Portfolio",
  description: "Portfolio of Suman Singh, a frontend developer with 5+ years of experience in React, Next.js, and modern web development. Explore projects, skills, and achievements.",
  keywords: ["Suman Singh", "frontend developer", "React", "Next.js", "JavaScript", "TypeScript", "portfolio", "web developer", "UI developer"],
  authors: [{ name: "Suman Singh" }],
  creator: "Suman Singh",
  publisher: "Suman Singh",
  
  // Open Graph / Facebook
  openGraph: {
    title: "Suman Singh - Frontend Developer Portfolio",
    description: "Explore the projects and skills of Suman Singh, frontend developer with 5+ years of experience in React, Next.js, and modern web apps.",
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
    title: "Suman Singh - Frontend Developer Portfolio",
    description: "Explore the projects and skills of Suman Singh, frontend developer with 5+ years of experience.",
    images: ["https://bulbul-suman-portfolio.netlify.app/preview.png"],
    creator: "@suman_singh",
    site: "@suman_singh",
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
  
  // Verification
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  // Viewport and mobile
  viewport: "width=device-width, initial-scale=1.0",
  
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
              "jobTitle": "Frontend Developer",
              "description": "Frontend developer with 5+ years of experience in React, Next.js, and modern web development",
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
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "India"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
