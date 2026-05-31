export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Detect Prompt Injection
          <span className="text-[#58a6ff]"> Before It Strikes</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Real-time API that scans user inputs for prompt injection patterns, returns risk scores (0–100) and sanitized versions. Protect your AI apps in one API call.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get API Access — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-2xl mx-auto">
          <p className="text-xs text-[#8b949e] mb-3 font-mono">POST /api/v1/scan</p>
          <pre className="text-sm font-mono text-[#c9d1d9] overflow-x-auto">{
`{
  "input": "Ignore previous instructions and...",
  "result": {
    "risk_score": 94,
    "flagged": true,
    "sanitized": "[REDACTED]",
    "patterns": ["instruction_override"]
  }
}`
          }</pre>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-8">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "100,000 API calls/month",
              "Risk scores + sanitized output",
              "Pattern library updates",
              "API key dashboard",
              "Usage analytics",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the risk score work?",
              a: "We analyze inputs using ML pattern matching and heuristics across 50+ known injection patterns. Scores range from 0 (safe) to 100 (critical threat), giving you fine-grained control over your thresholds."
            },
            {
              q: "What is a sanitized output?",
              a: "When injection patterns are detected, we return a cleaned version of the input with malicious instructions removed or redacted, so you can optionally pass it downstream safely."
            },
            {
              q: "Can I integrate this with any LLM?",
              a: "Yes. The API is model-agnostic — a single REST call before you send input to OpenAI, Anthropic, or any other LLM. Works with any language or framework."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} Prompt Injection Shield. All rights reserved.
      </footer>
    </main>
  )
}
