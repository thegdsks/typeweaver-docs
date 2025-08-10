import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
{/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/glinr.svg"
          width="24"
          height="24"
          alt="GLINR Studio Logo"
          className="inline"
        />
        TypeWeaver
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
