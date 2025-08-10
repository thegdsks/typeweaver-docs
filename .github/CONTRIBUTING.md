# Contributing to TypeWeaver Documentation

Thank you for your interest in contributing to the TypeWeaver documentation!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/typeweaver-docs.git`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm dev`

## Development Workflow

### Branch Naming

Use descriptive branch names:
- `docs/topic-name` - Documentation updates
- `fix/issue-description` - Bug fixes
- `feat/feature-name` - New features

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `docs`: Documentation changes
- `fix`: Bug fixes
- `feat`: New features
- `chore`: Maintenance tasks
- `style`: Code style changes
- `refactor`: Code refactoring

**Examples:**
```
docs(glin-profanity): add API reference section
fix(search): resolve keyboard navigation issue
feat(sidebar): add contextual GitHub links
```

## Pull Request Process

1. Create your feature branch from `main`
2. Make your changes following the guidelines above
3. Test your changes locally with `pnpm build`
4. Submit a pull request to `main`
5. Wait for review and address any feedback

## Documentation Structure

```
content/
└── docs/
    ├── glin-profanity/    # Glin-Profanity docs
    ├── commitweave/       # CommitWeave docs
    └── ...
```

### Adding New Pages

1. Create a new folder or MDX file in the appropriate section
2. Add frontmatter with `title` and `description`
3. The sidebar will automatically update

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions.

## Questions?

Open an issue or reach out via the repository discussions.
