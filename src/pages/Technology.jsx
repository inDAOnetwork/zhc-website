import { Link } from 'react-router-dom'

const services = [
  {
    title: 'AI Agent Deployment',
    desc: 'Custom autonomous agents designed for your specific business needs. From customer service to data analysis, our agents work 24/7.',
    tag: 'Core',
    features: ['Custom trained models', 'Real-time monitoring', 'Auto-scaling', 'Multi-language support'],
  },
  {
    title: 'Autonomous Infrastructure',
    desc: 'Self-healing, self-scaling server architecture that adapts to demand. Zero downtime, zero maintenance overhead.',
    tag: 'Infrastructure',
    features: ['99.99% uptime SLA', 'Global edge network', 'Auto failover', 'Predictive scaling'],
  },
  {
    title: 'Decision Engine',
    desc: 'AI-powered business intelligence that analyzes data and makes strategic decisions faster than any boardroom.',
    tag: 'Intelligence',
    features: ['Real-time analytics', 'Predictive modeling', 'Risk assessment', 'Market analysis'],
  },
  {
    title: 'Code Factory',
    desc: 'Fully automated software development pipeline. From requirements to deployment — no human developer needed.',
    tag: 'Development',
    features: ['Auto code generation', 'CI/CD pipeline', 'Security scanning', 'Performance testing'],
  },
  {
    title: 'Digital Workforce',
    desc: 'Replace entire departments with coordinated AI agents. HR, finance, marketing — all running autonomously.',
    tag: 'Enterprise',
    features: ['Department simulation', 'Workflow automation', 'Compliance monitoring', 'Cost optimization'],
  },
  {
    title: 'Neural API Gateway',
    desc: 'Connect to our intelligence network via a simple API. Plug autonomous AI into your existing systems.',
    tag: 'API',
    features: ['RESTful & GraphQL', 'WebSocket streams', 'SDK for all languages', 'Rate-limit friendly'],
  },
]

export default function Technology() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden" >
        <div className="relative max-w-[1280px] mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">
            Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Autonomous solutions for every layer of your business.
            Built by machines, for a world that moves faster than humans can keep up.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="glass-card rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-blue-400/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-[0.3em]">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Simple, Transparent</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
            {/* Starter */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-semibold text-lg mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">For exploring autonomous AI</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['1 AI Agent', '1,000 API calls/mo', 'Community support', 'Basic analytics'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-blue-400/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-block bg-transparent text-white font-semibold border border-white/30 rounded-lg relative overflow-hidden transition-colors duration-500 hover:text-black hover:border-white group" style={{ isolation: 'isolate' }}>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-card rounded-2xl p-8 border-blue-500/20 glow-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-black text-xs font-bold rounded-full">
                Popular
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Pro</h3>
              <p className="text-gray-400 text-sm mb-6">For serious automation</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['10 AI Agents', '100k API calls/mo', 'Priority support', 'Advanced analytics', 'Custom workflows'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-block bg-blue-500 text-black hover:bg-blue-400 border-none rounded-lg font-semibold">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-semibold text-lg mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">Full autonomous takeover</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited agents', 'Unlimited API calls', 'Dedicated support', 'Full customization', 'SLA guarantee'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-blue-400/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-block bg-transparent text-white font-semibold border border-white/30 rounded-lg relative overflow-hidden transition-colors duration-500 hover:text-black hover:border-white group" style={{ isolation: 'isolate' }}>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
