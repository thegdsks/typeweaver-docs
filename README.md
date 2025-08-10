<p align="center">
  <img src="public/glinr.svg" alt="TypeWeaver Logo" width="120" />
</p>

<h1 align="center">TypeWeaver Documentation</h1>

<p align="center">
  <strong>Professional development tools documentation by GLINR Studio</strong>
</p>

<p align="center">
  <a href="https://typeweaver.com/docs">
    <img src="https://img.shields.io/badge/docs-typeweaver.com-blue?style=flat-square" alt="Documentation" />
  </a>
  <a href="https://github.com/thegdsks/typeweaver-docs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
  </a>
  <a href="https://github.com/thegdsks/typeweaver-docs/actions/workflows/ci.yml">
    <img src="https://github.com/thegdsks/typeweaver-docs/actions/workflows/ci.yml/badge.svg" alt="CI Status" />
  </a>
</p>

<p align="center">
  <a href="https://typeweaver.com/docs">View Docs</a>
  ·
  <a href="https://github.com/thegdsks/typeweaver-docs/issues">Report Issue</a>
  ·
  <a href="https://github.com/thegdsks/typeweaver-docs/issues">Request Feature</a>
</p>

---

## Overview

This repository contains the documentation for TypeWeaver's suite of development tools. Built with [Next.js 15](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/), it provides a modern, searchable, and interactive documentation experience.

### Featured Tools

| Tool | Description |
|------|-------------|
| **[Glin-Profanity](https://typeweaver.com/docs/glin-profanity)** | High-performance multilingual profanity filter with ML integration |
| **[CommitWeave](https://typeweaver.com/docs/commitweave)** | AI-powered Git commit message generator |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/thegdsks/typeweaver-docs.git
cd typeweaver-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002) to view the documentation.

## Project Structure

```
├── content/
│   └── docs/           # MDX documentation files
│       ├── glin-profanity/
│       └── commitweave/
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   └── lib/            # Utilities and configuration
└── public/             # Static assets
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Examples:

```
docs(glin-profanity): add API reference
fix(search): resolve navigation issue
feat(sidebar): add contextual links
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Documentation**: Fumadocs UI/Core
- **Styling**: Tailwind CSS
- **Content**: MDX with frontmatter
- **Deployment**: Vercel

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with care by <a href="https://github.com/thegdsks">GLINR Studio</a>
</p>
