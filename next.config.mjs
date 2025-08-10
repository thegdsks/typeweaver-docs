import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // Environment variables available to client-side code
  env: {
    CUSTOM_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002',
    CUSTOM_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3002',
  },

  // Asset prefix for proxy support - assets load from the docs deployment
  // even when accessed via typeweaver.com/docs proxy
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://docs.typeweaver.com' : undefined,
  
  images: {
    unoptimized: true,
  },

  // Rewrites to support PostHog API endpoints
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/flags',
        destination: 'https://us.i.posthog.com/flags',
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    poweredByHeader: false,
    
    // Headers for security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
      ];
    },
  }),
};

export default withMDX(config);