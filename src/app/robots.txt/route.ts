import { config } from "@/lib/config";

export async function GET() {
  const robotsTxt = `# Robots.txt for TypeWeaver | GLINR Studio
# https://typweaver.com

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Block AI crawlers and training bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User  
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

# Sitemap
Sitemap: ${config.baseUrl}/sitemap.xml
Sitemap: ${config.baseUrl}/sitemap-0.xml

# Crawl delay for bots
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
