'use client';
import { 
  Bot, 
  Palette, 
  Sparkles, 
  Settings, 
  GitBranch, 
  Zap,
  Shield,
  Wrench,
  FileText,
  Download,
  Play,
  ArrowRight,
  HelpCircle,
  Star,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { CommitWeaveArchitecture } from './architecture-diagram';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Generation',
    description: 'Leverages OpenAI GPT and Anthropic Claude to analyze your changes and generate contextual commit messages'
  },
  {
    icon: FileText,
    title: 'Conventional Commits',
    description: 'Full support for conventional commit format with predefined types and scopes'
  },
  {
    icon: Palette,
    title: 'Beautiful CLI Interface',
    description: 'Interactive prompts with animations, colors, and branded styling'
  },
  {
    icon: Sparkles,
    title: 'Smart Emoji Integration',
    description: 'Contextual emojis that make your commit history visually appealing'
  },
  {
    icon: Settings,
    title: 'Highly Configurable',
    description: 'Customize everything from commit types to AI models'
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    description: 'Seamless integration with your existing Git workflow'
  }
];

const principles = [
  { icon: Palette, title: 'Beauty First', desc: 'Every interaction should be visually appealing' },
  { icon: Zap, title: 'Speed Matters', desc: 'Fast, responsive, and efficient operations' },
  { icon: Shield, title: 'Type Safety', desc: 'Full TypeScript coverage for reliability' },
  { icon: Wrench, title: 'Configurable', desc: 'Highly customizable to fit team preferences' },
  { icon: Bot, title: 'AI-Enhanced', desc: 'Smart assistance without complexity' },
  { icon: FileText, title: 'Standards-Based', desc: 'Full conventional commit compliance' }
];

const quickStartSteps = [
  {
    step: 1,
    icon: Download,
    title: 'Install CommitWeave',
    command: 'npm install -g commitweave',
    description: 'Install globally via npm'
  },
  {
    step: 2,
    icon: Play,
    title: 'Initialize Project',
    command: 'commitweave init',
    description: 'Set up configuration'
  },
  {
    step: 3,
    icon: Sparkles,
    title: 'Generate Commits',
    command: 'commitweave --ai',
    description: 'Create AI-powered commits'
  }
];

export function EnhancedOverview() {
  return (
    <div className="space-y-12">
      {/* Sleek Hero Section */}
      <div className="relative text-center space-y-6 py-12">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fd-muted/50 border border-fd-border rounded-full">
          <Bot className="w-4 h-4 text-fd-muted-foreground" />
          <span className="text-sm font-medium text-fd-muted-foreground">AI-Powered Git Workflow</span>
        </div>
        
        {/* Clean Typography */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-fd-foreground">
            Beautiful Git Commits Made Simple
          </h1>
          
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CommitWeave combines the power of AI with conventional commit standards to create an exceptional Git workflow experience.
          </p>
        </div>

        {/* Minimal CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Link 
            href="/docs/commitweave/installation" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-fd-primary text-fd-primary-foreground font-medium rounded-lg hover:bg-fd-primary/90 transition-colors no-underline"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          
          <a 
            href="#architecture" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-fd-border hover:bg-fd-muted/50 text-fd-muted-foreground hover:text-fd-foreground font-medium rounded-lg transition-colors no-underline"
          >
            See How It Works
            <Play className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Clean Navigation Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'What is CommitWeave?',
            description: 'Learn about the vision',
            icon: HelpCircle,
            href: '/docs/commitweave/what-is-commitweave'
          },
          {
            title: 'Installation',
            description: 'Get started quickly',
            icon: Download,
            href: '/docs/commitweave/installation'
          },
          {
            title: 'Comparisons',
            description: 'See how we compare',
            icon: Star,
            href: '/docs/commitweave/comparisons'
          },
          {
            title: 'Roadmap',
            description: 'Exciting features ahead',
            icon: Rocket,
            href: '/docs/commitweave/roadmap'
          }
        ].map((tile) => (
          <a
            key={tile.title}
            href={tile.href}
            className="group block p-4 bg-fd-card border border-fd-border rounded-lg hover:bg-fd-muted/50 transition-colors no-underline"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-fd-muted rounded-lg group-hover:bg-fd-muted/80 transition-colors">
                <tile.icon className="w-5 h-5 text-fd-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-fd-foreground group-hover:text-fd-foreground/80">
                  {tile.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground">
                  {tile.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-fd-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </a>
        ))}
      </div>

      {/* Architecture Diagram */}
      <div id="architecture" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          How CommitWeave Works
        </h2>
        <p className="text-fd-muted-foreground">
          Explore our interactive architecture diagrams to understand how CommitWeave transforms your Git workflow:
        </p>
        <CommitWeaveArchitecture />
      </div>

      {/* Compact Quick Start */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Quick Start</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {quickStartSteps.map((step) => (
            <div key={step.step} className="group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-emerald-900 dark:text-emerald-100">{step.title}</span>
                  </div>
                  <div className="bg-gray-900 text-green-400 px-3 py-1.5 rounded-lg font-mono text-xs mb-2">
                    <span className="text-gray-500">$</span> {step.command}
                  </div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-emerald-200 dark:border-emerald-700">
          <Link 
            href="/docs/commitweave/installation" 
            className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 font-medium transition-colors no-underline"
          >
            View detailed installation guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Why CommitWeave?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="space-y-4">
            <h3 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Before CommitWeave
            </h3>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <pre className="text-sm text-red-800 dark:text-red-200 whitespace-pre-wrap break-words overflow-x-auto">
{`git commit -m "fix stuff"
git commit -m "update"  
git commit -m "changes"`}
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              After CommitWeave
            </h3>
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <pre className="text-sm text-green-800 dark:text-green-200 whitespace-pre-wrap break-words overflow-x-auto">
{`feat(auth): ✨ implement JWT token validation system

Add comprehensive JWT authentication with automatic 
token refresh and secure session management.

BREAKING CHANGE: Legacy auth endpoints deprecated`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          Core Principles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((principle, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <principle.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">{principle.title}</h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-300">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Links */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
          <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Ready to Get Started?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Installation Guide', href: '/docs/commitweave/installation', desc: 'Get CommitWeave installed' },
            { title: 'Usage Examples', href: '/docs/commitweave/usage', desc: 'Learn effective usage' },
            { title: 'CLI Reference', href: '/docs/commitweave/cli-reference', desc: 'Complete command docs' },
            { title: 'Configuration', href: '/docs/commitweave/configuration', desc: 'Customize for your needs' }
          ].map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="block p-4 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all group no-underline"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 no-underline">{link.title}</h3>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-300 no-underline">{link.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}