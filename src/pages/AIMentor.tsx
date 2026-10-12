import { FormEvent, useRef, useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

type Msg = { role: 'user' | 'ai'; text: string }

const starters = [
  'Why is Project Phoenix at risk?',
  'Draft my stand-up from today\'s tasks',
  'Skill gap for a React intern on AIPMS',
  'Mock HR interview question',
]

function reply(q: string) {
  const t = q.toLowerCase()
  if (t.includes('phoenix'))
    return 'Risk model flags Phoenix as Critical. Progress is 25% vs a 55% expected burn. Drivers: resource overload (Epsilon is 1-deep) and two unresolved dependencies on Cloud Migration. Recommendation: move 2 engineers from Website Revamp (already Complete) and slip the QR cert milestone by 8 days. Estimated recovery: +18 pts in 2 sprints.'
  if (t.includes('stand'))
    return 'Yesterday: login UI + bugfixes. Today: API integration + JWT session. Blockers: waiting on /api/auth/profile contract. Sentiment 0.21 — slightly strained. I will ping Ananya if the endpoint is still missing at 4pm.'
  if (t.includes('skill') || t.includes('gap'))
    return 'Compared to the AI Chatbot Platform stack (React, TypeScript, FastAPI, RAG): you are strong on React (75%) and Python (75%), mid on TS/JWT, thin on vector search and prompt eval. Path: FastAPI + JWT (6h) → RAG workshop → mock interview. Expected close of gap: 3 weeks at 5h/week.'
  if (t.includes('interview') || t.includes('hr'))
    return 'HR mock: “Tell me about a time a blocker sat with another team.” Structure STAR. Situation: API contract delayed. Task: still ship login. Action: stubbed the client, wrote contract tests, escalated in standup. Result: unblocked frontend, mentor loop closed in 1 day. Want a technical follow-up on JWT refresh rotation?'
  return 'I am the AIPMS Mentor Agent. I can summarize stand-ups, score productivity, rank resumes, predict slip risk, and build learning paths. Try asking about Phoenix, your skill gap, or a mock interview. Grounding sources: intern guidelines, SRS_v2, attendance last 14 days.'
}

export function AIMentor() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'ai', text: 'Hello — I am your 24×7 AI Mentor. I watch stand-ups, attendance, and tasks, then answer with org-specific context (RAG). What do you want to unblock?' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  const ask = (q: string) => {
    setMsgs((m) => [...m, { role: 'user', text: q }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMsgs((m) => [...m, { role: 'ai', text: reply(q) }])
      setTyping(false)
      box.current?.scrollTo({ top: 99999, behavior: 'smooth' })
    }, 700)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim()) ask(input.trim())
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="card flex h-[70vh] flex-col overflow-hidden lg:col-span-2">
        <div ref={box} className="flex-1 space-y-3 overflow-y-auto p-5">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-800'
                }`}
              >
                {m.role === 'ai' && (
                  <p className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-violet-600">
                    <Sparkles size={12} /> Mentor Agent
                  </p>
                )}
                {m.text}
              </div>
            </div>
          ))}
          {typing && <p className="text-xs text-slate-400">Thinking across stand-ups, tasks, and the knowledge base…</p>}
        </div>
        <form onSubmit={submit} className="flex gap-2 border-t p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about blockers, risk, learning…"
            className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
          />
          <button className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-white">
            <Send size={16} />
          </button>
        </form>
      </div>
      <div className="space-y-3">
        <div className="card p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Suggested</p>
          <div className="mt-3 flex flex-col gap-2">
            {starters.map((s) => (
              <button key={s} onClick={() => ask(s)} className="rounded-xl bg-slate-50 px-3 py-2 text-left text-xs hover:bg-violet-50">
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="card space-y-2 p-4 text-xs">
          <p className="font-semibold">Specialist agents</p>
          <Link className="block rounded-lg bg-violet-50 px-3 py-2 text-violet-700" to="/app/resume">Resume Analyzer</Link>
          <Link className="block rounded-lg bg-sky-50 px-3 py-2 text-sky-700" to="/app/skills">Skill Gap</Link>
          <Link className="block rounded-lg bg-amber-50 px-3 py-2 text-amber-700" to="/app/interview">Interview Prep</Link>
          <Link className="block rounded-lg bg-rose-50 px-3 py-2 text-rose-700" to="/app/risks">Risk Prediction</Link>
        </div>
      </div>
    </div>
  )
}
