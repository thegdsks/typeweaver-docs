'use client';

import { GitHubLogoIcon, RocketIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';

// Custom sidebar footer component with contextual links
export function SidebarFooter() {
  const pathname = usePathname();
  
  // Determine which tool documentation we're viewing
  const isCommitWeave = pathname?.includes('/commitweave');
  const isGlinProfanity = pathname?.includes('/glin-profanity');
  
  // Always show playground, but show relevant GitHub repo
  const githubUrl = isCommitWeave
    ? "https://github.com/thegdsks/commitweave"
    : isGlinProfanity
      ? "https://github.com/thegdsks/glin-profanity"
      : "https://github.com/thegdsks/typeweaver-docs"; // Default to docs repo
      
  const githubTitle = isCommitWeave
    ? "CommitWeave Repository"
    : isGlinProfanity
      ? "Glin-Profanity Repository"
      : "Documentation Repository";

  return (
    <div className="flex items-center gap-1 p-2">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title={githubTitle}
      >
        <GitHubLogoIcon className="w-4 h-4" />
      </a>
      <a
        href="https://typeweaver.com/tools/glin-profanity"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Glin-Profanity Playground"
      >
        <RocketIcon className="w-4 h-4" />
      </a>
    </div>
  );
}