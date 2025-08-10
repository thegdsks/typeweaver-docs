import type { Metadata } from "next";
import { getAbsoluteUrl } from "./config";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  authors?: string[];
}

/**
 * Generate comprehensive SEO metadata for pages
 */
export function generateSEO({
  title,
  description = "Professional development tools and comprehensive documentation for modern workflows. CommitWeave, Glin-Profanity, and more by Glincker LLC.",
  path = "",
  image = "/glinr-logo.png",
  type = "website",
  publishedTime,
  modifiedTime,
  tags = [],
  authors = ["Glincker LLC"],
}: SEOProps): Metadata {
  // If title already includes tool branding (contains |), use as-is
  // Otherwise, add the default template
  const fullTitle =
    title && title.includes("|")
      ? title
      : title
      ? `${title} | TypeWeaver | GLINR Studio`
      : "TypeWeaver | GLINR Studio";

  const url = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl(image);

  // Combine default tags with page-specific tags
  const allTags = [
    "TypeWeaver",
    "GLINR Studio",
    "Glincker LLC",
    "development tools",
    "developer productivity",
    ...tags,
  ];

  return {
    title: fullTitle,
    description,
    keywords: allTags,
    authors: authors.map((name) => ({ name })),
    creator: "Glincker LLC",
    publisher: "GLINR Studio",

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // Open Graph
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: "TypeWeaver | GLINR Studio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "TypeWeaver | GLINR Studio - Professional Development Tools",
        },
      ],
      locale: "en_US",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@glincker",
      site: "@typeweaver",
    },

    // Additional metadata
    category: "Technology",
    classification: "Developer Tools",

    // Robots
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

    // Verification (add your verification codes)
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

/**
 * Generate JSON-LD structured data for documentation
 */
export function generateDocumentationStructuredData({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const url = getAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "TechnicalArticle",
    headline: title,
    description,
    url,
    author: {
      "@type": "Organization",
      name: "Glincker LLC",
      url: "https://glincker.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GLINR Studio",
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/glinr-logo.png"),
      },
    },
    datePublished: publishedTime || new Date().toISOString(),
    dateModified: modifiedTime || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: getAbsoluteUrl("/glinr-logo.png"),
    articleSection: "Documentation",
    genre: "Technology",
    keywords:
      "development tools, git commits, developer productivity, documentation",
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.url),
    })),
  };
}
