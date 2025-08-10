'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fumadocs-ui/components/tabs';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';

interface SimpleConfigTabsProps {
  jsonConfig: string;
  yamlConfig: string;
  title?: string;
  defaultValue?: 'json' | 'yaml';
}

export function SimpleConfigTabs({
  jsonConfig,
  yamlConfig,
  title,
  defaultValue = 'json'
}: SimpleConfigTabsProps) {
  return (
    <div className="my-6">
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      
      <Tabs defaultValue={defaultValue}>
        <TabsList>
          <TabsTrigger value="json">JSON</TabsTrigger>
          <TabsTrigger value="yaml">YAML</TabsTrigger>
        </TabsList>
        
        <TabsContent value="json">
          <CodeBlock lang="json" title="commitweave.json">
{jsonConfig}
          </CodeBlock>
        </TabsContent>
        
        <TabsContent value="yaml">
          <CodeBlock lang="yaml" title="commitweave.yaml">
{yamlConfig}
          </CodeBlock>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Team Standard Configuration
export function TeamStandardConfig() {
  const jsonConfig = `{
  "$schema": "https://commitweave.dev/schema.json",
  "ai": {
    "enabled": true,
    "provider": "openai",
    "model": "gpt-4-turbo",
    "apiKey": "\${OPENAI_API_KEY}",
    "temperature": 0.6,
    "maxTokens": 120,
    "timeout": 8000,
    "fallback": {
      "provider": "anthropic",
      "model": "claude-3-5-haiku-20241022",
      "apiKey": "\${CLAUDE_API_KEY}"
    }
  },
  "commit": {
    "type": {
      "required": true,
      "enum": [
        "feat",
        "fix", 
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert"
      ]
    },
    "scope": {
      "required": false,
      "enum": [
        "api",
        "ui",
        "auth", 
        "db",
        "config",
        "tests",
        "docs",
        "deps",
        "core",
        "utils"
      ]
    },
    "emoji": {
      "enabled": true,
      "style": "conventional"
    },
    "format": {
      "maxLength": 72,
      "minLength": 10,
      "case": "lowercase",
      "wrapBody": 72
    }
  },
  "git": {
    "signoff": false,
    "gpgSign": false,
    "hooks": {
      "skipVerify": false
    }
  },
  "ui": {
    "interactive": true,
    "fancyUI": true,
    "asciiArt": false,
    "animations": true,
    "colors": true,
    "emoji": true,
    "editor": "code --wait",
    "prompts": {
      "confirmCommit": true,
      "showPreview": true,
      "allowEdit": true
    }
  },
  "validation": {
    "enabled": true,
    "rules": {
      "typeRequired": true,
      "scopeRequired": false,
      "maxLength": 72,
      "minLength": 10,
      "emojiAllowed": true
    }
  }
}`;

  const yamlConfig = `$schema: https://commitweave.dev/schema.json
ai:
  enabled: true
  provider: openai
  model: gpt-4-turbo
  apiKey: "\${OPENAI_API_KEY}"
  temperature: 0.6
  maxTokens: 120
  timeout: 8000
  fallback:
    provider: anthropic
    model: claude-3-5-haiku-20241022
    apiKey: "\${CLAUDE_API_KEY}"

commit:
  type:
    required: true
    enum:
      - feat
      - fix
      - docs
      - style
      - refactor
      - perf
      - test
      - build
      - ci
      - chore
      - revert
  scope:
    required: false
    enum:
      - api
      - ui
      - auth
      - db
      - config
      - tests
      - docs
      - deps
      - core
      - utils
  emoji:
    enabled: true
    style: conventional
  format:
    maxLength: 72
    minLength: 10
    case: lowercase
    wrapBody: 72

git:
  signoff: false
  gpgSign: false
  hooks:
    skipVerify: false

ui:
  interactive: true
  fancyUI: true
  asciiArt: false
  animations: true
  colors: true
  emoji: true
  editor: code --wait
  prompts:
    confirmCommit: true
    showPreview: true
    allowEdit: true

validation:
  enabled: true
  rules:
    typeRequired: true
    scopeRequired: false
    maxLength: 72
    minLength: 10
    emojiAllowed: true`;

  return (
    <SimpleConfigTabs
      jsonConfig={jsonConfig}
      yamlConfig={yamlConfig}
    />
  );
}

// Open Source Friendly Configuration
export function OpenSourceConfig() {
  const jsonConfig = `{
  "$schema": "https://commitweave.dev/schema.json",
  "ai": {
    "enabled": false,
    "fallbackToManual": true
  },
  "commit": {
    "type": {
      "required": true,
      "enum": [
        "feat", "fix", "docs", "style", "refactor",
        "perf", "test", "build", "ci", "chore", "revert"
      ]
    },
    "scope": {
      "required": false,
      "enum": [
        "core", "api", "ui", "cli", "docs", "tests",
        "build", "deps", "config", "examples"
      ]
    },
    "emoji": {
      "enabled": false,
      "allowManual": true
    },
    "format": {
      "maxLength": 72,
      "minLength": 15,
      "case": "lowercase",
      "wrapBody": 72,
      "enforceBlankLine": true
    },
    "breaking": {
      "required": true,
      "format": "BREAKING CHANGE:"
    }
  },
  "git": {
    "signoff": true,
    "gpgSign": false,
    "hooks": {
      "skipVerify": false,
      "validateMessage": true
    }
  },
  "ui": {
    "interactive": true,
    "fancyUI": false,
    "asciiArt": false,
    "animations": false,
    "colors": true,
    "emoji": false,
    "editor": "\${EDITOR:-vim}",
    "prompts": {
      "confirmCommit": true,
      "showPreview": true,
      "allowEdit": true,
      "requireDescription": true
    }
  },
  "validation": {
    "enabled": true,
    "strict": true,
    "rules": {
      "typeRequired": true,
      "scopeEnforced": false,
      "maxLength": 72,
      "minLength": 15,
      "noEmoji": true,
      "conventionalFormat": true,
      "requireBody": false,
      "breakingChangeFormat": true
    }
  }
}`;

  const yamlConfig = `$schema: https://commitweave.dev/schema.json
ai:
  enabled: false
  fallbackToManual: true

commit:
  type:
    required: true
    enum:
      - feat
      - fix
      - docs
      - style
      - refactor
      - perf
      - test
      - build
      - ci
      - chore
      - revert
  scope:
    required: false
    enum:
      - core
      - api
      - ui
      - cli
      - docs
      - tests
      - build
      - deps
      - config
      - examples
  emoji:
    enabled: false
    allowManual: true
  format:
    maxLength: 72
    minLength: 15
    case: lowercase
    wrapBody: 72
    enforceBlankLine: true
  breaking:
    required: true
    format: "BREAKING CHANGE:"

git:
  signoff: true
  gpgSign: false
  hooks:
    skipVerify: false
    validateMessage: true

ui:
  interactive: true
  fancyUI: false
  asciiArt: false
  animations: false
  colors: true
  emoji: false
  editor: "\${EDITOR:-vim}"
  prompts:
    confirmCommit: true
    showPreview: true
    allowEdit: true
    requireDescription: true

validation:
  enabled: true
  strict: true
  rules:
    typeRequired: true
    scopeEnforced: false
    maxLength: 72
    minLength: 15
    noEmoji: true
    conventionalFormat: true
    requireBody: false
    breakingChangeFormat: true`;

  return (
    <SimpleConfigTabs
      jsonConfig={jsonConfig}
      yamlConfig={yamlConfig}
      title="Open Source Friendly Configuration"
    />
  );
}

// Enterprise Secure Configuration
export function EnterpriseConfig() {
  const jsonConfig = `{
  "$schema": "https://commitweave.dev/schema.json",
  "ai": {
    "enabled": false,
    "allowFallback": false,
    "logAttempts": true
  },
  "commit": {
    "type": {
      "required": true,
      "strict": true,
      "enum": [
        "feat", "fix", "docs", "refactor",
        "test", "build", "chore"
      ]
    },
    "scope": {
      "required": true,
      "strict": true,
      "enum": [
        "auth", "api", "ui", "db", "config",
        "security", "audit", "compliance"
      ]
    },
    "emoji": {
      "enabled": false,
      "allowed": false
    },
    "format": {
      "maxLength": 50,
      "minLength": 20,
      "case": "lowercase",
      "wrapBody": 50,
      "enforceBlankLine": true,
      "noSpecialChars": true
    },
    "breaking": {
      "required": true,
      "format": "BREAKING CHANGE:",
      "requireApproval": true
    }
  },
  "git": {
    "signoff": true,
    "gpgSign": true,
    "requireCleanIndex": true,
    "hooks": {
      "skipVerify": false,
      "enforceAll": true,
      "validateMessage": true,
      "requireTests": true
    }
  },
  "ui": {
    "interactive": true,
    "fancyUI": false,
    "asciiArt": false,
    "animations": false,
    "colors": false,
    "emoji": false,
    "editor": "\${EDITOR:-vi}",
    "prompts": {
      "confirmCommit": true,
      "showPreview": true,
      "allowEdit": false,
      "requireDescription": true,
      "requireJustification": true
    }
  },
  "security": {
    "stripSecrets": true,
    "logCommits": true,
    "requireSignature": true,
    "validateAuthor": true,
    "auditTrail": true,
    "secretPatterns": [
      "password", "token", "key", "secret",
      "credential", "api_key", "private"
    ]
  },
  "logging": {
    "enabled": true,
    "level": "info",
    "auditLog": "/var/log/commitweave/audit.log",
    "retentionDays": 365,
    "includeMetadata": true
  }
}`;

  const yamlConfig = `$schema: https://commitweave.dev/schema.json
ai:
  enabled: false
  allowFallback: false
  logAttempts: true

commit:
  type:
    required: true
    strict: true
    enum:
      - feat
      - fix
      - docs
      - refactor
      - test
      - build
      - chore
  scope:
    required: true
    strict: true
    enum:
      - auth
      - api
      - ui
      - db
      - config
      - security
      - audit
      - compliance
  emoji:
    enabled: false
    allowed: false
  format:
    maxLength: 50
    minLength: 20
    case: lowercase
    wrapBody: 50
    enforceBlankLine: true
    noSpecialChars: true
  breaking:
    required: true
    format: "BREAKING CHANGE:"
    requireApproval: true

git:
  signoff: true
  gpgSign: true
  requireCleanIndex: true
  hooks:
    skipVerify: false
    enforceAll: true
    validateMessage: true
    requireTests: true

ui:
  interactive: true
  fancyUI: false
  asciiArt: false
  animations: false
  colors: false
  emoji: false
  editor: "\${EDITOR:-vi}"
  prompts:
    confirmCommit: true
    showPreview: true
    allowEdit: false
    requireDescription: true
    requireJustification: true

security:
  stripSecrets: true
  logCommits: true
  requireSignature: true
  validateAuthor: true
  auditTrail: true
  secretPatterns:
    - password
    - token
    - key
    - secret
    - credential
    - api_key
    - private

logging:
  enabled: true
  level: info
  auditLog: "/var/log/commitweave/audit.log"
  retentionDays: 365
  includeMetadata: true`;

  return (
    <SimpleConfigTabs
      jsonConfig={jsonConfig}
      yamlConfig={yamlConfig}
      title="Enterprise Secure Configuration"
    />
  );
}

// Offline Local AI Configuration
export function OfflineAIConfig() {
  const jsonConfig = `{
  "$schema": "https://commitweave.dev/schema.json",
  "ai": {
    "enabled": true,
    "provider": "local",
    "baseURL": "http://localhost:11434/v1",
    "model": "codellama:7b-instruct",
    "apiKey": "not-required",
    "temperature": 0.4,
    "maxTokens": 100,
    "timeout": 15000,
    "retries": 2,
    "streaming": false,
    "aiSummary": true,
    "contextWindow": 4096
  },
  "localAI": {
    "provider": "ollama",
    "endpoint": "http://localhost:11434",
    "models": {
      "primary": "codellama:7b-instruct",
      "fallback": "llama2:7b-chat",
      "summary": "codellama:7b-instruct"
    },
    "modelPath": "/opt/ollama/models",
    "gpuAcceleration": true,
    "maxMemory": "8GB",
    "threads": 4
  },
  "commit": {
    "type": {
      "required": true,
      "enum": [
        "feat", "fix", "docs", "style", "refactor",
        "perf", "test", "build", "ci", "chore", "revert"
      ]
    },
    "scope": {
      "required": false,
      "enum": [
        "core", "api", "ui", "cli", "config", "tests",
        "models", "training", "inference", "deployment"
      ]
    },
    "emoji": {
      "enabled": true,
      "style": "conventional"
    },
    "format": {
      "maxLength": 72,
      "minLength": 10,
      "case": "lowercase",
      "wrapBody": 72
    }
  },
  "git": {
    "signoff": false,
    "gpgSign": false,
    "hooks": {
      "skipVerify": false
    }
  },
  "ui": {
    "interactive": true,
    "fancyUI": true,
    "asciiArt": false,
    "animations": true,
    "colors": true,
    "emoji": true,
    "editor": "\${EDITOR:-vim}",
    "prompts": {
      "confirmCommit": true,
      "showPreview": true,
      "allowEdit": true,
      "aiProgress": true
    }
  },
  "performance": {
    "caching": true,
    "cacheDir": "~/.commitweave/cache",
    "cacheTTL": 3600,
    "preloadModel": false,
    "batchRequests": false,
    "offlineMode": true
  },
  "privacy": {
    "noTelemetry": true,
    "localOnly": true,
    "encryptCache": true,
    "clearOnExit": false
  }
}`;

  const yamlConfig = `$schema: https://commitweave.dev/schema.json
ai:
  enabled: true
  provider: local
  baseURL: "http://localhost:11434/v1"
  model: codellama:7b-instruct
  apiKey: not-required
  temperature: 0.4
  maxTokens: 100
  timeout: 15000
  retries: 2
  streaming: false
  aiSummary: true
  contextWindow: 4096

localAI:
  provider: ollama
  endpoint: "http://localhost:11434"
  models:
    primary: codellama:7b-instruct
    fallback: llama2:7b-chat
    summary: codellama:7b-instruct
  modelPath: "/opt/ollama/models"
  gpuAcceleration: true
  maxMemory: 8GB
  threads: 4

commit:
  type:
    required: true
    enum:
      - feat
      - fix
      - docs
      - style
      - refactor
      - perf
      - test
      - build
      - ci
      - chore
      - revert
  scope:
    required: false
    enum:
      - core
      - api
      - ui
      - cli
      - config
      - tests
      - models
      - training
      - inference
      - deployment
  emoji:
    enabled: true
    style: conventional
  format:
    maxLength: 72
    minLength: 10
    case: lowercase
    wrapBody: 72

git:
  signoff: false
  gpgSign: false
  hooks:
    skipVerify: false

ui:
  interactive: true
  fancyUI: true
  asciiArt: false
  animations: true
  colors: true
  emoji: true
  editor: "\${EDITOR:-vim}"
  prompts:
    confirmCommit: true
    showPreview: true
    allowEdit: true
    aiProgress: true

performance:
  caching: true
  cacheDir: "~/.commitweave/cache"
  cacheTTL: 3600
  preloadModel: false
  batchRequests: false
  offlineMode: true

privacy:
  noTelemetry: true
  localOnly: true
  encryptCache: true
  clearOnExit: false`;

  return (
    <SimpleConfigTabs
      jsonConfig={jsonConfig}
      yamlConfig={yamlConfig}
      title="Offline Local AI Configuration"
    />
  );
}