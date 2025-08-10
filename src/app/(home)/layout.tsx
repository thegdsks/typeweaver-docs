import type { ReactNode } from "react";
import type { Metadata } from "next";
import { config, getAbsoluteUrl } from "@/lib/config";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "TypeWeaver | GLINR Studio - Professional Development Tools",
  description:
    "Open-source developer tools by Glincker LLC. Intelligent commit generation with CommitWeave, ML-powered content moderation with Glin-Profanity, and workflow optimization.",
  openGraph: {
    type: "website",
    url: config.baseUrl,
    siteName: "TypeWeaver | GLINR Studio",
    title: "TypeWeaver | GLINR Studio - Professional Development Tools",
    description:
      "Open-source developer tools including CommitWeave for intelligent Git commits and Glin-Profanity for ML-powered content filtering. Built by Glincker LLC.",
    images: [
      {
        url: getAbsoluteUrl("glinr-logo.png"),
        width: 1200,
        height: 630,
        alt: "TypeWeaver | GLINR Studio - Professional Development Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeWeaver | GLINR Studio - Professional Development Tools",
    description:
      "Open-source developer tools: CommitWeave for intelligent Git commits, Glin-Profanity for ML-powered content moderation.",
    images: [getAbsoluteUrl("glinr-logo.png")],
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glincker LLC",
    alternateName: "GLINR Studio",
    url: config.baseUrl,
    logo: getAbsoluteUrl("/glinr-logo.png"),
    description:
      "Professional development tools and comprehensive documentation for modern workflows. Creators of CommitWeave, Glin-Profanity, and TypeWeaver | GLINR Studio.",
    foundingDate: "2025",
    knowsAbout: [
      "Software Development",
      "Developer Tools",
      "Git Workflow",
      "Content Moderation",
      "AI-Powered Development",
      "Machine Learning",
      "Open Source Software",
    ],
    sameAs: [
      "https://github.com/glincker",
      "https://twitter.com/glincker",
      "https://glincker.com",
    ],
  };

  // Software application structured data
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glin-Profanity",
    description:
      "Multi-language profanity detection with ML-powered toxicity analysis, leetspeak detection, and Unicode normalization.",
    url: `${config.baseUrl}/docs/glin-profanity`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    softwareVersion: "3.1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Glincker LLC",
    },
  };

  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={softwareData} />
      {children}
    </>
  );
}
