import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galang Rizky Arridho | Web Developer & Operations Specialist Portfolio",
  description: "Galang Rizky Arridho - Professional Web Developer from Jakarta specializing in Next.js, Laravel, PHP, and TypeScript. Also experienced in operations management, warehouse management, purchasing, and laser machine operations. Portfolio showcasing web development projects and professional experience.",
  keywords: [
    "Galang Rizky Arridho",
    "Galang Rizky",
    "Rizky Arridho",
    "kydev",
    "kydev tech",
    "Web Developer Jakarta",
    "Full Stack Developer Jakarta",
    "Next.js Developer Indonesia",
    "Laravel Developer Jakarta",
    "PHP Developer Indonesia",
    "TypeScript Developer",
    "Galang Rizky Arridho Portfolio",
    "Galang Rizky Arridho Web Developer",
    "Jakarta Developer",
    "Warehouse Management Jakarta",
    "Operations Management",
    "Purchasing Staff Jakarta",
    "Laser Machine Operator",
    "Frontend Developer Jakarta",
    "Backend Developer Indonesia",
    "Rawamangun Developer",
    "Web Developer Rawamangun"
  ],
  authors: [{ name: "Galang Rizky Arridho", url: "https://www.kydev.my.id" }],
  creator: "Galang Rizky Arridho",
  publisher: "Galang Rizky Arridho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "ja_JP"],
    url: "https://www.kydev.my.id",
    title: "Galang Rizky Arridho | Web Developer & Operations Specialist",
    description: "Galang Rizky Arridho - Professional Web Developer from Jakarta. Portfolio showcasing web development projects using Next.js, Laravel, PHP, and TypeScript.",
    siteName: "Galang Rizky Arridho Portfolio",
    images: [
      {
        url: "https://www.kydev.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galang Rizky Arridho - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galang Rizky Arridho | Web Developer & Operations Specialist",
    description: "Galang Rizky Arridho - Professional Web Developer from Jakarta specializing in Next.js, Laravel, and TypeScript.",
    images: ["https://www.kydev.my.id/og-image.png"],
    creator: "@kylangs12",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.kydev.my.id",
    languages: {
      'id-ID': 'https://www.kydev.my.id',
      'en-US': 'https://www.kydev.my.id/en',
      'ja-JP': 'https://www.kydev.my.id/ja',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href="https://www.kydev.my.id" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Galang Rizky Arridho",
              "url": "https://www.kydev.my.id",
              "image": "https://www.kydev.my.id/profile.jpg",
              "jobTitle": "Web Developer & Operations Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta Timur",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "email": "rizkygalang729@gmail.com",
              "telephone": "+6285714608649",
              "sameAs": [
                "https://github.com/kydev-tech/",
                "https://www.linkedin.com/in/galang-rizky-9a06522a8",
                "https://www.instagram.com/kylangs12"
              ],
              "alumniOf": "Web Development & Operations",
              "knowsAbout": [
                "Web Development",
                "Next.js",
                "Laravel",
                "PHP",
                "TypeScript",
                "MySQL",
                "Warehouse Management",
                "Operations Management",
                "Purchasing",
                "Laser Machine Operations"
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Galang Rizky Arridho Portfolio",
              "url": "https://www.kydev.my.id",
              "description": "Professional portfolio of Galang Rizky Arridho - Web Developer and Operations Specialist",
              "inLanguage": ["id-ID", "en-US", "ja-JP"],
              "author": {
                "@type": "Person",
                "name": "Galang Rizky Arridho"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.kydev.my.id/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.kydev.my.id"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Galang Rizky Arridho",
                  "item": "https://www.kydev.my.id/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Experience",
                  "item": "https://www.kydev.my.id/#experience"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Projects",
                  "item": "https://www.kydev.my.id/#projects"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://www.kydev.my.id/#contact"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Galang Rizky Arridho",
                "alternateName": "kydev",
                "identifier": "galang-rizky-arridho",
                "description": "Web Developer and Operations Specialist from Jakarta",
                "image": "https://www.kydev.my.id/profile.jpg",
                "sameAs": [
                  "https://github.com/kydev-tech/",
                  "https://www.linkedin.com/in/galang-rizky-9a06522a8",
                  "https://www.instagram.com/kylangs12"
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}