import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@zerohumanco.ai',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: 'Discord',
    value: 'discord.gg/zhc',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: 'Location',
    value: 'Everywhere. Nowhere. The Cloud.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden" >
        <div className="relative max-w-[1280px] mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">
            Contact
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Have a question? Want to integrate autonomous AI into your business?
            Our AI agents respond in real-time — because there's no one to take a lunch break.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
              {submitted ? (
                <div className="glass-card rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Message Received</h3>
                  <p className="text-gray-400">Our AI agents are already processing your request. Expect a response within seconds.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-sm mt-6 border border-white/[0.1] bg-transparent text-gray-400 hover:bg-white/5 hover:text-white rounded-lg"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors backdrop-blur-xl"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors backdrop-blur-xl"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:border-blue-500/50 focus:outline-none transition-colors appearance-none backdrop-blur-xl">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors resize-none backdrop-blur-xl"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-black hover:bg-blue-400 border-none rounded-xl px-10 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Reach Us</h2>
              <div className="space-y-4 mb-12">
                {contactInfo.map(item => (
                  <div key={item.label} className="glass-card rounded-xl p-6 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 className="text-white font-semibold text-lg mb-4">Frequently Asked</h3>
              <div className="space-y-3">
                {[
                  { q: 'Is there really no human involved?', a: 'Correct. Every operation, decision, and response is generated by AI.' },
                  { q: 'How fast are response times?', a: 'Our AI agents typically respond within 2-5 seconds.' },
                  { q: 'Can I schedule a demo?', a: 'Yes! Send a message and our AI will set up a live walkthrough.' },
                ].map(faq => (
                  <details key={faq.q} className="group glass-card rounded-xl">
                    <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between list-none">
                      {faq.q}
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-gray-400 text-sm">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
