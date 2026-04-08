'use client'

import { useState } from 'react'
import { 
  Smartphone, 
  Code2, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Plane,
  Rocket,
  Zap
} from 'lucide-react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [appName, setAppName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt) return
    
    setIsGenerating(true)
    setError('')
    setGeneratedCode('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt, 
          appName: appName || 'MyApp'
        }),
      })

      const data = await response.json()
      
      if (!response.ok) throw new Error(data.error)
      
      setGeneratedCode(data.code)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ShipThat</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="glow-btn bg-white text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-orange-300 border border-orange-500/30 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            AI builds, cloud compiles, you just submit
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Describe Your App.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              We Handle The Rest.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            AI generates your SwiftUI code. We build it on cloud Macs and deliver to TestFlight. 
            You just test and submit to App Store. No Xcode needed.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="glow-btn bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 text-white">
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-white flex items-center gap-2">
              View Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Save thousands in dev costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>No Mac required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Your Apple account</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">From idea to App Store. Zero coding required.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Describe</h3>
              <p className="text-gray-400 text-sm">Tell our AI what you want to build</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">We Build</h3>
              <p className="text-gray-400 text-sm">AI writes code, cloud Macs compile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">TestFlight</h3>
              <p className="text-gray-400 text-sm">Test on your iPhone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">App Store</h3>
              <p className="text-gray-400 text-sm">One-click submit, Apple reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Preview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Try It Now</h2>
              <p className="text-gray-400">Describe your app idea and see the magic happen</p>
            </div>
            
            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: A fitness tracking app with workout timers, progress charts, and HealthKit integration. Dark mode with orange accents."
                className="w-full h-32 bg-slate-900/50 rounded-xl p-4 text-white placeholder-gray-500 border border-white/10 focus:border-orange-500/50 focus:outline-none resize-none"
              />
              
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="App Name (e.g., FitTrack)"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="flex-1 bg-slate-900/50 rounded-xl p-3 text-white border border-white/10 focus:border-orange-500/50 focus:outline-none"
                />
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt}
                  className="glow-btn bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all disabled:opacity-50 text-white flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Building...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate
                    </>
                  )}
                </button>
              </div>
            </div>

            {isGenerating && (
              <div className="mt-8 p-8 rounded-xl bg-slate-900/50 flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-white font-medium">Building your app...</p>
                <p className="text-gray-500 text-sm mt-2">Time varies based on features and complexity</p>
              </div>
            )}

            {generatedCode && (
              <div className="mt-8 glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Generated SwiftUI Code</h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                    className="text-sm text-orange-400 hover:text-orange-300"
                  >
                    Copy
                  </button>
                </div>
                <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 font-mono max-h-96 overflow-y-auto">
                  {generatedCode}
                </pre>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-gray-400">Everything handled. You just submit.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">AI Code Generation</h3>
              <p className="text-gray-400 text-sm">SwiftUI views, models, and architecture generated from your description</p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Cloud Build</h3>
              <p className="text-gray-400 text-sm">Compiled on cloud Macs, signed with your certificate, uploaded to TestFlight</p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">TestFlight Delivery</h3>
              <p className="text-gray-400 text-sm">Test on your iPhone immediately. No Xcode, no Mac needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-gray-400">Choose what works for you. No hidden fees.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$99</span>
                <span className="text-gray-400"> setup</span>
                <div className="text-sm text-gray-400 mt-1">+ $29/month</div>
              </div>
              <div className="text-sm text-orange-400 mb-4">or $44/month no setup</div>
              <ul className="text-gray-400 text-sm space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 1 app
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 100 credits/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Cloud builds included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Email support
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors text-white font-medium">
                Get Started
              </button>
            </div>

            {/* Builder - Popular */}
            <div className="glass rounded-2xl p-6 border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 rounded-full text-xs font-bold text-white">POPULAR</div>
              <h3 className="text-lg font-semibold text-white mb-2">Builder</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$199</span>
                <span className="text-gray-400"> setup</span>
                <div className="text-sm text-gray-400 mt-1">+ $69/month</div>
              </div>
              <div className="text-sm text-orange-400 mb-4">or $99/month no setup</div>
              <ul className="text-gray-400 text-sm space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 3 apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 300 credits/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Priority cloud builds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> App Store submission help
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 font-bold hover:scale-105 transition-transform text-white">
                Start Building
              </button>
            </div>

            {/* Studio */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Studio</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$499</span>
                <span className="text-gray-400"> setup</span>
                <div className="text-sm text-gray-400 mt-1">+ $149/month</div>
              </div>
              <div className="text-sm text-orange-400 mb-4">or $199/month no setup</div>
              <ul className="text-gray-400 text-sm space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 10 apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 750 credits/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> White-label option
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> 1-on-1 support
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors text-white font-medium">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-gray-500">
              Apple Developer Program ($99/year) required separately.
            </p>
            <p className="text-sm text-gray-500">
              Credits roll over for 12 months. Cloud builds included in all plans.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Common Questions</h2>
          <div className="space-y-4">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Do I need a Mac or Xcode?</h3>
              <p className="text-gray-400 text-sm">No. We build your app on cloud Macs and deliver it to TestFlight. You just test on your iPhone and submit to App Store.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">How long until I can test my app?</h3>
              <p className="text-gray-400 text-sm">AI generates code instantly. Cloud build timing depends on your app's complexity and features. TestFlight availability varies based on Apple's processing.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Do I need my own Apple Developer account?</h3>
              <p className="text-gray-400 text-sm">Yes, you need Apple Developer Program ($99/year) to publish. We use your credentials to sign and submit apps under your name.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What if Apple rejects my app?</h3>
              <p className="text-gray-400 text-sm">Paste the rejection reason into our platform. AI will fix the issue and rebuild. No extra charge for rebuilds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">ShipThat</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 ShipThat Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
