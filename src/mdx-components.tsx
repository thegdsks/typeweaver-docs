import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import * as StepsComponents from 'fumadocs-ui/components/steps';
import * as AccordionComponents from 'fumadocs-ui/components/accordion';
import * as FilesComponents from 'fumadocs-ui/components/files';
import * as CardsComponents from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { TeamStandardConfig, OpenSourceConfig, EnterpriseConfig, OfflineAIConfig } from '@/components/simple-config-tabs';
import { CommitWeaveArchitecture } from '@/components/architecture-diagram';
import { EnhancedOverview } from '@/components/enhanced-overview';
import { GlinProfanityOverview } from '@/components/glin-profanity-overview';
import { CommitWeaveRoadmap } from '@/components/roadmap';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...StepsComponents,
    ...AccordionComponents,
    ...FilesComponents,
    ...CardsComponents,
    Callout,
    InlineTOC,
    TypeTable,
    ImageZoom,
    TeamStandardConfig,
    OpenSourceConfig,
    EnterpriseConfig,
    OfflineAIConfig,
    CommitWeaveArchitecture,
    EnhancedOverview,
    GlinProfanityOverview,
    CommitWeaveRoadmap,
    ...components,
  };
}
