# TypeWeaver Documentation Style Guide

This document defines our comprehensive documentation strategy and design patterns used across the GLINR Studio ecosystem. It serves as a reference for maintaining consistency and quality when creating documentation for new tools.

## Table of Contents

- [Design Philosophy](#design-philosophy)
- [Documentation Architecture](#documentation-architecture)
- [Visual Design Patterns](#visual-design-patterns)
- [Component Usage Guidelines](#component-usage-guidelines)
- [Content Strategy](#content-strategy)
- [Custom Component Patterns](#custom-component-patterns)
- [Cross-Tool Integration](#cross-tool-integration)
- [Implementation Guidelines](#implementation-guidelines)

---

## Design Philosophy

### Core Principles

1. **Professional First** - Every page should feel production-ready and enterprise-grade
2. **Visual Storytelling** - Use progressive disclosure and visual hierarchy to guide users
3. **Interactive Experience** - Prefer interactive components over static text
4. **Context-Aware Design** - Adapt content and examples to user's likely use case
5. **Cross-Platform Consistency** - Maintain identical patterns across all tools
6. **Performance Minded** - Beautiful but efficient - every component should load quickly

### Quality Standards

- **Zero Build Errors** - All documentation must compile cleanly
- **Mobile Responsive** - All components work perfectly on mobile devices
- **Dark Mode Compatible** - Full support for light/dark theme switching
- **Accessibility First** - Proper ARIA labels, keyboard navigation, and screen reader support

---

## Documentation Architecture

### Folder Structure Pattern

Every tool follows the same organized structure for consistency:

```
content/docs/[tool-name]/
├── index.mdx                     # Simple landing page redirect
├── (introduction)/               # Getting started section
│   ├── meta.json                 # defaultOpen: true
│   ├── index.mdx                 # Custom overview component
│   ├── what-is-[tool].mdx        # Vision and purpose
│   └── comparisons.mdx           # vs other tools
├── (setup)/                      # Setup and configuration
│   ├── meta.json                 
│   ├── installation.mdx          # Multi-platform install
│   ├── quickstart.mdx            # 5-minute working examples
│   └── configuration.mdx         # Essential config options
├── (api-reference)/              # Complete API docs
│   ├── meta.json
│   ├── core-functions.mdx        # Primary API methods
│   ├── react-hook.mdx            # React integration (if applicable)
│   ├── filter-class.mdx          # OOP interface (if applicable)
│   └── [language]-api.mdx        # Cross-language APIs
├── (advanced)/                   # Advanced features
│   ├── meta.json
│   ├── [feature-1].mdx           # Major feature deep-dives
│   ├── [feature-2].mdx           # Advanced capabilities
│   └── troubleshooting.mdx       # Common issues
└── meta.json                     # Root tool configuration
```

### Navigation Hierarchy

**Section Organization:**
- **Introduction** (defaultOpen: true) - Overview, vision, comparisons
- **Setup** - Installation, quickstart, basic configuration  
- **API Reference** - Complete method documentation with anchors
- **Advanced** - Deep feature exploration and troubleshooting

---

## Visual Design Patterns

### Getting Started Page Strategy

Every tool's main getting started page (`(introduction)/index.mdx`) follows this proven pattern:

1. **Custom Overview Component** - `<ToolNameOverview />` with rich interactions
2. **Supplementary Content** - Additional context and cross-platform examples
3. **Enterprise Focus** - Production readiness and reliability information

### Color Theme Strategy

Each tool uses consistent color themes throughout their documentation:

**CommitWeave Colors:**
- Primary: Blue/Indigo gradients (`blue-600`, `indigo-400`)
- Accent: Green for success (`emerald-500`, `green-400`) 
- Warning: Purple for highlights (`purple-600`)

**Glin-Profanity Colors:**
- Primary: Purple/Brain themes (`purple-600`, `indigo-400`)
- Accent: Emerald for positive context (`emerald-500`)
- Alert: Red/Green for comparison sections

**Future Tools:**
- Choose a primary color family and stick to it consistently
- Use semantic colors (green=success, red=error, blue=info)
- Maintain gradient backgrounds for premium feel

### Typography Hierarchy

```css
/* Consistent typography patterns */
h1: text-3xl lg:text-4xl font-bold         /* Page titles */
h2: text-2xl font-bold                     /* Section headers */  
h3: text-xl font-bold                      /* Subsection headers */
h4: font-medium                            /* Component titles */

/* Body text */
p: text-fd-muted-foreground leading-relaxed
code: font-mono text-sm                    /* Inline code */
pre: bg-gray-900 text-green-400           /* Code blocks */
```

---

## Component Usage Guidelines

### Required Components Per Page Type

**Getting Started Pages:**
- ✅ Custom overview component (e.g., `<CommitWeaveOverview />`)
- ✅ Hero section with badges and CTAs
- ✅ Navigation cards (4 key pathways)
- ✅ Quick start section with numbered steps
- ✅ Feature showcase grid
- ✅ Before/after or comparison section
- ✅ Core principles grid
- ✅ Next steps CTA section

**Installation Pages:**
- ✅ `<Banner>` component for cross-platform support info
- ✅ `<Tabs>` for package managers (npm, yarn, pnpm, pip, poetry, conda)
- ✅ `<Files>` component showing project structure
- ✅ Framework-specific integration examples
- ✅ Verification steps and troubleshooting

**Quick Start Pages:**
- ✅ Minimal working examples (under 5 minutes)
- ✅ `<Tabs>` for language comparison (JS/TS vs Python)
- ✅ `<CodeBlock>` with copy functionality
- ✅ Progressive complexity (basic → intermediate → advanced)

**API Reference Pages:**
- ✅ Anchor links for every method (`#method-name`)
- ✅ `<Accordions>` for detailed examples
- ✅ Parameter tables (Markdown tables or TypeTable)
- ✅ Return value documentation
- ✅ Cross-references to other API pages

**Advanced Feature Pages:**
- ✅ `<Steps>` component for complex workflows
- ✅ `<Callout>` components for important notes
- ✅ Real-world code examples with explanations
- ✅ Performance metrics and benchmarks

### Fumadocs UI Component Standards

**Always Use These Components:**

```jsx
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';  
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Accordions, Accordion } from 'fumadocs-ui/components/accordion';
import { Files, File, Folder } from 'fumadocs-ui/components/files';
import { TypeTable } from 'fumadocs-ui/components/type-table';
```

**Component Usage Patterns:**

```jsx
// Navigation cards (4 items, consistent icons)
<Cards>
  <Card title="Core API" href="/docs/tool/api" icon="Code" />
  <Card title="Integration" href="/docs/tool/integration" icon="Component" />
  <Card title="Advanced" href="/docs/tool/advanced" icon="Settings" />
  <Card title="Examples" href="/docs/tool/examples" icon="Book" />
</Cards>

// Installation tabs (consistent pattern)
<Tabs items={['npm', 'yarn', 'pnpm']}>
  <Tab value="npm">
    ```bash copy
    npm install tool-name
    ```
  </Tab>
</Tabs>

// Multi-language code examples
<Tabs items={['JavaScript', 'Python']}>
  <Tab value="JavaScript">
    ```javascript copy
    // Working example
    ```
  </Tab>
  <Tab value="Python">  
    ```python copy
    # Equivalent example
    ```
  </Tab>
</Tabs>
```

---

## Content Strategy

### Page Structure Template

Every documentation page follows this structure:

```markdown
---
title: Page Title
description: Brief description for SEO and navigation
---

import { /* Required components */ } from 'fumadocs-ui/components/*';

[Custom component if this is a getting started page]

## Main Content Starts Here

[Body content with progressive disclosure]

### Subsections

[Use consistent heading hierarchy]

## Cross-References

[Links to related pages with context]

---

*Tool Name is part of the [GLINR Studio](/) ecosystem.*
```

### Writing Style Guidelines

**Tone and Voice:**
- **Professional but approachable** - Not overly technical, but precise
- **Action-oriented** - Focus on what users can accomplish
- **Confident** - Assert capabilities without overselling
- **Helpful** - Anticipate questions and provide solutions

**Content Principles:**
- **Show, Don't Tell** - Use working code examples over descriptions
- **Progressive Complexity** - Start simple, build to advanced
- **Cross-Platform Parity** - Always show both JS and Python when applicable
- **Real-World Context** - Use realistic examples, not toy scenarios

### Code Example Standards

**JavaScript/TypeScript Examples:**
```javascript
// ✅ Good: Realistic, working example
import { checkProfanity } from 'glin-profanity';

const result = checkProfanity('User message here', {
  enableContextAware: true,
  languages: ['english', 'spanish']
});

// ❌ Bad: Toy example
const result = checkProfanity('test');
```

**Python Examples:**
```python
# ✅ Good: Snake_case with realistic usage
from glin_profanity import Filter

filter_instance = Filter({
    "enable_context_aware": True,
    "languages": ["english", "spanish"]
})

result = filter_instance.check_profanity("User message here")

# ❌ Bad: Direct translation without Python conventions
result = checkProfanity("test")
```

---

## Custom Component Patterns

### Overview Component Strategy

Every major tool should have a custom overview component following this pattern:

**File Location:** `/src/components/[tool-name]-overview.tsx`

**Required Sections:**
1. **Hero Section** - Badge, title, description, dual CTAs
2. **Navigation Cards** - 4 key pathways with icons  
3. **Feature Demo** - Interactive demonstration of key capability
4. **Quick Start** - 3-step process with commands
5. **Feature Grid** - 6 key features with descriptions
6. **Use Cases** - Industry-specific applications
7. **Core Principles** - 6 foundational concepts
8. **Next Steps** - 4 CTA cards for deeper documentation

**Visual Pattern:**
- **Gradient Backgrounds** - Different color themes per section
- **Hover Effects** - Scale, translate, and color transitions
- **Icon Integration** - Lucide React icons throughout
- **Responsive Grids** - Mobile-friendly layouts
- **Professional Spacing** - Consistent padding and margins

### Component Registration

Add every custom component to `/src/mdx-components.tsx`:

```tsx
import { ToolNameOverview } from '@/components/tool-name-overview';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    // ... other components
    ToolNameOverview,
    ...components,
  };
}
```

---

## Cross-Tool Integration

### Ecosystem Messaging

Every tool documentation should reference the broader GLINR Studio ecosystem:

**Footer Pattern:**
```markdown
---

*[Tool Name] is part of the [GLINR Studio](/) ecosystem, bringing [specific value] with the same attention to quality and developer experience as our other tools like [CommitWeave](/docs/commitweave).*
```

**Cross-Tool Callouts:**
```jsx
<Callout type="info">
**Cross-Tool Integration**: Works seamlessly with [CommitWeave](/docs/commitweave) to keep your entire development workflow professional and team-friendly.
</Callout>
```

### Navigation Integration

Tools should cross-reference each other contextually:

- **CommitWeave** → Glin-Profanity for commit message filtering
- **Glin-Profanity** → CommitWeave for professional workflows
- **Future Tools** → Existing tools where relevant

### Branding Consistency

**Company Information:**
- **Brand**: GLINR Studio
- **Publisher**: TypeWeaver  
- **Organization**: Glincker LLC
- **Domain**: typeweaver.com
- **Ecosystem**: Professional developer tools

---

## Implementation Guidelines

### Development Workflow

1. **Planning Phase**
   - Review this style guide
   - Identify tool's unique value proposition
   - Plan custom component features
   - Design color theme and visual identity

2. **Structure Phase**
   - Create folder structure following the pattern
   - Set up meta.json files with proper navigation
   - Plan section organization and page hierarchy

3. **Content Phase**
   - Write getting started page content
   - Create custom overview component
   - Develop API documentation with anchors
   - Build advanced feature pages

4. **Integration Phase**
   - Register components in mdx-components.tsx
   - Add cross-tool references
   - Implement ecosystem messaging
   - Test all internal links

5. **Quality Phase**
   - Test build compilation (zero errors required)
   - Verify mobile responsiveness  
   - Check dark mode compatibility
   - Validate accessibility standards

### Testing Checklist

Before considering documentation complete:

- [ ] **Build Success** - `npm run build` completes without errors
- [ ] **Mobile Responsive** - All components work on mobile devices
- [ ] **Dark Mode** - Components render correctly in dark theme
- [ ] **Internal Links** - All cross-references work correctly
- [ ] **Code Examples** - All examples are tested and working
- [ ] **Component Registration** - Custom components available in MDX
- [ ] **SEO Metadata** - All pages have proper titles and descriptions
- [ ] **Ecosystem Integration** - Cross-tool references and branding

### Performance Guidelines

- **Component Efficiency** - Custom components should be client-side optimized
- **Image Optimization** - Use appropriate formats and sizes
- **Code Splitting** - Large components should be lazy-loaded when possible
- **Bundle Size** - Monitor impact on overall documentation bundle

---

## Examples and References

### Successful Implementations

**CommitWeave (`EnhancedOverview`):**
- ✅ Sophisticated hero section with dual CTAs
- ✅ Interactive architecture diagram  
- ✅ Before/after commit message comparison
- ✅ 3-step quick start with terminal commands
- ✅ 6 key features with hover effects
- ✅ Core principles grid
- ✅ Getting started CTA section

**Glin-Profanity (`GlinProfanityOverview`):**
- ✅ Context-aware demo with side-by-side comparison
- ✅ 23-language visual grid with flag emojis  
- ✅ Multi-language quick start (JS + Python)
- ✅ Industry use cases grid
- ✅ Advanced features showcase
- ✅ Performance metrics and statistics

### Template for New Tools

Use this as a starting point for new tool documentation:

```jsx
// /src/components/new-tool-overview.tsx
'use client';
import { 
  [RelevantIcons] 
} from 'lucide-react';
import Link from 'next/link';

// Define tool-specific data arrays
const features = [/* 6 key features */];
const principles = [/* 6 core principles */];  
const quickStartSteps = [/* 3-step process */];
const useCases = [/* 6 industry applications */];

export function NewToolOverview() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      {/* Navigation Cards */}
      {/* Unique Demo Section */}
      {/* Quick Start */}
      {/* Features Grid */}
      {/* Use Cases */}
      {/* Core Principles */} 
      {/* Next Steps */}
    </div>
  );
}
```

---

## Conclusion

This style guide represents the culmination of successful patterns from CommitWeave and Glin-Profanity documentation. By following these guidelines, future tools will maintain the same high quality and professional presentation that users expect from the GLINR Studio ecosystem.

**Key Takeaways:**
1. **Custom components are essential** for professional presentation
2. **Visual hierarchy and interactive elements** engage users better than static text
3. **Consistent patterns** across tools build user confidence and familiarity
4. **Cross-platform examples** serve diverse developer audiences
5. **Enterprise focus** positions tools as production-ready solutions

For questions about implementing these patterns or extending this guide, refer to the implementation examples in the CommitWeave and Glin-Profanity documentation codebases.

---

*Last Updated: August 2025 | GLINR Studio Documentation Standards*