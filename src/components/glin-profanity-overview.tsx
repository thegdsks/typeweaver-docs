'use client';
import { 
  Brain, 
  Shield, 
  Globe, 
  Zap,
  Target,
  Eye,
  MessageCircle,
  Users,
  Play,
  ArrowRight,
  Download,
  Code,
  Component,
  Sparkles,
  TrendingUp,
  CheckCircle,
  XCircle,
  Languages,
  Gamepad2,
  Film,
  ShoppingCart,
  GraduationCap,
  Building
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: 'Context-Aware Intelligence',
    description: 'Advanced NLP analysis distinguishes positive from negative contexts to reduce false positives by up to 85%'
  },
  {
    icon: Globe,
    title: '23 Language Support',
    description: 'Comprehensive profanity detection across 23 languages with shared dictionary management'
  },
  {
    icon: Eye,
    title: 'Obfuscation Detection',
    description: 'Catches disguised profanity with sophisticated pattern matching for sh1t, f*ck, a$$hole'
  },
  {
    icon: Target,
    title: 'Severity Classification',
    description: 'EXACT vs FUZZY matching with minimum severity filtering for granular control'
  },
  {
    icon: Component,
    title: 'React Integration',
    description: 'Built-in hooks with state management, error boundaries, and performance optimization'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized algorithms with caching, early termination, and sub-millisecond detection speeds'
  }
];

const principles = [
  { icon: Brain, title: 'Context First', desc: 'Advanced NLP over simple word matching' },
  { icon: Zap, title: 'Speed Matters', desc: 'Sub-millisecond detection with caching' },
  { icon: Globe, title: 'Global Ready', desc: '23 languages with Unicode support' },
  { icon: Shield, title: 'Production Grade', desc: '130+ tests with enterprise reliability' },
  { icon: Target, title: 'Precision Control', desc: 'Severity levels and domain intelligence' },
  { icon: Users, title: 'Cross-Platform', desc: 'Perfect JavaScript/Python parity' }
];

const quickStartSteps = [
  {
    step: 1,
    icon: Download,
    title: 'Install Package',
    jsCommand: 'npm install glin-profanity',
    pyCommand: 'pip install glin-profanity',
    description: 'Available for both ecosystems'
  },
  {
    step: 2,
    icon: Code,
    title: 'Import Library',
    jsCommand: "import { checkProfanity } from 'glin-profanity';",
    pyCommand: 'from glin_profanity import Filter',
    description: 'Simple, clean API'
  },
  {
    step: 3,
    icon: Sparkles,
    title: 'Detect Profanity',
    jsCommand: "checkProfanity('text', { enableContextAware: true })",
    pyCommand: 'filter.check_profanity("text")',
    description: 'Context-aware detection'
  }
];

const languages = [
  { flag: '🇬🇧', name: 'English', code: 'en' },
  { flag: '🇪🇸', name: 'Spanish', code: 'es' },
  { flag: '🇫🇷', name: 'French', code: 'fr' },
  { flag: '🇩🇪', name: 'German', code: 'de' },
  { flag: '🇮🇹', name: 'Italian', code: 'it' },
  { flag: '🇵🇹', name: 'Portuguese', code: 'pt' },
  { flag: '🇷🇺', name: 'Russian', code: 'ru' },
  { flag: '🇯🇵', name: 'Japanese', code: 'ja' },
  { flag: '🇰🇷', name: 'Korean', code: 'ko' },
  { flag: '🇨🇳', name: 'Chinese', code: 'zh' },
  { flag: '🇸🇦', name: 'Arabic', code: 'ar' },
  { flag: '🇮🇳', name: 'Hindi', code: 'hi' },
  { flag: '🇹🇷', name: 'Turkish', code: 'tr' },
  { flag: '🇵🇱', name: 'Polish', code: 'pl' },
  { flag: '🇳🇱', name: 'Dutch', code: 'nl' },
  { flag: '🇸🇪', name: 'Swedish', code: 'sv' },
  { flag: '🇳🇴', name: 'Norwegian', code: 'no' },
  { flag: '🇩🇰', name: 'Danish', code: 'da' },
  { flag: '🇫🇮', name: 'Finnish', code: 'fi' },
  { flag: '🇨🇿', name: 'Czech', code: 'cs' },
  { flag: '🇭🇺', name: 'Hungarian', code: 'hu' },
  { flag: '🇮🇷', name: 'Persian', code: 'fa' },
  { flag: '🇹🇭', name: 'Thai', code: 'th' }
];

const useCases = [
  { icon: MessageCircle, title: 'Chat & Social', desc: 'Real-time messaging and social platforms' },
  { icon: Gamepad2, title: 'Gaming', desc: 'In-game chat with positive context awareness' },
  { icon: Film, title: 'Media & Entertainment', desc: 'Content moderation for reviews and comments' },
  { icon: ShoppingCart, title: 'E-commerce', desc: 'Product reviews and customer feedback' },
  { icon: GraduationCap, title: 'Education', desc: 'Student submissions and classroom discussions' },
  { icon: Building, title: 'Enterprise', desc: 'Internal communications and compliance' }
];

export function GlinProfanityOverview() {
  return (
    <div className="space-y-12">
      {/* Sleek Hero Section */}
      <div className="relative text-center space-y-6 py-12">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fd-muted/50 border border-fd-border rounded-full">
          <Brain className="w-4 h-4 text-fd-muted-foreground" />
          <span className="text-sm font-medium text-fd-muted-foreground">Context-Aware Content Moderation</span>
        </div>
        
        {/* Clean Typography */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-fd-foreground">
            Intelligent Profanity Detection for Modern Apps
          </h1>
          
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Glin-Profanity goes beyond simple word matching with advanced context-aware filtering, 23-language support, and perfect cross-platform compatibility.
          </p>
        </div>

        {/* Minimal CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Link 
            href="/docs/glin-profanity/installation" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-fd-primary text-fd-primary-foreground font-medium rounded-lg hover:bg-fd-primary/90 transition-colors no-underline"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          
          <a 
            href="#context-demo" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-fd-border hover:bg-fd-muted/50 text-fd-muted-foreground hover:text-fd-foreground font-medium rounded-lg transition-colors no-underline"
          >
            See Context-Aware Demo
            <Eye className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Clean Navigation Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Core Functions',
            description: 'Framework-agnostic API',
            icon: Code,
            href: '/docs/glin-profanity/core-functions'
          },
          {
            title: 'React Integration',
            description: 'Built-in hooks and state',
            icon: Component,
            href: '/docs/glin-profanity/react-hook'
          },
          {
            title: 'Context Analysis',
            description: 'Advanced NLP features',
            icon: Brain,
            href: '/docs/glin-profanity/context-analysis'
          },
          {
            title: 'Dictionary API',
            description: 'Real-time updates',
            icon: Globe,
            href: '/docs/glin-profanity/dictionary-management'
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

      {/* Language Support Showcase */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          23 Languages Supported
        </h2>
        <p className="text-fd-muted-foreground">
          Comprehensive profanity detection across global languages with shared dictionary management:
        </p>
        
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
          {languages.map((lang) => (
            <div 
              key={lang.code}
              className="group flex flex-col items-center p-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                {lang.flag}
              </div>
              <div className="text-xs font-medium text-center text-fd-muted-foreground">
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Context-Aware Demo */}
      <div id="context-demo" className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          Context-Aware Intelligence
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Traditional Word Filter
            </h3>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 space-y-3">
              {[
                { text: '"This movie is fucking amazing!"', result: '❌ FLAGGED' },
                { text: '"That boss fight is badass!"', result: '❌ FLAGGED' },
                { text: '"Damn good coffee!"', result: '❌ FLAGGED' },
                { text: '"You fucking idiot!"', result: '❌ FLAGGED' }
              ].map((example, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-red-800 dark:text-red-200 font-mono break-all">{example.text}</span>
                  <span className="text-red-600 dark:text-red-400 font-bold ml-2 whitespace-nowrap">{example.result}</span>
                </div>
              ))}
              <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">
                75% False Positive Rate
              </div>
            </div>
          </div>

          {/* Glin-Profanity */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Glin-Profanity Context-Aware
            </h3>
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-3">
              {[
                { text: '"This movie is fucking amazing!"', result: '✅ ALLOWED', reason: 'Positive sentiment' },
                { text: '"That boss fight is badass!"', result: '✅ ALLOWED', reason: 'Gaming context' },
                { text: '"Damn good coffee!"', result: '✅ ALLOWED', reason: 'Positive expression' },
                { text: '"You fucking idiot!"', result: '❌ FLAGGED', reason: 'Negative context' }
              ].map((example, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-800 dark:text-green-200 font-mono break-all">{example.text}</span>
                    <span className="text-green-600 dark:text-green-400 font-bold ml-2 whitespace-nowrap">{example.result}</span>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 italic">
                    {example.reason}
                  </div>
                </div>
              ))}
              <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
                10% False Positive Rate - 85% Improvement!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Quick Start */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Quick Start</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quickStartSteps.map((step) => (
            <div key={step.step} className="group space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <step.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-emerald-900 dark:text-emerald-100">{step.title}</span>
                  </div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">{step.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {/* JavaScript */}
                <div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">JavaScript/TypeScript</div>
                  <div className="bg-gray-900 text-green-400 px-3 py-2 rounded-lg font-mono text-xs">
                    <span className="text-gray-500">$</span> {step.jsCommand}
                  </div>
                </div>
                
                {/* Python */}
                <div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">Python</div>
                  <div className="bg-gray-900 text-blue-400 px-3 py-2 rounded-lg font-mono text-xs">
                    <span className="text-gray-500">$</span> {step.pyCommand}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-emerald-200 dark:border-emerald-700">
          <Link 
            href="/docs/glin-profanity/quickstart" 
            className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 font-medium transition-colors no-underline"
          >
            View 5-minute tutorial with working examples <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          Advanced Features
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

      {/* Use Cases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          Use Cases
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <useCase.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">{useCase.title}</h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-300">{useCase.desc}</p>
              </div>
            </div>
          ))}
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
            { title: 'Installation Guide', href: '/docs/glin-profanity/installation', desc: 'JavaScript and Python setup' },
            { title: 'Quick Start', href: '/docs/glin-profanity/quickstart', desc: '5-minute working examples' },
            { title: 'API Reference', href: '/docs/glin-profanity/core-functions', desc: 'Complete method documentation' },
            { title: 'Context Analysis', href: '/docs/glin-profanity/context-analysis', desc: 'Advanced NLP features' }
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