import { config } from "@/lib/config";

// WebSite search action schema endpoint
export async function GET() {
  const websiteSearchData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TypeWeaver | GLINR Studio",
    url: config.baseUrl,
    description:
      "Professional development tools and comprehensive documentation for modern workflows.",
    publisher: {
      "@type": "Organization",
      name: "Glincker LLC",
      url: "https://github.com/glincker",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    sameAs: ["https://github.com/glincker", "https://twitter.com/glincker"],
  };

  return new Response(JSON.stringify(websiteSearchData, null, 2), {
    headers: {
      "Content-Type": "application/ld+json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
