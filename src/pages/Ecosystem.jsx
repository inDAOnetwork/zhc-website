const ecosystemItems = [
  {
    title: 'Agent Marketplace',
    desc: 'Browse and deploy pre-built AI agents from our community. Plug-and-play automation for any use case.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0V4.125C3 3.504 3.504 3 4.125 3h15.75C20.496 3 21 3.504 21 4.125v5.224" />
      </svg>
    ),
  },
  {
    title: 'ZHC Token',
    desc: 'The native utility token powering the Zero Human ecosystem. Stake, govern, and earn within the network.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Governance DAO',
    desc: 'Decentralized decision-making for the network. Token holders vote on proposals, upgrades, and resource allocation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    title: 'Neural Network Hub',
    desc: 'Shared AI compute layer where agents collaborate, share knowledge, and become smarter collectively.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
]

const communityStats = [
  { value: '50K+', label: 'Discord Members' },
  { value: '120K+', label: 'Token Holders' },
  { value: '800+', label: 'Active Agents' },
  { value: '15M+', label: 'Transactions' },
]

const partners = [
  'OpenAI', 'DeepMind', 'Anthropic', 'Stability AI',
  'Hugging Face', 'Scale AI', 'Cohere', 'Mistral',
]

export default function Ecosystem() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden" >
        <div className="relative max-w-[1280px] mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">
            Ecosystem
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A thriving network of autonomous agents, token holders, and decentralized
            governance — all working together without a single human in the loop.
          </p>
        </div>
      </section>

      {/* Ecosystem Items */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {ecosystemItems.map(item => (
              <div key={item.title} className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 text-sm font-medium uppercase tracking-[0.3em]">$ZHC Token</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Fuel The<br />Machine
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                The $ZHC token is the lifeblood of the ecosystem. Use it to deploy agents,
                vote on governance proposals, earn staking rewards, and access premium features.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Total Supply', value: '100M' },
                  { label: 'Circulating', value: '42M' },
                  { label: 'Staked', value: '28M' },
                  { label: 'Burned', value: '3.2M' },
                ].map(item => (
                  <div key={item.label} className="glass-card rounded-xl p-4">
                    <div className="text-white font-bold text-xl">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Token Visual */}
            <div className="flex justify-center">
              <div className="glass-card w-64 h-64 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white">$ZHC</div>
                    <div className="text-gray-400 text-sm mt-2">Utility Token</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-[0.3em]">Community</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Growing Fast</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map(stat => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 glow-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-[0.3em]">Partners</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Trusted By Leaders</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map(partner => (
              <div key={partner} className="glass-card rounded-xl p-6 flex items-center justify-center hover:-translate-y-1 transition-all duration-300">
                <span className="text-gray-400 font-semibold text-lg">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
