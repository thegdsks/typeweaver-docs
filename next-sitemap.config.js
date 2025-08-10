/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://typweaver.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  
  // Exclude these paths from sitemap
  exclude: [
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  
  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/docs'),
    await config.transform(config, '/docs/commitweave'),
    await config.transform(config, '/docs/commitweave/installation'),
    await config.transform(config, '/docs/commitweave/usage'),
    await config.transform(config, '/docs/commitweave/configuration'),
    await config.transform(config, '/docs/commitweave/cli-reference'),
    await config.transform(config, '/docs/commitweave/vscode-extension'),
    await config.transform(config, '/docs/glin-profanity'),
  ],
  
  // Transform function to customize URLs
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' || path === '/docs' ? 'daily' : 'weekly',
      priority: path === '/' || path === '/docs' ? 1.0 : path.includes('/docs/') ? 0.8 : 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://typweaver.com'}/sitemap.xml`,
    ],
  },
}