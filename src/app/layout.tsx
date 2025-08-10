import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { config, getAbsoluteUrl } from "@/lib/config";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default:
      "TypeWeaver | Professional Dev Tools - ML Profanity Detection & AI Commits",
    template: "%s | TypeWeaver by Glincker",
  },
  description:
    "Open-source developer tools: Glin-Profanity v3.0 with ML-powered toxicity detection (21M+ ops/sec, 23 languages), CommitWeave for AI-powered Git commits. Built by Glincker LLC.",
  applicationName: "TypeWeaver",
  keywords: [
    // Primary brand
    "TypeWeaver",
    "Glincker LLC",
    "GLINR Studio",
    // Glin-Profanity specific
    "Glin-Profanity",
    "profanity filter",
    "profanity detection",
    "content moderation",
    "ML toxicity detection",
    "TensorFlow.js",
    "machine learning profanity",
    "leetspeak detection",
    "Unicode normalization",
    "multi-language profanity filter",
    "bad word filter",
    "content filtering API",
    "React profanity hook",
    // CommitWeave specific
    "CommitWeave",
    "AI commits",
    "conventional commits",
    "git commit generator",
    "intelligent commits",
    // General dev tools
    "open source",
    "developer tools",
    "npm package",
    "TypeScript",
    "Node.js",
    "VS Code extension",
    "CLI tools",
    "developer productivity",
    "GitHub integration",
  ],
  authors: [
    { name: "Glincker LLC", url: "https://glincker.com" },
    { name: "thegdsks", url: "https://thegdsks.com" },
  ],
  creator: "Glincker LLC",
  publisher: "Glincker LLC",
  category: "Technology",
  classification: "Developer Tools & Libraries",

  // OpenGraph - Optimized for LinkedIn, Facebook, Discord
  openGraph: {
    type: "website",
    url: config.baseUrl,
    siteName: "TypeWeaver by Glincker",
    title: "TypeWeaver | ML-Powered Profanity Detection & AI Dev Tools",
    description:
      "Open-source developer tools: Glin-Profanity v3.0 with ML toxicity detection (21M+ ops/sec), CommitWeave for AI commits. 23 languages supported. MIT licensed.",
    locale: "en_US",
    countryName: "United States",
    images: [
      {
        url: getAbsoluteUrl("assets/og-image.png"),
        width: 1200,
        height: 630,
        alt: "TypeWeaver - Professional Tools for Modern Dev: ML Profanity Detection, AI Commits",
        type: "image/png",
        secureUrl: getAbsoluteUrl("assets/og-image.png"),
      },
      {
        url: getAbsoluteUrl("glinr-logo.png"),
        width: 512,
        height: 512,
        alt: "TypeWeaver Logo",
        type: "image/png",
      },
    ],
    emails: ["contact@glincker.com"],
  },

  // Twitter Card - Large image for better visibility
  twitter: {
    card: "summary_large_image",
    site: "@glincker",
    creator: "@thegdsks",
    title: "TypeWeaver | ML Profanity Detection & AI Dev Tools",
    description:
      "Open-source dev tools: Glin-Profanity v3.0 with ML toxicity detection (21M+ ops/sec, 23 languages), CommitWeave for AI commits. MIT licensed.",
    images: {
      url: getAbsoluteUrl("assets/og-image.png"),
      alt: "TypeWeaver - Professional Dev Tools by Glincker",
    },
  },

  // App-specific metadata
  appleWebApp: {
    capable: true,
    title: "TypeWeaver",
    statusBarStyle: "black-translucent",
  },

  // Enhanced icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    other: [{ rel: "mask-icon", url: "/glinr.svg", color: "#8B5CF6" }],
  },

  manifest: "/site.webmanifest",

  // Robots and indexing - Maximum visibility
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Language and alternates
  alternates: {
    canonical: config.baseUrl,
    languages: {
      "en-US": config.baseUrl,
      "x-default": config.baseUrl,
    },
  },

  // Additional metadata for various platforms
  other: {
    // Search engine verification
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
    "msvalidate.01": process.env.BING_SITE_VERIFICATION || "",
    "yandex-verification": process.env.YANDEX_SITE_VERIFICATION || "",
    // Theme and appearance
    "theme-color": "#8B5CF6",
    "color-scheme": "dark light",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-navbutton-color": "#8B5CF6",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    // Mobile
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    // LinkedIn specific
    "linkedin:owner": "glincker",
    // Article info
    "article:publisher": "https://glincker.com",
    "article:author": "Glincker LLC",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glincker LLC",
    alternateName: "TypeWeaver",
    url: "https://glincker.com",
    logo: getAbsoluteUrl("glinr-logo.png"),
    sameAs: [
      "https://github.com/glincker",
      "https://github.com/thegdsks",
      "https://twitter.com/glincker",
      "https://www.linkedin.com/company/glincker",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@glincker.com",
      contactType: "customer service",
    },
  };

  // Website schema with search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TypeWeaver",
    alternateName: "TypeWeaver by Glincker",
    url: config.baseUrl,
    description: "Open-source developer tools documentation by Glincker LLC",
    publisher: {
      "@type": "Organization",
      name: "Glincker LLC",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.baseUrl}/docs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Software Application schema for Glin-Profanity
  const glinProfanitySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glin-Profanity",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "ML-powered profanity detection with TensorFlow.js toxicity analysis, leetspeak detection, and 23 language support",
    softwareVersion: "3.1.0",
    author: {
      "@type": "Organization",
      name: "Glincker LLC",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "ML toxicity detection with TensorFlow.js",
      "Leetspeak and Unicode normalization",
      "23 language support",
      "21M+ operations per second",
      "React hook included",
      "TypeScript support",
    ],
  };

  // Combined schema graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, glinProfanitySchema],
  };

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Structured Data for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//npmjs.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        <PostHogProvider>
          <RootProvider>{children}</RootProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
