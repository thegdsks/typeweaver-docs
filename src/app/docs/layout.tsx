import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { LargeSearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      links={[
        {
          type: "icon",
          url: "https://github.com/thegdsks/typeweaver-docs",
          text: "GitHub",
          icon: <GitHubLogoIcon />,
          label: "Documentation Repository",
          external: true,
        },
        {
          type: "icon",
          url: "https://typeweaver.com/tools/glin-profanity",
          text: "Playground",
          icon: <RocketIcon />,
          label: "Glin-Profanity Playground",
          external: true,
        },
      ]}
      searchToggle={{
        components: {
          lg: <LargeSearchToggle />,
        },
      }}
      sidebar={{
        defaultOpenLevel: 0,
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta || !node.icon) return option;

            return {
              ...option,
              icon: (
                <div className="flex items-center justify-center w-6 h-6">
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
