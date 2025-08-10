'use client';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { useState } from 'react';

export function CommitWeaveArchitecture() {
  const [, setHoveredComponent] = useState<string | null>(null);
  return (
    <Tabs items={['Core Architecture', 'AI Pipeline', 'User Workflow']}>
      <Tab
        value="Core Architecture"
        className="not-prose text-sm text-center text-fd-muted-foreground overflow-auto"
      >
        <div className="relative flex flex-col gap-6 min-w-[700px] min-h-[500px] p-6">
          {/* Flow Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* User Interface to Core Engine */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            
            <line x1="50%" y1="90" x2="50%" y2="140" stroke="url(#flowGradient1)" strokeWidth="2" markerEnd="url(#arrowhead)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="50%" y1="220" x2="50%" y2="270" stroke="url(#flowGradient2)" strokeWidth="2" markerEnd="url(#arrowhead)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="50%" y1="320" x2="50%" y2="370" stroke="url(#flowGradient3)" strokeWidth="2" markerEnd="url(#arrowhead)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="2s" repeatCount="indefinite"/>
            </line>
          </svg>

          {/* User Layer */}
          <div className="relative" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-3 text-left">👥 User Interface Layer</p>
            <div className="flex gap-4">
              {[
                { name: 'CLI Interface', icon: '⌨️', desc: 'Terminal commands' },
                { name: 'VS Code Extension', icon: '🔧', desc: 'Editor integration' },
                { name: 'Web Interface', icon: '🌐', desc: 'Browser dashboard' }
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative flex-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredComponent('ui')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-medium text-blue-900 dark:text-blue-100">{item.name}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-300 mt-1">{item.desc}</div>
                  <div className="absolute inset-0 bg-blue-200 dark:bg-blue-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Engine */}
          <div className="relative" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-3 text-left">⚙️ Core Processing Engine</p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Commit Parser', icon: '📝', desc: 'Analyzes git changes' },
                  { name: 'AI Processor', icon: '🤖', desc: 'Generates messages' },
                  { name: 'Template Engine', icon: '🎨', desc: 'Formats output' }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="group bg-white dark:bg-gray-800 border border-green-300 dark:border-green-700 rounded-lg p-3 hover:bg-green-50 dark:hover:bg-green-900 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => setHoveredComponent('engine')}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    <div className="text-xl mb-2">{item.icon}</div>
                    <div className="font-medium text-green-900 dark:text-green-100 text-sm">{item.name}</div>
                    <div className="text-xs text-green-600 dark:text-green-300 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="relative" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-3 text-left">🧠 AI Services Layer</p>
            <div className="flex gap-4">
              {[
                { name: 'OpenAI GPT', icon: '🌟', desc: 'ChatGPT integration' },
                { name: 'Claude API', icon: '⚡', desc: 'Anthropic Claude' },
                { name: 'Local Models', icon: '💻', desc: 'Offline processing' }
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative flex-1 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border border-purple-200 dark:border-purple-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredComponent('ai')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-medium text-purple-900 dark:text-purple-100">{item.name}</div>
                  <div className="text-xs text-purple-600 dark:text-purple-300 mt-1">{item.desc}</div>
                  <div className="absolute inset-0 bg-purple-200 dark:bg-purple-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Layer */}
          <div className="relative" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-3 text-left">💾 Data & Storage Layer</p>
            <div className="flex gap-4">
              {[
                { name: 'Git Repository', icon: '📦', desc: 'Version control' },
                { name: 'Config Files', icon: '⚙️', desc: 'User settings' },
                { name: 'Cache Store', icon: '🚀', desc: 'Performance cache' }
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative flex-1 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border border-orange-200 dark:border-orange-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredComponent('data')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-medium text-orange-900 dark:text-orange-100">{item.name}</div>
                  <div className="text-xs text-orange-600 dark:text-orange-300 mt-1">{item.desc}</div>
                  <div className="absolute inset-0 bg-orange-200 dark:bg-orange-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tab>

      <Tab
        value="AI Pipeline"
        className="not-prose text-sm text-center text-fd-muted-foreground overflow-auto"
      >
        <div className="relative flex flex-row gap-6 min-w-[800px] min-h-[500px] p-6">
          {/* Flow Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <marker id="arrowhead-pipeline" markerWidth="10" markerHeight="7" 
                refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
              </marker>
              <linearGradient id="pipelineFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="33%" stopColor="#10b981" stopOpacity="0.8"/>
                <stop offset="66%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            <path d="M 150 250 Q 300 200, 450 250 Q 600 300, 750 250" 
                  stroke="url(#pipelineFlow)" strokeWidth="3" fill="none" 
                  markerEnd="url(#arrowhead-pipeline)">
              <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>

          {/* Input Section */}
          <div className="relative flex flex-col gap-3 w-1/4" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-2 text-left">📥 Input Sources</p>
            {[
              { name: 'Git Diff', icon: '📊', desc: 'Changed files', color: 'from-cyan-50 to-sky-50 dark:from-cyan-950 dark:to-sky-950', border: 'border-cyan-200 dark:border-cyan-800' },
              { name: 'Staged Files', icon: '📋', desc: 'Ready to commit', color: 'from-cyan-50 to-sky-50 dark:from-cyan-950 dark:to-sky-950', border: 'border-cyan-200 dark:border-cyan-800' },
              { name: 'User Context', icon: '👤', desc: 'Project settings', color: 'from-cyan-50 to-sky-50 dark:from-cyan-950 dark:to-sky-950', border: 'border-cyan-200 dark:border-cyan-800' }
            ].map((item, i) => (
              <div
                key={item.name}
                className={`group bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-xl">{item.icon}</div>
                  <div>
                    <div className="font-medium text-cyan-900 dark:text-cyan-100 text-sm">{item.name}</div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-300">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Processing Pipeline */}
          <div className="relative flex flex-col gap-4 flex-1" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-2 text-left">🔄 AI Processing Pipeline</p>
            
            {/* Analysis Stage */}
            <div className="group bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div className="font-medium text-emerald-900 dark:text-emerald-100">Analysis Phase</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 border border-emerald-300 dark:border-emerald-700 rounded-lg p-2 text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors">
                  <div className="font-medium">🔍 Code Analysis</div>
                  <div className="text-emerald-600 dark:text-emerald-300">Semantic understanding</div>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-emerald-300 dark:border-emerald-700 rounded-lg p-2 text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors">
                  <div className="font-medium">📝 Context Extraction</div>
                  <div className="text-emerald-600 dark:text-emerald-300">Intent detection</div>
                </div>
              </div>
            </div>

            {/* Generation Stage */}
            <div className="group bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border border-purple-200 dark:border-purple-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div className="font-medium text-purple-900 dark:text-purple-100">Generation Phase</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-700 rounded-lg p-2 text-xs hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors">
                  <div className="font-medium">✨ Message Creation</div>
                  <div className="text-purple-600 dark:text-purple-300">AI-powered writing</div>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-700 rounded-lg p-2 text-xs hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors">
                  <div className="font-medium">✅ Format Validation</div>
                  <div className="text-purple-600 dark:text-purple-300">Conventional commits</div>
                </div>
              </div>
            </div>

            {/* Refinement Stage */}
            <div className="group bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div className="font-medium text-amber-900 dark:text-amber-100">Refinement Phase</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 rounded-lg p-2 text-xs hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors">
                  <div className="font-medium">🛡️ Convention Check</div>
                  <div className="text-amber-600 dark:text-amber-300">Standards compliance</div>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 rounded-lg p-2 text-xs hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors">
                  <div className="font-medium">⭐ Quality Scoring</div>
                  <div className="text-amber-600 dark:text-amber-300">Message evaluation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="relative flex flex-col gap-3 w-1/4" style={{ zIndex: 2 }}>
            <p className="text-xs font-bold mb-2 text-left">📤 Generated Output</p>
            {[
              { name: 'Commit Message', icon: '💬', desc: 'Formatted title', color: 'from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950', border: 'border-rose-200 dark:border-rose-800' },
              { name: 'Commit Body', icon: '📄', desc: 'Detailed description', color: 'from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950', border: 'border-rose-200 dark:border-rose-800' },
              { name: 'Metadata', icon: '🏷️', desc: 'Tags & references', color: 'from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950', border: 'border-rose-200 dark:border-rose-800' }
            ].map((item, i) => (
              <div
                key={item.name}
                className={`group bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-xl">{item.icon}</div>
                  <div>
                    <div className="font-medium text-rose-900 dark:text-rose-100 text-sm">{item.name}</div>
                    <div className="text-xs text-rose-600 dark:text-rose-300">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tab>

      <Tab
        value="User Workflow"
        className="not-prose text-sm text-center text-fd-muted-foreground overflow-auto"
      >
        <div className="relative flex flex-col gap-6 min-w-[700px] min-h-[500px] p-6">
          {/* Flow Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <marker id="arrowhead-workflow" markerWidth="10" markerHeight="7" 
                refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
              </marker>
              <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                <stop offset="25%" stopColor="#10b981" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            
            {/* Connecting lines between steps */}
            <line x1="50" y1="110" x2="50" y2="150" stroke="url(#workflowGradient)" strokeWidth="3" markerEnd="url(#arrowhead-workflow)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="1s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="200" x2="50" y2="240" stroke="url(#workflowGradient)" strokeWidth="3" markerEnd="url(#arrowhead-workflow)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="1s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="290" x2="50" y2="330" stroke="url(#workflowGradient)" strokeWidth="3" markerEnd="url(#arrowhead-workflow)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="1s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="380" x2="50" y2="420" stroke="url(#workflowGradient)" strokeWidth="3" markerEnd="url(#arrowhead-workflow)">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="1s" repeatCount="indefinite"/>
            </line>
          </svg>

          {/* Steps */}
          {[
            {
              step: 1,
              title: 'Developer makes changes',
              command: 'git add .',
              icon: '👨‍💻',
              description: 'Write and stage your code changes',
              color: 'from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950',
              border: 'border-blue-200 dark:border-blue-800',
              stepColor: 'bg-blue-500',
              textColor: 'text-blue-900 dark:text-blue-100'
            },
            {
              step: 2,
              title: 'Run CommitWeave',
              command: 'commitweave --generate',
              icon: '🚀',
              description: 'Launch the AI-powered commit tool',
              color: 'from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950',
              border: 'border-emerald-200 dark:border-emerald-800',
              stepColor: 'bg-emerald-500',
              textColor: 'text-emerald-900 dark:text-emerald-100'
            },
            {
              step: 3,
              title: 'AI analyzes changes',
              command: 'Processing...',
              icon: '🤖',
              description: 'Machine learning models understand your code',
              color: 'from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950',
              border: 'border-purple-200 dark:border-purple-800',
              stepColor: 'bg-purple-500',
              textColor: 'text-purple-900 dark:text-purple-100'
            },
            {
              step: 4,
              title: 'Review & customize message',
              command: 'Interactive editor',
              icon: '✏️',
              description: 'Fine-tune the generated commit message',
              color: 'from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950',
              border: 'border-amber-200 dark:border-amber-800',
              stepColor: 'bg-amber-500',
              textColor: 'text-amber-900 dark:text-amber-100'
            },
            {
              step: 5,
              title: 'Commit with generated message',
              command: 'git commit -m "..."',
              icon: '✅',
              description: 'Finalize with a perfect commit message',
              color: 'from-rose-50 to-red-50 dark:from-rose-950 dark:to-red-950',
              border: 'border-rose-200 dark:border-rose-800',
              stepColor: 'bg-rose-500',
              textColor: 'text-rose-900 dark:text-rose-100'
            }
          ].map((item, i) => (
            <div key={item.step} className="relative flex items-center gap-6" style={{ zIndex: 2 }}>
              <div className={`w-12 h-12 ${item.stepColor} text-white rounded-full flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform duration-300`}>
                {item.step}
              </div>
              
              <div className={`group flex-1 bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`font-bold ${item.textColor} text-lg`}>{item.title}</div>
                        <div className={`text-sm ${item.textColor.replace('900', '700').replace('100', '300')} mt-1`}>
                          {item.description}
                        </div>
                      </div>
                      <div className="bg-black dark:bg-gray-800 text-green-400 px-3 py-2 rounded-lg font-mono text-sm shadow-md">
                        <span className="text-gray-500">$</span> {item.command}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mt-3 bg-white dark:bg-gray-800 rounded-full h-2 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full ${item.stepColor} opacity-80 transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${(item.step / 5) * 100}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Completion badge */}
          <div className="relative mt-6 mx-auto" style={{ zIndex: 2 }}>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 border-2 border-green-300 dark:border-green-700 rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎉</div>
                <div className="font-bold text-green-800 dark:text-green-200">
                  Beautiful commit created!
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}