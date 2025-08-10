"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

type RoadmapStatus = "completed" | "inProgress" | "planned" | "ideas";

interface RoadmapItemProps {
  title: string;
  description: string;
  status: RoadmapStatus;
  quarter?: string;
  density?: "compact" | "cozy";
  onClick?: () => void;
}

interface RoadmapComponentProps {
  items: RoadmapItemProps[];
}

const STATUS_CONFIG = {
  completed: {
    icon: CheckCircle,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950",
    border: "border-green-200 dark:border-green-800",
    ring: "ring-green-200 dark:ring-green-900/50",
    statusText: "Shipped",
    statusTextColor: "text-green-700 dark:text-green-300",
    accent: "bg-green-500/80",
  },
  inProgress: {
    icon: Clock,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-200 dark:border-blue-800",
    ring: "ring-blue-200 dark:ring-blue-900/50",
    statusText: "In progress",
    statusTextColor: "text-blue-700 dark:text-blue-300",
    accent: "bg-blue-500/80",
  },
  planned: {
    icon: Target,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950",
    border: "border-orange-200 dark:border-orange-800",
    ring: "ring-orange-200 dark:ring-orange-900/50",
    statusText: "Planned",
    statusTextColor: "text-orange-700 dark:text-orange-300",
    accent: "bg-orange-500/80",
  },
  ideas: {
    icon: Lightbulb,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950",
    border: "border-purple-200 dark:border-purple-800",
    ring: "ring-purple-200 dark:ring-purple-900/50",
    statusText: "Ideas",
    statusTextColor: "text-purple-700 dark:text-purple-300",
    accent: "bg-purple-500/80",
  },
} as const;

function RoadmapItem({
  title,
  description,
  status,
  quarter,
  density = "compact",
  onClick,
}: RoadmapItemProps) {
  const cfg = STATUS_CONFIG[status];

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : -1}
      className={clsx(
        "group relative overflow-hidden rounded-md border transition",
        cfg.bg,
        cfg.border,
        density === "compact" ? "p-3" : "p-4",
        onClick &&
          "cursor-pointer hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0",
        onClick && cfg.ring
      )}
    >
      {/* left accent */}
      <span
        aria-hidden
        className={clsx(
          "absolute left-0 top-0 h-full w-0.5 rounded-r",
          cfg.accent
        )}
      />

      {/* content */}
      <div className="min-w-0">
        {/* top row: icon + title + quarter */}
        <div className="flex items-center gap-1.5 min-w-0">
          <h3
            className={clsx(
              "flex-1 min-w-0 truncate font-medium text-fd-foreground",
              density === "compact"
                ? "text-sm leading-tight"
                : "text-base leading-tight"
            )}
            title={title}
          >
            {title}
          </h3>

          <div className="ml-2 flex items-center gap-2 shrink-0">
            {quarter && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-fd-muted text-fd-muted-foreground text-[10px] md:text-xs">
                {quarter}
              </span>
            )}
          </div>
        </div>

        {/* description */}
        {description && (
          <p
            className={clsx(
              "mt-1 text-fd-muted-foreground",
              density === "compact"
                ? "text-xs leading-snug"
                : "text-sm leading-relaxed",
              "line-clamp-2 md:line-clamp-3"
            )}
            title={description}
          >
            {description}
          </p>
        )}

        {/* status */}
        <div
          className={clsx(
            "mt-1 flex items-center gap-1.5 text-xs font-medium",
            cfg.statusTextColor
          )}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />
          {cfg.statusText}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon: Icon,
  iconClass,
  children,
  count,
  defaultExpanded = true,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClass: string;
  children: React.ReactNode;
  count: number;
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left hover:opacity-80 transition-opacity"
      >
        <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-fd-muted-foreground" />
          ) : (
            <ChevronRight className="w-4 h-4 text-fd-muted-foreground" />
          )}
          <Icon className={clsx("w-5 h-5", iconClass)} />
          {title}
          <span className="text-xs px-2 py-1 bg-fd-muted rounded-full text-fd-muted-foreground ml-2">
            {count}
          </span>
        </h2>
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
          {children}
        </div>
      )}
    </section>
  );
}

export const CommitWeaveRoadmap: React.FC<RoadmapComponentProps> = ({
  items,
}) => {
  const groups: Record<RoadmapStatus, RoadmapItemProps[]> = {
    completed: [],
    inProgress: [],
    planned: [],
    ideas: [],
  };
  for (const it of items) groups[it.status].push(it);

  return (
    <div className="space-y-6">
      {groups.completed.length > 0 && (
        <Section
          title="Shipped ✅"
          icon={CheckCircle}
          iconClass="text-green-600 dark:text-green-400"
          count={groups.completed.length}
          defaultExpanded={false}
        >
          {groups.completed.map((it, i) => (
            <RoadmapItem key={`completed-${i}`} {...it} density="compact" />
          ))}
        </Section>
      )}

      {groups.inProgress.length > 0 && (
        <Section
          title="Building 🔧"
          icon={Clock}
          iconClass="text-blue-600 dark:text-blue-400"
          count={groups.inProgress.length}
          defaultExpanded={true}
        >
          {groups.inProgress.map((it, i) => (
            <RoadmapItem key={`progress-${i}`} {...it} density="compact" />
          ))}
        </Section>
      )}

      {groups.planned.length > 0 && (
        <Section
          title="Planned 🎯"
          icon={Target}
          iconClass="text-orange-600 dark:text-orange-400"
          count={groups.planned.length}
          defaultExpanded={true}
        >
          {groups.planned.map((it, i) => (
            <RoadmapItem key={`planned-${i}`} {...it} density="compact" />
          ))}
        </Section>
      )}

      {groups.ideas.length > 0 && (
        <Section
          title="Ideas 💡"
          icon={Lightbulb}
          iconClass="text-purple-600 dark:text-purple-400"
          count={groups.ideas.length}
          defaultExpanded={false}
        >
          {groups.ideas.map((it, i) => (
            <RoadmapItem key={`ideas-${i}`} {...it} density="compact" />
          ))}
        </Section>
      )}
    </div>
  );
};

// Real data from CLAUDE.md - actual features implemented and planned
export const CommitWeaveRoadmapData: RoadmapItemProps[] = [
  // ✅ Shipped Features (from CLAUDE.md "Implemented Features")
  {
    title: "Interactive CLI with Beautiful UI",
    description:
      "23ms cold-start, animations, branding, ASCII art, and progress indicators",
    status: "completed",
  },
  {
    title: "Conventional Commits Support",
    description:
      "Full support with 11 predefined types (feat ✨, fix 🐛, docs 📚, etc.)",
    status: "completed",
  },
  {
    title: "Multi-AI Provider Integration",
    description:
      "OpenAI GPT, Anthropic Claude, Mock provider with graceful fallback",
    status: "completed",
  },
  {
    title: "Smart Emoji Integration",
    description: "Type-specific emoji integration with toggle support",
    status: "completed",
  },
  {
    title: "Advanced Configuration System",
    description:
      "JSON config with Zod validation, export/import, versioning, health checks",
    status: "completed",
  },
  {
    title: "VS Code Extension (Full)",
    description:
      "5 commands, settings panel, quick commit, validation, git integration",
    status: "completed",
  },
  {
    title: "Git Operations & Validation",
    description:
      "Automatic staging, committing, status checking, commit validation",
    status: "completed",
  },
  {
    title: "Enhanced UX Features",
    description:
      "Command shortcuts, enhanced error messages, diff analysis, UI config",
    status: "completed",
  },
  {
    title: "Performance Optimizations",
    description:
      "Ultra-fast 23ms startup, lazy loading, performance tracking, benchmarking",
    status: "completed",
  },
  {
    title: "Cross-Platform Support",
    description:
      "macOS, Windows, Linux with npm/yarn/pnpm, shell compatibility tested",
    status: "completed",
  },
  {
    title: "Comprehensive Testing Suite",
    description:
      "Platform compatibility, AI functionality, fallback testing, performance validation",
    status: "completed",
  },

  // 🔧 Currently Building (from Known Issues & Limitations)
  {
    title: "Git Hooks System",
    description: "Pre-commit and post-commit hooks with custom templates",
    status: "inProgress",
  },
  {
    title: "Plugin System",
    description: "Custom commit types and extensible plugin architecture",
    status: "inProgress",
  },

  // 🎯 Planned Features (from Future Roadmap Ideas)
  {
    title: "Multi-Repository Support",
    description: "Work with multiple repositories simultaneously",
    status: "planned",
  },
  {
    title: "Web-Based Configuration Builder",
    description: "Visual configuration builder with team templates",
    status: "planned",
  },
  {
    title: "Enhanced AI Providers",
    description: "Google PaLM, local models, and custom AI provider support",
    status: "planned",
  },
  {
    title: "Analytics & Usage Metrics",
    description: "Commit pattern analytics and team productivity insights",
    status: "planned",
  },
  {
    title: "Issue Tracker Integration",
    description: "Integration with GitHub Issues, Linear, Jira, Asana",
    status: "planned",
  },
  {
    title: "JetBrains IDEs Extension",
    description: "IntelliJ IDEA, WebStorm, PyCharm plugin support",
    status: "planned",
  },

  // 💡 Future Ideas (from Future Roadmap Ideas)
  {
    title: "Configuration Templates for Frameworks",
    description: "Pre-built configs for React, Vue, Angular, Express, etc.",
    status: "ideas",
  },
  {
    title: "Automated Configuration Backup",
    description: "Cloud sync and backup of configurations across devices",
    status: "ideas",
  },
  {
    title: "Sublime Text Extension",
    description: "CommitWeave integration for Sublime Text editor",
    status: "ideas",
  },
  {
    title: "Browser Extension",
    description: "GitHub, GitLab, Bitbucket web interface integration",
    status: "ideas",
  },
  {
    title: "Mobile App",
    description: "iOS and Android app for on-the-go repository management",
    status: "ideas",
  },
  {
    title: "Team Collaboration Features",
    description:
      "Shared commit templates, team analytics, and workflow optimization",
    status: "ideas",
  },
];
