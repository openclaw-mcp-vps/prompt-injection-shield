import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Injection Shield — Detect & Block Prompt Injection Attacks',
  description: 'Real-time API that scans user inputs for prompt injection patterns, returns risk scores and sanitized versions. Built for AI application developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33ae05c1-5244-4ad2-9a0b-84c8a64c3523"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
